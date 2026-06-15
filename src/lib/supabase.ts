import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://aewbkbozdksgpjflrcet.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_Uak6BAyhXN_jOCczy7X_Iw_ovwSEJiS'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Note: Ensure following tables exist in your Supabase project:
/*
-- Appointments Table
create table appointments (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  phone text not null,
  email text,
  date date not null,
  time text not null,
  treatment text,
  message text,
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Testimonials Table
create table testimonials (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  rating integer not null,
  review text not null,
  treatment text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Blog Posts Table
create table blog_posts (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text not null unique,
  content text not null,
  featured_image text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
*/
