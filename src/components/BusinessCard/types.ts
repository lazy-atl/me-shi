export type Theme = 'light' | 'dark';

export interface BusinessCardProps {
  name: string;
  title: string;
  company: string;
  department: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  logo?: string;
  theme?: Theme;
}