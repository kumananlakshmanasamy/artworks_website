import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const Gallery = () => {
  // Set page title
  useEffect(() => {
    document.title = "Gallery | ThreadCraft Designs";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')" 
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Portfolio
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-gray-300"
          >
            Browse our collection of custom embroidery and printing projects
          </motion.p>
        </div>
      </div>

      {/* Gallery Grid Section */}
      <section className="section-container">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <GalleryGrid />
        </motion.div>
      </section>
      
      {/* Custom Project CTA */}
      <section className="section-container bg-gray-50">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We create custom embroidery and printing projects tailored to your specific needs. Contact us to discuss your unique vision.
          </p>
          <Button asChild size="lg">
            <Link href="/contact" className="flex items-center gap-2">
              <MessageSquare size={18} />
              Request a Custom Project
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Gallery;
