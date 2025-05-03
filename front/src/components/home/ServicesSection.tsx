import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { ArrowRight, Sparkles } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ServicesSection = () => {
  return (
    <section className="section-container pastel-bg-purple relative wavy-border-top wavy-border-bottom">
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-24 h-24 rounded-full bg-[hsl(var(--pastel-green))] opacity-60 -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-20 h-20 rounded-full bg-[hsl(var(--pastel-orange))] opacity-50 translate-x-1/3"></div>
      
      {/* Stitching pattern overlay */}
      <div className="absolute inset-0 stitching-pattern opacity-10 z-0"></div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        <motion.h2 variants={fadeIn} className="creative-title">
          Our <span className="text-gradient font-bold">Services</span>
        </motion.h2>
        <motion.p variants={fadeIn} className="handwritten-accent text-center max-w-xl mx-auto mb-8">
          Where your vision meets our craftsmanship
        </motion.p>
        <motion.p variants={fadeIn} className="section-subtitle">
          We offer a comprehensive range of embroidery and printing services to meet your custom apparel needs.
        </motion.p>

        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="flex"
              style={{ transform: `rotate(${index % 2 === 0 ? '1' : '-1'}deg)` }}
            >
              <div className="card-artsy w-full flex flex-col">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-primary shadow-md">
                      {service.icon}
                    </div>
                    <div className="bg-[hsl(var(--accent))] px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-sm">
                      {service.startingPrice}
                    </div>
                  </div>
                  <h3 className="text-xl font-script text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="flex-grow">
                    <ul className="space-y-2.5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Sparkles className="h-4 w-4 text-secondary flex-shrink-0 mr-2 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-auto p-4 pt-0">
                  <div className="text-xs text-gray-500 mb-2 italic">
                    Typical turnaround: {service.turnaround}
                  </div>
                  <Button asChild variant="outline" className="w-full rounded-full border-dashed">
                    <Link href="/services" className="flex items-center justify-center gap-2">
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div variants={fadeIn} className="text-center mt-16">
          <Button asChild size="lg" className="rounded-full shadow-lg px-8 py-6 text-lg font-script">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Decorative brushstroke */}
      <div className="absolute bottom-24 left-0 w-full h-20 brush-stroke-bg opacity-30 z-0"></div>
    </section>
  );
};

export default ServicesSection;
