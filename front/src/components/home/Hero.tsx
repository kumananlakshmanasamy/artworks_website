import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";

const Hero = () => {
  return (
    <div className="relative overflow-hidden pastel-bg-blue h-[90vh] min-h-[600px] flex items-center wavy-border-bottom transition-all duration-700 ease-in-out">
      
      
       
      <video 
        className="absolute inset-0 w-full h-full object-cover" 
        src="/bg.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
      ></video> 
     



                {/*parrot*/}
                <motion.div
                className="absolute w-16 h-16 md:w-24 md:h-24 z-20 group transition-transform duration-300 ease-in-out"
                animate={{
                  x: ["-10%", "110%"],
                  y: [50, -50, 50],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  x: { duration: 14, ease: "linear", repeat: Infinity },
                  y: { duration: 4, ease: "easeInOut", repeat: Infinity },
                  rotate: { duration: 4, ease: "easeInOut", repeat: Infinity },
                }}
              >
                <video
                  className="absolute inset-0 w-full h-full object-cover transform scale-x-[-1] group-hover:scale-150 group-hover:scale-x-[-1]"
                  src="/parrot1.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              </motion.div>

              <motion.div
                className="absolute w-16 h-16 md:w-24 md:h-24 z-20 group transition-transform duration-300 ease-in-out"
                animate={{
                  x: ["110%", "-10%"],
                  y: [-50, 50, -50],
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  x: { duration: 12, ease: "linear", repeat: Infinity },
                  y: { duration: 4, ease: "easeInOut", repeat: Infinity },
                  rotate: { duration: 4, ease: "easeInOut", repeat: Infinity },
                }}
              >
                <video
                  className="absolute inset-0 w-full h-full object-cover transform scale-x-[-1] group-hover:scale-150 group-hover:scale-x-[-1]"                  src="/parrot2.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              </motion.div>

              <motion.div
                className="absolute w-16 h-16 md:w-24 md:h-24 z-20 right-4 mr-20 group transition-transform duration-300 ease-in-out"
                animate={{
                  x: ["110%", "-10%"],
                  y: [-50, 50, -50],
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  x: { duration: 14, ease: "linear", repeat: Infinity },
                  y: { duration: 4, ease: "easeInOut", repeat: Infinity },
                  rotate: { duration: 4, ease: "easeInOut", repeat: Infinity },
                }}
              >
                <video
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-125"
                  src="/parrot1.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              </motion.div>

              <motion.div
                className="absolute w-16 h-16 md:w-24 md:h-24 z-20 right-4 mr-20 group transition-transform duration-300 ease-in-out"
                animate={{
                  x: ["-10%", "110%"],
                  y: [50, -50, 50],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  x: { duration: 12, ease: "linear", repeat: Infinity },
                  y: { duration: 4, ease: "easeInOut", repeat: Infinity },
                  rotate: { duration: 4, ease: "easeInOut", repeat: Infinity },
                }}
              >
                <video
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-125"
                  src="/parrot2.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              </motion.div>



      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[hsl(var(--pastel-orange))] opacity-70 -translate-x-1/2 -translate-y-1/2 blur-md animate-pulse"></div>
      <div className="absolute bottom-16 right-0 w-36 h-36 md:w-48 md:h-48 rounded-full bg-[hsl(var(--pastel-purple))] opacity-60 translate-x-1/3 translate-y-1/3 blur-md animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-[hsl(var(--pastel-green))] opacity-50 blur-md animate-pulse"></div>

      {/* Stitching pattern overlay */}
      <div className="absolute inset-0 stitching-pattern opacity-10 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Tagline */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 text-base font-handwriting text-white bg-secondary rounded-full transform -rotate-2 shadow-lg hover:rotate-0 hover:scale-110 transition-all duration-500 ease-in-out">
              Where creativity meets craftsmanship
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={slideUp}
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: [0, -10, 0] // floating animation
            }}
            transition={{ 
              duration: 2, 
              ease: "easeInOut", 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            className="font-script text-5xl md:text-7xl text-gray-800 mb-4 drop-shadow-2xl 
                      transition-transform duration-500 ease-in-out group"
          >
            {/* ThreadCraft */}
            <span className="block mb-2 transform rotate-1 group-hover:text-gradient group-hover:rotate-0 transition-all duration-500">
              ThreadCraft
            </span>

            {/* Designs */}
            <span className="text-gradient transform -rotate-1 inline-block group-hover:rotate-1 transition-all duration-500">
              Designs
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            variants={fadeIn}
            initial="hidden" 
            animate="visible"
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-heading font-bold text-gray-700 mb-6 transition-all duration-500 ease-in-out hover:scale-105 hover:text-secondary"
          >
            Premium Embroidery & Custom T-Shirt Printing
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto hover:scale-105 transition-all duration-500 ease-in-out"
          >
            Elevate your brand with high-quality embroidery and custom printed apparel. From corporate uniforms to personal gifts, we deliver exceptional craftsmanship with quick turnaround.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <Button asChild size="lg" className="font-medium rounded-full shadow-lg px-8 transform hover:rotate-1 hover:scale-110 hover:shadow-2xl transition-all duration-500 ease-in-out">
              <Link href="/gallery">View Our Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-dashed border-primary shadow-lg px-8 transform hover:-rotate-1 hover:scale-110 hover:shadow-2xl transition-all duration-500 ease-in-out">
              <Link href="/contact">Get A Quote</Link>
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Decorative brushstroke */}
      <div className="absolute bottom-0 left-0 w-full h-24 brush-stroke-bg opacity-50 z-0"></div>
    </div>
  );
};

export default Hero;


