import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageSquare,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { SERVICES, PROCESS_STEPS, FAQS } from "@/lib/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Services = () => {
  // Set page title
  useEffect(() => {
    document.title = "Services | ThreadCraft Designs";
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
            Our Services
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-gray-300"
          >
            Explore our comprehensive range of custom embroidery and printing services
          </motion.p>
        </div>
      </div>

      {/* Services Detail Section */}
      <section className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeIn} className="section-title">
            What We <span className="text-gradient">Offer</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="section-subtitle">
            Professional embroidery and custom printing services for individuals and businesses of all sizes.
          </motion.p>
          
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex"
              >
                <Card className="flex flex-col w-full card-hover">
                  <CardHeader>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2 w-full pt-4">
                      <div className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
                        <span className="font-medium">Starting at</span>
                        <span className="ml-1 text-primary font-bold">{service.startingPrice}</span>
                      </div>
                      <div className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
                        <span className="font-medium">Turnaround</span>
                        <span className="ml-1 text-primary font-bold">{service.turnaround}</span>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      
      {/* Process Section */}
      <section className="section-container bg-gray-50">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeIn} className="section-title">
            Our <span className="text-gradient">Process</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="section-subtitle">
            From concept to creation, here's how we bring your custom apparel vision to life.
          </motion.p>
          
          <motion.div 
            variants={staggerContainer}
            className="relative mt-16"
          >
            {/* Process Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            {/* Process Steps */}
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`relative md:flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                
                {/* Content Card */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="md:hidden w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    {step.note && (
                      <div className="bg-primary/5 p-3 rounded text-sm">
                        <span className="font-medium">Pro Tip:</span> {step.note}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      
      {/* Pricing & FAQs Section */}
      <section className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeIn} className="section-title">
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="section-subtitle">
            Answers to common questions about our embroidery and printing services.
          </motion.p>
          
          <motion.div 
            variants={fadeIn}
            className="max-w-3xl mx-auto mt-12"
          >
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="text-center mt-16"
          >
            <p className="text-lg mb-6">
              Have more questions or need a custom quote for your specific project?
            </p>
            <Button asChild size="lg">
              <Link href="/contact" className="flex items-center gap-2">
                <MessageSquare size={18} />
                Contact Us
              </Link>
            </Button>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-8">
            Whether you need custom embroidery for your business or personalized shirt printing for an event, we're here to bring your vision to life.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
