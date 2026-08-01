import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with TechVision. Book a free consultation, request a quote, or reach us via email, phone, or WhatsApp. We respond within 24 hours.',
};

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@techvision.io',
    href: 'mailto:hello@techvision.io',
    color: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 74168 58563',
    href: 'tel:+917416858563',
    color: 'bg-green-500/10',
    iconColor: 'text-green-500',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 74168 58563',
    href: 'https://wa.me/917416858563',
    color: 'bg-emerald-500/10',
    iconColor: 'text-emerald-500',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary-500 mb-4">
            Get In Touch
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6">
            Let&apos;s Build Something <span className="gradient-text">Amazing Together</span>
          </h1>
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
            Ready to transform your business? We&apos;d love to hear about your project.
            Get a free consultation and custom quote within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-2">
                  Contact <span className="gradient-text">Information</span>
                </h2>
                <p className="text-[var(--muted)] text-sm">
                  Reach out through any channel. We typically respond within 2-4 hours during business hours.
                </p>
              </div>

              {contactInfo.map(({ icon: Icon, label, value, href, color, iconColor }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-card p-5 flex items-start gap-4 card-hover block group"
                >
                  <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={iconColor} size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-0.5">{label}</div>
                    <div className="font-semibold text-[var(--foreground)] text-sm">{value}</div>
                  </div>
                </a>
              ))}

              {/* Social links */}
              <div className="glass-card p-5">
                <h3 className="font-semibold text-[var(--foreground)] mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Twitter', href: 'https://twitter.com/techvision', emoji: '🐦' },
                    { name: 'LinkedIn', href: 'https://linkedin.com/company/techvision', emoji: '💼' },
                    { name: 'GitHub', href: 'https://github.com/techvision', emoji: '🐙' },
                    { name: 'YouTube', href: 'https://youtube.com/techvision', emoji: '▶️' },
                    { name: 'Instagram', href: 'https://instagram.com/techvision', emoji: '📷' },
                  ].map(({ name, href, emoji }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card px-3 py-2 text-xs font-medium text-[var(--muted)] hover:text-primary-500 hover:border-primary-500/50 transition-all flex items-center gap-1.5"
                    >
                      <span>{emoji}</span> {name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="quote" className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
