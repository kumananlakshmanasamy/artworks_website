import { useEffect } from "react";
import ContactForm from "@/components/contact/ContactForm";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const Contact = () => {
  // Set page title
  useEffect(() => {
    document.title = "Contact Us | ThreadCraft Designs";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-20 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')" 
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-gray-300"
          >
            We'd love to hear from you. Get in touch with our team.
          </motion.p>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="section-container">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          <ContactForm />
        </motion.div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-container bg-gray-50">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-12">
            Common <span className="text-gradient">Questions</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-3">How do I place an order?</h3>
              <p className="text-muted-foreground">
                You can request a quote through our contact form, call us directly, or visit our location. We'll discuss your needs and provide pricing options.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">What's your typical turnaround time?</h3>
              <p className="text-muted-foreground">
                For standard orders, we typically deliver within 7-10 business days. Rush services are available for an additional fee.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Do you offer design services?</h3>
              <p className="text-muted-foreground">
                Yes, our in-house design team can help create or refine your designs for optimal embroidery or printing results.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept credit cards, PayPal, bank transfers, and checks for business orders. A 50% deposit is required to begin production.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
