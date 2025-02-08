// src/types/index.ts

export interface Service {
  id: number;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavbarLink {
  label: string;
  path: string;
}

export interface NewsletterSubscription {
  email: string;
}