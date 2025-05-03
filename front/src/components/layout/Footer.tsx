import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Sparkles, Scissors, Shirt } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pastel-bg-blue text-gray-800 pt-16 pb-8 relative wavy-border-top">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[hsl(var(--pastel-purple))] opacity-40 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-[hsl(var(--pastel-orange))] opacity-30"></div>
      
      {/* Stitching pattern overlay */}
      <div className="absolute inset-0 stitching-pattern opacity-5 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-script text-4xl mb-4 text-gray-800">
              ThreadCraft
              <span className="text-gradient block text-2xl mt-1">Designs</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Professional embroidery and custom shirt printing services for individuals and businesses.
            </p>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://facebook.com" 
                aria-label="Facebook" 
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              >
                <Facebook size={18} className="text-primary" />
              </a>
              <a 
                href="https://instagram.com" 
                aria-label="Instagram" 
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              >
                <Instagram size={18} className="text-primary" />
              </a>
              <a 
                href="https://twitter.com" 
                aria-label="Twitter" 
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              >
                <Twitter size={18} className="text-primary" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="col-span-1">
            <div className="relative mb-5">
              <h3 className="font-handwriting text-2xl mb-4 text-gray-800">Our Services</h3>
              <div className="absolute -top-3 -left-3">
                <Scissors className="h-5 w-5 text-secondary" />
              </div>
            </div>
            <ul className="space-y-3">
              {["Custom Embroidery", "Shirt Printing", "Logo Design", "Corporate Uniforms", "Bulk Orders"].map((service, index) => (
                <li key={index} className="group">
                  <Link 
                    href="/services" 
                    className="flex items-center text-gray-600 hover:text-primary transition-colors"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Sparkles size={12} />
                    </span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="col-span-1">
            <div className="relative mb-5">
              <h3 className="font-handwriting text-2xl mb-4 text-gray-800">Quick Links</h3>
              <div className="absolute -top-3 -left-3">
                <Shirt className="h-5 w-5 text-secondary" />
              </div>
            </div>
            <ul className="space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/gallery", label: "Gallery" },
                { path: "/contact", label: "Contact" },
                { path: "/contact", label: "Request a Quote" }
              ].map((link, index) => (
                <li key={index} className="group">
                  <Link 
                    href={link.path} 
                    className="flex items-center text-gray-600 hover:text-primary transition-colors"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Sparkles size={12} />
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-1">
            <div className="card-artsy p-5 transform rotate-1">
              <h3 className="font-handwriting text-2xl mb-4 text-gray-800">Get In Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 h-7 w-7 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-gray-700">
                    123 Stitch Avenue, Textile District
                    <br />
                    Crafton, CA 90210
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-7 w-7 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <a href="tel:+15551234567" className="text-gray-700 hover:text-primary transition-colors">
                    (555) 123-4567
                  </a>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-7 w-7 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <a href="mailto:info@threadcraft.com" className="text-gray-700 hover:text-primary transition-colors">
                    info@threadcraft.com
                  </a>
                </li>
              </ul>
              <Button asChild className="mt-6 w-full rounded-full shadow-lg font-medium">
                <Link href="/contact">Get A Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-gray-200 text-center">
          <p className="font-handwriting text-lg text-gray-600">
            Handcrafted with <span className="text-red-500">♥</span> 
          </p>
          <p className="mt-2 text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ThreadCraft Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
