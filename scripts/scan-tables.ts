import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

function loadEnvLocal() {
  const envPath = path.resolve(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf-8');
    content.split(/\r?\n/).forEach((line) => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx !== -1) {
          process.env[trimmed.slice(0, eqIdx).trim()] = trimmed.slice(eqIdx + 1).trim();
        }
      }
    });
  }
}

loadEnvLocal();

async function checkExistingTables() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY)!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const tablesToTry = [
    'contact_submissions',
    'contacts',
    'newsletter_subscribers',
    'subscribers',
    'messages',
    'leads',
    'blogs',
    'services',
    'portfolio',
    'testimonials',
    'team'
  ];

  console.log('Scanning Supabase tables...');
  for (const table of tablesToTry) {
    const { data, error } = await supabase.from(table).select('*').limit(1);
    if (!error) {
      console.log(`✅ Table Found: '${table}' (Rows: ${data?.length})`);
    } else if (error.code !== '42P01' && error.message.indexOf('schema cache') === -1) {
      console.log(`ℹ️ Table '${table}' exists but returned error:`, error.message);
    }
  }
  process.exit(0);
}

checkExistingTables();
