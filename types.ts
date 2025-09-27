export interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  details: string[];
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'cleaning' | 'plumbing' | 'landscaping' | 'renovation';
  caption: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}
