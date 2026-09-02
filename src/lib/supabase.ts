import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type GalleryItem = {
  id: string;
  title: string;
  image_url: string;
  category: string;
  created_at: string;
};

export type Testimonial = {
  id: string;
  name: string;
  event_type: string | null;
  rating: number;
  message: string;
  created_at: string;
};

export type InvoiceItem = {
  name: string;
  quantity: number;
  price: number;
};

export type Invoice = {
  id: string;
  invoice_number: string;
  client_name: string;
  client_phone: string | null;
  client_email: string | null;
  event_date: string | null;
  event_type: string | null;
  event_venue: string | null;
  items: InvoiceItem[];
  subtotal: number;
  tax_rate: number;
  tax_amount: number;
  total: number;
  notes: string | null;
  status: string;
  created_at: string;
};

export const GALLERY_CATEGORIES = [
  'Weddings',
  'Catering',
  'Birthdays',
  'Corporate',
  'Private Parties',
  'Decorations',
] as const;

export const EVENT_TYPES = [
  'Grand Wedding',
  'Thread Ceremony',
  'Birthday Party',
  'Private Party',
  'Corporate Event',
  'Catering Only',
] as const;
