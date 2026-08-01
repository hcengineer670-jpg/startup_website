'use client';

import { motion } from 'framer-motion';
import { companyTimeline } from '@/lib/data/team';

export default function AboutTimeline() {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Our <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 md:-translate-x-1/2" />

          <div className="space-y-8">
            {companyTimeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:translate-y-2">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {item.year.slice(2)}
                    </div>
                  </div>

                  {/* Card — desktop: alternating sides */}
                  <div className={`md:w-5/12 ml-6 md:ml-0 ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="glass-card p-5 card-hover">
                      <div className="text-primary-500 font-bold text-sm mb-1">{item.year}</div>
                      <h3 className="font-heading font-bold text-[var(--foreground)] mb-1">{item.title}</h3>
                      <p className="text-[var(--muted)] text-sm">{item.description}</p>
                    </div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
