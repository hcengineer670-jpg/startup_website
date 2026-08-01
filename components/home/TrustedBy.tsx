'use client';

import { motion } from 'framer-motion';

const clients = [
  { name: 'Microsoft', logo: '🔷' },
  { name: 'Google', logo: '🔴' },
  { name: 'Stripe', logo: '🟣' },
  { name: 'Shopify', logo: '🟢' },
  { name: 'Salesforce', logo: '🔵' },
  { name: 'HubSpot', logo: '🟠' },
  { name: 'Notion', logo: '⬛' },
  { name: 'Figma', logo: '🎨' },
  { name: 'Vercel', logo: '▲' },
  { name: 'Docker', logo: '🐋' },
  { name: 'Slack', logo: '💬' },
  { name: 'GitHub', logo: '🐙' },
];

const LogoItem = ({ client }: { client: typeof clients[0] }) => (
  <div className="flex-shrink-0 flex items-center gap-3 px-8 py-4 glass-card mx-3 hover:border-primary-500/30 transition-colors">
    <span className="text-2xl">{client.logo}</span>
    <span className="text-[var(--muted)] font-semibold whitespace-nowrap text-sm">{client.name}</span>
  </div>
);

export default function TrustedBy() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-16 bg-[var(--surface)] border-y border-[var(--border)]" aria-label="Trusted by clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-widest text-[var(--muted)]"
        >
          Trusted by 300+ companies worldwide
        </motion.p>
      </div>

      {/* Scrolling carousel */}
      <div className="relative overflow-hidden">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[var(--surface)] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[var(--surface)] to-transparent pointer-events-none" />

        <div className="flex animate-scroll-left">
          {doubled.map((client, i) => (
            <LogoItem key={`${client.name}-${i}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
