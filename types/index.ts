export interface LessonFrontMatter {
  title: string;
  week: number;
  lesson: number;
  duration: string;
  description: string;
  objectives: string[];
}

export interface Lesson {
  slug: string;
  frontMatter: LessonFrontMatter;
  content: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  cohort: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  popular: boolean;
  features: string[];
}
