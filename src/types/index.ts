export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  gallery: string[];
}

export interface Facility {
  title: string;
  description: string;
  icon: string;
}

export interface FeaturedProduct {
  name: string;
  description: string;
  image: string;
}
