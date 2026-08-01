'use client';

import { motion } from 'framer-motion';

const features = [
  { icon: '👨‍💻', title: 'Expert Developers', description: 'Senior engineers with 8+ years of experience across diverse technology stacks.' },
  { icon: '💰', title: 'Affordable Pricing', description: 'Transparent, competitive pricing with no hidden fees. Value that scales with you.' },
  { icon: '⚡', title: 'Fast Delivery', description: 'Agile sprints with weekly milestones ensure rapid delivery without compromising quality.' },
  { icon: '🔒', title: 'Secure Coding', description: 'Security-first development with OWASP compliance, code audits, and penetration testing.' },
  { icon: '🚀', title: 'Modern Technology', description: 'We use the latest and most proven tech stacks to future-proof your investment.' },
  { icon: '🎧', title: '24/7 Support', description: 'Round-the-clock technical support with guaranteed SLA response times.' },
  { icon: '🔄', title: 'Agile Development', description: 'Iterative development with continuous feedback loops and full transparency.' },
  { icon: '💬', title: 'Transparent Communication', description: 'Daily updates, weekly reports, and direct access to your dedicated project manager.' },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="section-padding relative overflow-hidden"
      aria-label="Why choose TechVision"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-bg-soft pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold uppercase tracking-widest text-primary-500 mb-3"
            >
              Why TechVision
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-6"
            >
              We Don&apos;t Just Build — <br />
              <span className="gradient-text">We Partner for Success</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[var(--muted)] text-lg leading-relaxed mb-8"
            >
              With over a decade of experience, we&apos;ve refined a development process that consistently
              delivers exceptional results. Our clients don&apos;t just get software — they get a competitive advantage.
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {['ISO 27001 Certified', 'AWS Partner', 'GDPR Compliant', 'SOC 2 Type II'].map((badge) => (
                <div key={badge} className="glass-card px-4 py-2 text-xs font-semibold text-[var(--foreground)]">
                  ✓ {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-5 card-hover group"
              >
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform inline-block">
                  {f.icon}
                </div>
                <h3 className="font-heading font-semibold text-[var(--foreground)] text-sm mb-1.5">
                  {f.title}
                </h3>
                <p className="text-[var(--muted)] text-xs leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
