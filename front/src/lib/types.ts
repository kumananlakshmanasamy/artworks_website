// Type definitions for the application

// Gallery Item type
export interface GalleryItem {
  id: number;
  title: string;
  description: string | null;
  category: string;
  imageUrl: string;
  featured: boolean;
}

// Contact form submission type
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Service type
export interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  startingPrice: string;
  turnaround: string;
}

// Process step type
export interface ProcessStep {
  title: string;
  description: string;
  note?: string;
}

// FAQ type
export interface FAQ {
  question: string;
  answer: string;
}
