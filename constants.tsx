import React from 'react';
import type { Service, GalleryImage, Testimonial } from './types';

// Icons
export const CleaningIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
      <path d="M12 4V2" />
      <path d="M12 8V6" />
      <path d="M16 6l-1.4-1.4" />
      <path d="M8 6l1.4-1.4" />
  </svg>
);
export const PlumbingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
      <path d="M11.5 10.5l-2 5h4l-2 5" />
  </svg>
);
export const LandscapingIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 20h10" />
        <path d="M12 20V4" />
        <path d="M12 4H8c-2.2 0-4 1.8-4 4v0c0 2.2 1.8 4 4 4h4" />
        <path d="M12 4h4c2.2 0 4 1.8 4 4v0c0 2.2-1.8 4-4 4h-4" />
    </svg>
);

// Services Data
export const services: Service[] = [
  {
    icon: <CleaningIcon />,
    title: 'Cleaning Services',
    description: 'Commercial, residential, and specialized hospital-grade cleaning with attention to detail.',
    details: ['Commercial & Office Cleaning', 'Home In/Out Deep Cleans', 'Specialized Hospital Cleaning', 'Post-Construction Cleanup']
  },
  {
    icon: <PlumbingIcon />,
    title: 'Plumbing & Electrical',
    description: 'Expert plumbing, drainage, sanitary, roofing, and electrical fault-finding services.',
    details: ['Drainage & Repairs', 'Sanitary Installations', 'Water Engineering', 'Roofing Specialists', 'Electrical Fault-Finding']
  },
  {
    icon: <LandscapingIcon />,
    title: 'Landscaping & Garden',
    description: 'From design to maintenance, we create and care for stunning commercial and residential gardens.',
    details: ['Contemporary & Exotic Gardens', 'Irrigation Systems', 'Full-Service Maintenance', 'Commercial & Residential Projects']
  }
];

// Gallery Images
export const galleryImages: GalleryImage[] = [
    { id: 1, src: 'https://res.cloudinary.com/dl4qho6ia/image/upload/v1758703497/imageye___-_imgi_8_granite-3_1_duckvk.jpg', alt: 'Modern bathroom with multiple sinks', category: 'plumbing', caption: 'Commercial Bathroom Installation' },
    { id: 2, src: 'https://res.cloudinary.com/dl4qho6ia/image/upload/v1758703497/imageye___-_imgi_6_granite-6_1_udbncu.png', alt: 'Clean commercial sinks on a granite countertop', category: 'cleaning', caption: 'Pristine Commercial Facilities' },
    { id: 3, src: 'https://res.cloudinary.com/dl4qho6ia/image/upload/v1758703496/imageye___-_imgi_5_granite-7_1_pbll25.jpg', alt: 'A worker installing wall tiles', category: 'renovation', caption: 'Expert Tiling and Finishing' },
    { id: 4, src: 'https://res.cloudinary.com/dl4qho6ia/image/upload/v1758703497/imageye___-_imgi_7_granite-5_1_cg9oh0.jpg', alt: 'A newly installed single basin sink', category: 'plumbing', caption: 'Modern Sanitary Ware Fitting' },
    { id: 5, src: 'https://res.cloudinary.com/dl4qho6ia/image/upload/v1758703496/imageye___-_imgi_3_granite-1_1_kl9ew4.png', alt: 'Newly tiled floor in a commercial space', category: 'renovation', caption: 'Durable and Aesthetic Flooring' },
    { id: 6, src: 'https://res.cloudinary.com/dl4qho6ia/image/upload/v1758703497/imageye___-_imgi_2_granite_holder_1_lfzhbm.png', alt: 'Row of clean sinks ready for use', category: 'cleaning', caption: 'Impeccable Hygiene Standards' },
    { id: 7, src: 'https://res.cloudinary.com/dl4qho6ia/image/upload/v1758703496/imageye___-_imgi_4_granite-2_1_djkxdu.jpg', alt: 'Manlyne Projects team member with a finished installation', category: 'plumbing', caption: 'Proud of Our Workmanship' },
    { id: 8, src: 'https://res.cloudinary.com/dl4qho6ia/image/upload/v1758990298/pexels-tima-miroshnichenko-6010515_mq9qdr.jpg', alt: 'Lush and modern landscaped garden', category: 'landscaping', caption: 'Elegant Garden Design' },
];


// Testimonials
export const testimonials: Testimonial[] = [
  {
    quote: "Manlyne Projects transformed our office space. Their cleaning team is incredibly thorough and professional. The attention to detail is second to none. Highly recommended for any business looking for reliable service.",
    author: "J. Botha",
    company: "Director, Tech Solutions Inc."
  },
  {
    quote: "We had a complex plumbing issue that other companies couldn't solve. Manlyne's team diagnosed and fixed it efficiently. Their expertise and transparent pricing were a breath of fresh air. True professionals.",
    author: "A. Naidoo",
    company: "Facility Manager, Metro Mall"
  },
  {
    quote: "Our corporate campus has never looked better. The landscaping service is exceptional, from design to ongoing maintenance. They are passionate about their work, and it shows in the results.",
    author: "S. van der Merwe",
    company: "CEO, Greenfield Corp."
  }
];

export const LOGO_URL = "https://res.cloudinary.com/dl4qho6ia/image/upload/c_pad,b_auto,h_60,w_200/v1758703496/imageye___-_imgi_1_logo_1_a2anra.png";

export const HERO_IMAGE_URL = 'https://res.cloudinary.com/dl4qho6ia/image/upload/v1758989773/pexels-tima-miroshnichenko-6196225_lfecui.jpg';