-- =========================================================================
-- TechVision Supabase Database Schema & Realtime Setup
-- Execute this SQL script in your Supabase SQL Editor: https://supabase.com/dashboard
-- =========================================================================

-- 1. Create Contact Submissions Table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    business_type TEXT NOT NULL,
    phone TEXT,
    service TEXT NOT NULL,
    budget TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous inserts for contact forms
CREATE POLICY "Allow public insert to contact_submissions"
ON public.contact_submissions FOR INSERT
TO anon
WITH CHECK (true);

-- Allow reading contact submissions
CREATE POLICY "Allow public select on contact_submissions"
ON public.contact_submissions FOR SELECT
TO anon
USING (true);


-- 2. Create Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    subscribed_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous inserts for newsletter subscriptions
CREATE POLICY "Allow public insert to newsletter_subscribers"
ON public.newsletter_subscribers FOR INSERT
TO anon
WITH CHECK (true);

-- Allow reading newsletter subscriptions
CREATE POLICY "Allow public select on newsletter_subscribers"
ON public.newsletter_subscribers FOR SELECT
TO anon
USING (true);


-- 3. Enable Supabase Realtime Publications for Realtime Synchronization
ALTER PUBLICATION supabase_realtime ADD TABLE public.contact_submissions;
ALTER PUBLICATION supabase_realtime ADD TABLE public.newsletter_subscribers;
