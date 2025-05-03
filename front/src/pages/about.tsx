import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Award, 
  Users, 
  Clock, 
  Truck, 
  ThumbsUp, 
  Heart 
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, slideRight } from "@/lib/animations";

const About = () => {
  // Set page title
  useEffect(() => {
    document.title = "About Us | ThreadCraft Designs";
  }, []);

  const ourValues = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Quality",
      description: "We never compromise on the quality of our materials or craftsmanship."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority in every project we undertake."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Timeliness",
      description: "We respect deadlines and deliver projects on time, every time."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Passion",
      description: "We're passionate about creating custom apparel that exceeds expectations."
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Reliability",
      description: "Count on us for consistent quality and service with every order."
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-primary" />,
      title: "Integrity",
      description: "We operate with honesty and transparency in all our business dealings."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')" 
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-gray-300"
          >
            Learn about our journey in the custom apparel industry and the values that guide our work.
          </motion.p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn}>
            <img
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Our design studio"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          
          <motion.div variants={staggerContainer}>
            <motion.span
              variants={slideRight}
              className="inline-block px-3 py-1 text-sm font-medium rounded-full text-white bg-secondary mb-4"
            >
              Established 2013
            </motion.span>
            
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              From Passion to Profession
            </motion.h2>
            
            <motion.div 
              variants={staggerContainer}
              className="space-y-4 text-muted-foreground"
            >
              <motion.p variants={fadeIn}>
                ThreadCraft Designs began in 2013 when founder Sarah Mitchell turned her passion for textile design into a small embroidery business. Starting with just one machine in her garage, Sarah focused on creating personalized items for friends and family.
              </motion.p>
              
              <motion.p variants={fadeIn}>
                As word spread about the quality and creativity of her work, demand grew rapidly. Within two years, ThreadCraft expanded to a small workshop and added custom shirt printing to its services. The company hired its first employees and established relationships with local businesses.
              </motion.p>
              
              <motion.p variants={fadeIn}>
                Today, ThreadCraft Designs operates from a full-service production facility with state-of-the-art equipment and a team of skilled professionals. We've maintained our commitment to quality craftsmanship while growing to serve clients nationwide.
              </motion.p>
              
              <motion.div variants={fadeIn}>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Our Mission</h3>
                <p>
                  To provide exceptional custom embroidery and printing services that help our clients express their unique identity through high-quality apparel and accessories.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Values Section */}
      <section className="section-container bg-gray-50">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={fadeIn} 
            className="section-title"
          >
            Our <span className="text-gradient">Values</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn} 
            className="section-subtitle"
          >
            These core principles guide everything we do at ThreadCraft Designs.
          </motion.p>
          
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {ourValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-sm card-hover"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={fadeIn} 
            className="section-title"
          >
            Why Choose <span className="text-gradient">ThreadCraft</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn} 
            className="section-subtitle"
          >
            We stand out from the competition through our commitment to excellence.
          </motion.p>
          
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12"
          >
            <motion.div variants={fadeIn}>
              <img
                src="https://images.unsplash.com/photo-1574008913847-035e451f9414?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Quality inspection process"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div 
                variants={fadeIn}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
                  <p className="text-muted-foreground">
                    We use only the highest quality threads, fabrics, and inks to ensure your custom apparel looks great and lasts for years.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
                  <p className="text-muted-foreground">
                    Our team of skilled technicians has years of experience in embroidery and printing techniques, ensuring precise execution of your designs.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
                  <p className="text-muted-foreground">
                    From initial design consultation to final delivery, we work closely with you to bring your vision to life exactly as you imagined.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
                  <p className="text-muted-foreground">
                    We understand the importance of deadlines and offer industry-leading turnaround times without sacrificing quality.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="section-container hero-gradient text-white">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-lg opacity-90 mb-8">
            Let's create something amazing together. Contact us today to discuss your custom embroidery or shirt printing project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Link href="/gallery">View Our Work</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
