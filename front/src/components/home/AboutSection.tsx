import { motion } from "framer-motion";
import { fadeIn, staggerContainer, slideRight } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Scissors, Sparkles, Star } from "lucide-react";

const AboutSection = () => {
  const benefits = [
    "10+ years of industry experience",
    "High-quality materials and craftsmanship",
    "Quick turnaround on all orders",
    "Personalized design consultation",
    "Competitive pricing for bulk orders",
    "Satisfaction guaranteed on all products"
  ];

  return (
    <section className="section-container pastel-bg-green relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-[hsl(var(--pastel-orange))] opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 rounded-full bg-[hsl(var(--pastel-blue))] opacity-30"></div>
      
      {/* Stitching pattern overlay */}
      <div className="absolute inset-0 stitching-pattern opacity-5 z-0"></div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10"
      >
        {/* Left Column - Image with creative framing */}
        <motion.div 
          variants={fadeIn}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-dashed border-[hsl(var(--pastel-purple))] rounded-lg z-0"></div>
          <div className="relative z-10 rounded-lg overflow-hidden shadow-lg transform rotate-1">
            <img
              src="https://images.unsplash.com/photo-1574008913847-035e451f9414?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Workshop with embroidery machines"
              className="w-full h-auto"
            />
            <div className="absolute -bottom-2 -right-2 bg-white p-4 rounded-lg shadow-lg transform -rotate-2">
              <p className="font-script text-2xl text-gray-800">Est. 2013</p>
              <div className="flex items-center justify-center mt-1">
                <Star className="h-3 w-3 text-primary" fill="currentColor" />
                <Star className="h-4 w-4 text-primary mx-1" fill="currentColor" />
                <Star className="h-3 w-3 text-primary" fill="currentColor" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div variants={fadeIn} className="relative">
          <motion.span
            variants={slideRight}
            className="handwritten-accent inline-block transform -rotate-2 mb-2"
          >
            Our story
          </motion.span>
          
          <motion.h2 
            variants={slideRight}
            className="font-script text-4xl text-gray-800 mb-6"
          >
            Crafting Quality Since <span className="text-gradient font-bold">2013</span>
          </motion.h2>
          
          <motion.div 
            variants={fadeIn} 
            className="relative mb-8 card-artsy p-6"
          >
            <p className="text-gray-700 mb-4">
              ThreadCraft Designs was founded with a simple mission: to provide high-quality embroidery and custom shirt printing services that help businesses and individuals express their unique identity.
            </p>
            
            <p className="text-gray-700">
              What started as a small family business has grown into a trusted name in the custom apparel industry. We combine traditional craftsmanship with modern technology to deliver exceptional products for any occasion.
            </p>
            
            <div className="absolute -top-3 -right-3">
              <Scissors className="h-6 w-6 text-primary transform rotate-45" />
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="mb-8">
            <h3 className="font-medium text-lg mb-4">What makes us special:</h3>
            <motion.ul 
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  variants={fadeIn}
                  className="flex items-start gap-3 group"
                >
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                    <Sparkles className="h-3.5 w-3.5 text-white" />
                  </span>
                  <span className="text-gray-700">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div variants={fadeIn} className="transform hover:rotate-1 transition-transform inline-block">
            <Button asChild size="lg" className="rounded-full shadow-lg px-6 font-medium">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
