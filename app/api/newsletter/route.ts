import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabase } from '@/lib/supabaseClient';
import { addSubscriber } from '@/lib/newsletterStore';

const subscribeSchema = z.object({
  email: z
    .string()
    .min(1, 'Please enter your email address.')
    .email('Please enter a valid email address.'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = subscribeSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.errors[0]?.message || 'Please enter a valid email address.';
      return NextResponse.json(
        { success: false, message: firstError },
        { status: 400 }
      );
    }

    const { email } = result.data;
    const normalized = email.toLowerCase().trim();

    // Check Supabase for existing subscription
    const { data: existing } = await supabase
      .from('newsletter_subscribers')
      .select('id')
      .eq('email', normalized)
      .maybeSingle();

    if (existing) {
      return NextResponse.json(
        { success: false, message: 'This email is already subscribed.' },
        { status: 409 }
      );
    }

    // Insert into Supabase
    const { error: insertErr } = await supabase.from('newsletter_subscribers').insert([
      {
        email: normalized,
        subscribed_at: new Date().toISOString(),
      },
    ]);

    const isMissingTable =
      insertErr &&
      (insertErr.code === '42P01' ||
        insertErr.code === 'PGRST204' ||
        insertErr.message?.includes('schema cache') ||
        insertErr.message?.includes('Could not find the table'));

    if (insertErr && !isMissingTable) {
      console.warn('Supabase newsletter insert warning:', insertErr.message);
    }

    // Fallback store sync
    addSubscriber(normalized);

    return NextResponse.json(
      { success: true, message: 'Thank you for subscribing!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription API error:', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
