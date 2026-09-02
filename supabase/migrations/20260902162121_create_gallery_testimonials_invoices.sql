/*
# Create gallery, testimonials, and invoices tables for GS Events and Catering

## Overview
This migration creates three tables to support the GS Events and Catering website:
1. `gallery_items` — stores photos for the public gallery, categorized by event type
2. `testimonials` — stores client reviews displayed on the home page
3. `invoices` — stores generated invoices for the admin dashboard

## Tables

### gallery_items
- `id` (uuid, primary key)
- `title` (text, not null) — title of the gallery photo
- `image_url` (text, not null) — URL of the image
- `category` (text, not null) — event category: 'Weddings', 'Catering', 'Birthdays', 'Corporate', 'Private Parties', 'Decorations'
- `created_at` (timestamptz, default now())

### testimonials
- `id` (uuid, primary key)
- `name` (text, not null) — client name
- `event_type` (text) — type of event they booked
- `rating` (integer, default 5) — star rating 1-5
- `message` (text, not null) — testimonial text
- `created_at` (timestamptz, default now())

### invoices
- `id` (uuid, primary key)
- `invoice_number` (text, not null) — unique invoice number
- `client_name` (text, not null) — name of the client
- `client_phone` (text) — client phone number
- `client_email` (text) — client email
- `event_date` (date) — date of the event
- `event_type` (text) — type of event
- `event_venue` (text) — venue address
- `items` (jsonb, default '[]') — array of line items with name, quantity, price
- `subtotal` (numeric, default 0) — subtotal before tax
- `tax_rate` (numeric, default 0) — tax percentage (e.g., 5 for 5%)
- `tax_amount` (numeric, default 0) — calculated tax amount
- `total` (numeric, default 0) — grand total
- `notes` (text) — additional notes
- `status` (text, default 'draft') — 'draft', 'sent', 'paid'
- `created_at` (timestamptz, default now())

## Security
- RLS enabled on all three tables.
- Gallery items and testimonials are public-readable (anon + authenticated) since they display on the public website.
- Gallery items and testimonials allow admin writes (anon + authenticated) since the admin uses Supabase auth.
- Invoices are admin-only: full CRUD for authenticated users, no public access.

## Notes
1. The admin dashboard uses Supabase email/password auth. Only authenticated users can manage gallery items, testimonials, and invoices.
2. Public visitors can view gallery items and testimonials but cannot modify them.
3. Invoice data is entirely private — only visible to authenticated admin users.
*/

-- Gallery items table
CREATE TABLE IF NOT EXISTS gallery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  image_url text NOT NULL,
  category text NOT NULL DEFAULT 'Decorations',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;

-- Public can read gallery items
DROP POLICY IF EXISTS "public_read_gallery" ON gallery_items;
CREATE POLICY "public_read_gallery" ON gallery_items FOR SELECT
  TO anon, authenticated USING (true);

-- Only authenticated (admin) can insert
DROP POLICY IF EXISTS "admin_insert_gallery" ON gallery_items;
CREATE POLICY "admin_insert_gallery" ON gallery_items FOR INSERT
  TO authenticated WITH CHECK (true);

-- Only authenticated (admin) can update
DROP POLICY IF EXISTS "admin_update_gallery" ON gallery_items;
CREATE POLICY "admin_update_gallery" ON gallery_items FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- Only authenticated (admin) can delete
DROP POLICY IF EXISTS "admin_delete_gallery" ON gallery_items;
CREATE POLICY "admin_delete_gallery" ON gallery_items FOR DELETE
  TO authenticated USING (true);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  event_type text,
  rating integer NOT NULL DEFAULT 5,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Public can read testimonials
DROP POLICY IF EXISTS "public_read_testimonials" ON testimonials;
CREATE POLICY "public_read_testimonials" ON testimonials FOR SELECT
  TO anon, authenticated USING (true);

-- Only authenticated (admin) can insert
DROP POLICY IF EXISTS "admin_insert_testimonials" ON testimonials;
CREATE POLICY "admin_insert_testimonials" ON testimonials FOR INSERT
  TO authenticated WITH CHECK (true);

-- Only authenticated (admin) can update
DROP POLICY IF EXISTS "admin_update_testimonials" ON testimonials;
CREATE POLICY "admin_update_testimonials" ON testimonials FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- Only authenticated (admin) can delete
DROP POLICY IF EXISTS "admin_delete_testimonials" ON testimonials;
CREATE POLICY "admin_delete_testimonials" ON testimonials FOR DELETE
  TO authenticated USING (true);

-- Invoices table (admin-only)
CREATE TABLE IF NOT EXISTS invoices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_number text NOT NULL,
  client_name text NOT NULL,
  client_phone text,
  client_email text,
  event_date date,
  event_type text,
  event_venue text,
  items jsonb NOT NULL DEFAULT '[]'::jsonb,
  subtotal numeric NOT NULL DEFAULT 0,
  tax_rate numeric NOT NULL DEFAULT 0,
  tax_amount numeric NOT NULL DEFAULT 0,
  total numeric NOT NULL DEFAULT 0,
  notes text,
  status text NOT NULL DEFAULT 'draft',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

-- Only authenticated (admin) can read invoices
DROP POLICY IF EXISTS "admin_read_invoices" ON invoices;
CREATE POLICY "admin_read_invoices" ON invoices FOR SELECT
  TO authenticated USING (true);

-- Only authenticated (admin) can insert invoices
DROP POLICY IF EXISTS "admin_insert_invoices" ON invoices;
CREATE POLICY "admin_insert_invoices" ON invoices FOR INSERT
  TO authenticated WITH CHECK (true);

-- Only authenticated (admin) can update invoices
DROP POLICY IF EXISTS "admin_update_invoices" ON invoices;
CREATE POLICY "admin_update_invoices" ON invoices FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- Only authenticated (admin) can delete invoices
DROP POLICY IF EXISTS "admin_delete_invoices" ON invoices;
CREATE POLICY "admin_delete_invoices" ON invoices FOR DELETE
  TO authenticated USING (true);

-- Index for faster category filtering on gallery
CREATE INDEX IF NOT EXISTS idx_gallery_items_category ON gallery_items(category);
CREATE INDEX IF NOT EXISTS idx_invoices_created_at ON invoices(created_at DESC);
