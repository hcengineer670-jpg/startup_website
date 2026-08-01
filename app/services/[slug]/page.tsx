import { services } from '@/lib/data/services';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactCTA from '@/components/home/ContactCTA';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.description} Learn about TechVision's ${service.title} services, features, and development process.`,
  };
}

const faqData: Record<string, Array<{ q: string; a: string }>> = {
  default: [
    { q: 'How long does a typical project take?', a: 'Project timelines vary based on complexity. Simple projects take 4-8 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during the discovery phase.' },
    { q: 'How much does it cost?', a: 'Our pricing is based on project scope and complexity. We offer flexible engagement models including fixed-price, time & materials, and dedicated team models. Contact us for a free estimate.' },
    { q: 'Do you provide post-launch support?', a: 'Yes! We offer comprehensive maintenance and support packages with guaranteed SLA response times. Most clients opt for our ongoing support plans.' },
    { q: 'How do you ensure code quality?', a: 'We follow strict coding standards, conduct code reviews, implement automated testing (unit, integration, e2e), and use CI/CD pipelines to maintain the highest code quality.' },
    { q: 'Can you work with our existing team?', a: 'Absolutely. We can augment your team with specific expertise, or work as a fully dedicated team. We adapt to your preferred collaboration style.' },
  ],
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const faqs = faqData[slug] ?? faqData.default;

  const procesSteps = [
    'Discovery & Requirements', 'Research & Planning', 'UI/UX Design',
    'Development', 'Testing & QA', 'Deployment', 'Maintenance & Support',
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--muted)] mb-8">
            <Link href="/" className="hover:text-primary-500 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary-500 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[var(--foreground)]">{service.title}</span>
          </nav>

          <div className="flex items-center gap-6 mb-6">
            <div className={`w-20 h-20 rounded-3xl ${service.bg} flex items-center justify-center text-4xl`}>
              {service.icon}
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary-500 mb-1 block">
                Service
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)]">
                {service.title}
              </h1>
            </div>
          </div>
          <p className="text-[var(--muted)] text-xl max-w-3xl">{service.description}</p>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-[var(--foreground)] mb-6">
                What&apos;s <span className="gradient-text">Included</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature) => (
                  <div key={feature} className="glass-card p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 font-bold text-sm flex-shrink-0">✓</div>
                    <span className="text-[var(--foreground)] font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-heading text-3xl font-bold text-[var(--foreground)] mb-6">
                Our <span className="gradient-text">Process</span>
              </h2>
              <div className="space-y-3">
                {procesSteps.map((step, i) => (
                  <div key={step} className="glass-card p-4 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span className="text-[var(--foreground)] font-medium text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-[var(--foreground)] text-center mb-10">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="glass-card p-6 group"
              >
                <summary className="font-semibold text-[var(--foreground)] cursor-pointer flex items-center justify-between list-none">
                  {faq.q}
                  <span className="text-primary-500 ml-4 text-xl">+</span>
                </summary>
                <p className="mt-4 text-[var(--muted)] text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
