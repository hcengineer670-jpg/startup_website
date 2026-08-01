'use client';

import { motion } from 'framer-motion';

const steps = [
  { number: '01', title: 'Requirement Gathering', description: 'Deep-dive discovery sessions to understand your business goals, users, and technical requirements.', icon: '🎯' },
  { number: '02', title: 'Research', description: 'Market analysis, competitive landscape review, and technology stack evaluation.', icon: '🔍' },
  { number: '03', title: 'Planning', description: 'Project roadmap, sprint planning, resource allocation, and milestone definition.', icon: '📋' },
  { number: '04', title: 'UI/UX Design', description: 'Wireframes, prototypes, and pixel-perfect designs with user testing validation.', icon: '🎨' },
  { number: '05', title: 'Development', description: 'Agile development with daily standups, code reviews, and continuous integration.', icon: '⚙️' },
  { number: '06', title: 'Testing', description: 'Rigorous QA with automated tests, performance testing, and security audits.', icon: '🧪' },
  { number: '07', title: 'Deployment', description: 'Zero-downtime deployment with CI/CD pipelines and real-time monitoring.', icon: '🚀' },
  { number: '08', title: 'Maintenance', description: 'Ongoing support, performance optimization, feature updates, and SLA management.', icon: '🔧' },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-[var(--surface)]" aria-label="Development process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold uppercase tracking-widest text-primary-500 mb-3"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4"
          >
            Our <span className="gradient-text">Proven Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--muted)] max-w-2xl mx-auto text-lg"
          >
            A battle-tested 8-step development process that has delivered 500+ successful projects.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/80 via-secondary-500/60 to-accent-500/40 transform -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative lg:flex ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:mb-12`}
                >
                  {/* Card */}
                  <div className={`lg:w-5/12 ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="glass-card p-6 card-hover group">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                        <div className="text-2xl group-hover:scale-110 transition-transform">{step.icon}</div>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary-500">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-[var(--foreground)] text-lg mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[var(--muted)] text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex lg:w-2/12 justify-center">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm shadow-lg z-10 relative">
                        {step.number}
                      </div>
                      <div className="absolute inset-0 rounded-full gradient-bg opacity-30 animate-ping" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="lg:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
