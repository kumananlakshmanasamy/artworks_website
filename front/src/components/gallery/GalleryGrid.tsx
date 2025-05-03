import { useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { GalleryItem } from "@/lib/types";
import Lightbox from "@/components/ui/lightbox";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";

const GalleryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<GalleryItem | null>(null);

  const { data: galleryItems, isLoading } = useQuery<GalleryItem[]>({
    queryKey: ["/api/gallery"],
    queryFn: () => fetch("/api/gallery").then(res => res.json()),
  });

  const openLightbox = useCallback((item: GalleryItem) => {
    setCurrentImage(item);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setCurrentImage(null);
  }, []);

  const filteredItems = galleryItems?.filter(item => 
    selectedCategory === "all" || item.category === selectedCategory
  );

  const categories = [
    { value: "all", label: "All Works" },
    { value: "embroidery", label: "Embroidery" },
    { value: "printed", label: "Printed Shirts" },
    { value: "workshop", label: "Workshop" }
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <Tabs 
        defaultValue="all" 
        value={selectedCategory}
        onValueChange={setSelectedCategory}
        className="w-full"
      >
        <TabsList className="flex justify-center mb-8 overflow-x-auto">
          {categories.map((category) => (
            <TabsTrigger key={category.value} value={category.value}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value={selectedCategory} className="mt-2">
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredItems && filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeIn}
                  layoutId={`gallery-item-${item.id}`}
                >
                  <Card 
                    className="overflow-hidden cursor-pointer card-hover"
                    onClick={() => openLightbox(item)}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="gallery-image w-full"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                          <p className="text-sm text-white/80 line-clamp-2">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No items found in this category</p>
              </div>
            )}
          </motion.div>
        </TabsContent>
      </Tabs>

      {lightboxOpen && currentImage && (
        <Lightbox
          image={currentImage}
          onClose={closeLightbox}
          galleryItems={filteredItems || []}
        />
      )}
    </motion.div>
  );
};

export default GalleryGrid;
