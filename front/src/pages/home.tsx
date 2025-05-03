import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const Home = () => {
  // Set page title
  useEffect(() => {
    document.title = "ThreadCraft Designs | Custom Embroidery & Shirt Printing";
  }, []);

  return (
    <div>
      <Hero />
      <FeaturedWorks />
      <AboutSection />
      <ServicesSection />
      
      {/* Call to Action Section */}
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
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact" className="flex items-center gap-2">
                <MessageSquare size={18} />
                Request a Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:+15551234567" className="flex items-center gap-2">
                <Phone size={18} />
                Call Us Now
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
      
      {/* Testimonials/Gallery Preview Section */}
      <section className="section-container bg-gray-50">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-title">Our Satisfied Customers</h2>
          <p className="section-subtitle">
            Don't just take our word for it. See what our customers have to say about our work.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "ThreadCraft did an amazing job with our company's polo shirts. The embroidery quality is excellent, and they delivered on time. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="text-left">
                  <p className="font-semibold">John Smith</p>
                  <p className="text-sm text-gray-500">Retail Store Owner</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "We needed custom t-shirts for our family reunion, and ThreadCraft delivered! The print quality is fantastic, and everyone loved their shirts."
              </p>
              <div className="flex items-center">
                <div className="text-left">
                  <p className="font-semibold">Lisa Johnson</p>
                  <p className="text-sm text-gray-500">Event Organizer</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The team at ThreadCraft was incredibly helpful in designing custom embroidered jackets for our staff. Professional service and outstanding quality."
              </p>
              <div className="flex items-center">
                <div className="text-left">
                  <p className="font-semibold">Michael Thompson</p>
                  <p className="text-sm text-gray-500">Restaurant Manager</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Button asChild variant="outline">
              <Link href="/gallery" className="flex items-center gap-2">
                View Our Gallery <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
