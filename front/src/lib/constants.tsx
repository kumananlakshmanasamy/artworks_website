import React from "react";
import { Scissors, Palette, PenTool, Users, ClipboardList, Shirt } from "lucide-react";
import { Service, ProcessStep, FAQ } from "./types";

// Services offered
export const SERVICES: Service[] = [
  {
    icon: <Scissors className="h-6 w-6" />,
    title: "Custom Embroidery",
    description: "High-quality embroidery for logos, names, and designs on various garments.",
    features: [
      "Logo embroidery on polos and shirts",
      "Monogramming and personalization",
      "Sports team uniforms",
      "Corporate apparel",
      "Custom patches"
    ],
    startingPrice: "$8.99/item",
    turnaround: "7-10 days"
  },
  {
    icon: <Shirt className="h-6 w-6" />,
    title: "Custom Shirt Printing",
    description: "Screen printing and digital printing services for t-shirts and apparel.",
    features: [
      "Screen printing for bulk orders",
      "DTG (direct-to-garment) printing",
      "Full-color designs",
      "Specialty inks and effects",
      "Promotional products"
    ],
    startingPrice: "$12.99/item",
    turnaround: "5-7 days"
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Design Services",
    description: "Professional design services to create or optimize artwork for production.",
    features: [
      "Logo design and vectorization",
      "Design consultation",
      "File preparation",
      "Color separation",
      "Mock-up creation"
    ],
    startingPrice: "$45.00/hour",
    turnaround: "3-5 days"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Corporate Solutions",
    description: "Comprehensive branding solutions for businesses of all sizes.",
    features: [
      "Employee uniforms",
      "Corporate gifts",
      "Event merchandise",
      "Promotional products",
      "Bulk order discounts"
    ],
    startingPrice: "Custom quote",
    turnaround: "10-14 days"
  },
  {
    icon: <ClipboardList className="h-6 w-6" />,
    title: "Rush Services",
    description: "Expedited production and delivery for time-sensitive projects.",
    features: [
      "24-48 hour turnaround available",
      "Priority production",
      "Express shipping options",
      "Weekend service",
      "Emergency orders"
    ],
    startingPrice: "+50% of base price",
    turnaround: "1-3 days"
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Specialty Items",
    description: "Unique products and premium decorating techniques for special projects.",
    features: [
      "Caps and hats",
      "Bags and accessories",
      "Metallic and specialty threads",
      "Appliqué and 3D embroidery",
      "Performance apparel"
    ],
    startingPrice: "Custom quote",
    turnaround: "7-14 days"
  }
];

// Process steps
export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Initial Consultation",
    description: "We start by understanding your project needs, timeline, and budget. This can be done via phone, email, or in-person at our workshop.",
    note: "Bringing examples or references of what you're looking for can be extremely helpful during this phase."
  },
  {
    title: "Design Creation & Approval",
    description: "Our design team will create or optimize your artwork for embroidery or printing. We'll send you a proof for review and approval before production.",
    note: "Vector-based file formats (AI, EPS, PDF) yield the best results for both embroidery and printing."
  },
  {
    title: "Material Selection",
    description: "We'll help you select the right garments, threads, and printing methods to achieve your desired look and feel within your budget.",
    note: "Consider how and where the items will be used to select the most appropriate materials and techniques."
  },
  {
    title: "Production & Quality Control",
    description: "Once approved, your order enters production. Each item undergoes rigorous quality control checks before packaging.",
    note: "For large orders, we recommend approving a physical sample before full production begins."
  },
  {
    title: "Delivery & Satisfaction",
    description: "Your completed order is carefully packaged and delivered. We follow up to ensure complete satisfaction with the final product.",
    note: "We offer convenient pickup options or shipping anywhere in the continental US."
  }
];

// FAQs
export const FAQS: FAQ[] = [
  {
    question: "What is the minimum order quantity?",
    answer: "For embroidery, our minimum order is 6 pieces. For screen printing, our minimum is 12 pieces. Digital printing (DTG) has no minimum and is perfect for small orders or one-offs."
  },
  {
    question: "What file formats do you accept for artwork?",
    answer: "For best results, we prefer vector formats (AI, EPS, PDF) with text converted to outlines. For printing, we can also work with high-resolution JPG or PNG files (300 dpi or higher). Our design team can help convert or recreate artwork if needed."
  },
  {
    question: "How do I get a price quote?",
    answer: "You can request a quote through our contact form, by phone, or by email. Please include details about your project such as quantity, garment type, number of colors/thread colors, design size, and timeline."
  },
  {
    question: "What's included in the price?",
    answer: "Our pricing typically includes the garment, decoration (embroidery or printing), basic digitizing or screen setup, and standard packaging. Additional services like custom packaging, hang tags, or expedited production may incur additional charges."
  },
  {
    question: "Do you offer samples before placing a large order?",
    answer: "Yes, we recommend ordering a pre-production sample for larger orders. Sample costs depend on the item and decoration method but are typically credited toward your final order."
  },
  {
    question: "How do I care for embroidered or printed garments?",
    answer: "For embroidered items, we recommend washing inside-out in cold water and hanging to dry or tumble drying on low heat. For printed items, avoid high heat drying and harsh detergents to maintain print quality. Detailed care instructions are included with your order."
  },
  {
    question: "Can you match specific thread or ink colors?",
    answer: "Yes, we can match specific Pantone colors for both thread and ink. For critical color matching, we recommend ordering a physical sample first."
  }
];
