import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Scissors, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile as useMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const isMobile = useMobile();
  
  // Close mobile menu on location change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Decorative top border */}
      <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-accent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative scissors element */}
        
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="relative group">
              <h1 className="font-script text-2xl text-gray-800 group-hover:opacity-0 transition-opacity duration-300">
                ThreadCraft
              </h1>
              <h1 className="font-script text-2xl text-gradient absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ThreadCraft
              </h1>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${
                  isActive(link.path)
                    ? "text-primary font-medium"
                    : "text-gray-600 hover:text-primary"
                } px-4 py-2 rounded-full relative group transition-all duration-200 hover:-translate-y-1`}
              >
                {isActive(link.path) && (
                  <motion.span 
                    layoutId="navbar-active" 
                    className="absolute inset-0 bg-[hsl(var(--primary))] opacity-10 rounded-full"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
                {/* Decorative sparkle appears on hover */}
                <span className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="h-3 w-3 text-secondary" />
                </span>
              </Link>
            ))}
          </nav>

          {/* Phone button */}
          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="outline" size="sm" className="rounded-full border-dashed">
              <a href="tel:+15551234567" className="flex items-center gap-2">
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </Button>
            <Button asChild className="rounded-full shadow-md">
              <Link href="/contact">Get A Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-primary hover:bg-primary/10 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md relative"
          >
            {/* Stitching pattern overlay */}
            <div className="absolute inset-0 stitching-pattern opacity-5 z-0"></div>
            
            <div className="px-4 pt-4 pb-6 space-y-2 relative z-10">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`${
                    isActive(link.path)
                      ? "bg-primary/10 text-primary font-medium border-primary"
                      : "text-gray-700 hover:bg-gray-50 border-transparent"
                  } block px-4 py-3 rounded-lg text-base border-l-2 transition-colors  items-center`}
                >
                  {isActive(link.path) && (
                    <Sparkles className="h-4 w-4 mr-2 text-primary" />
                  )}
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-5 pb-2">
                <Button asChild variant="outline" size="sm" className="rounded-full border-dashed">
                  <a href="tel:+15551234567" className="flex items-center justify-center gap-2">
                    <Phone size={16} />
                    <span>Call Now</span>
                  </a>
                </Button>
                <Button asChild className="rounded-full shadow-md">
                  <Link href="/contact" className="flex justify-center">Get A Quote</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
