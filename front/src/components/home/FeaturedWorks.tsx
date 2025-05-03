import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { GalleryItem } from "@/lib/types";

const FeaturedWorks = () => {
  const { data: items, isLoading } = useQuery<GalleryItem[]>({
    queryKey: ["/api/gallery", { featured: true }],
    queryFn: () => fetch("/api/gallery?featured=true").then(res => res.json()),
  });

  if (isLoading) {
    return (
      <div className="section-container flex justify-center items-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <section className="section-container">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Featured <span className="text-gradient">Works</span>
        </h2>
        <p className="section-subtitle">
          Explore some of our recent projects and see the quality of our embroidery and printing services.
        </p>

        {items && items.length > 0 ? (
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {items.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="overflow-hidden card-hover">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full aspect-square object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                          <p className="text-sm text-white/80 line-clamp-2">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No featured works found</p>
          </div>
        )}

        <div className="flex justify-center mt-12">
          <Button asChild>
            <Link href="/gallery" className="flex items-center gap-2">
              View All Projects <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedWorks;
