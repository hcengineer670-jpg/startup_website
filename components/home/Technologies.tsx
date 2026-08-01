'use client';

import { motion } from 'framer-motion';

const techStack = [
  {
    category: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-500/10',
    techs: [
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Vue.js', icon: '💚' },
    ],
  },
  {
    category: 'Backend',
    color: 'from-green-500 to-emerald-500',
    bg: 'bg-green-500/10',
    techs: [
      { name: 'Python', icon: '🐍' },
      { name: 'Django', icon: '🎸' },
      { name: 'FastAPI', icon: '⚡' },
      { name: 'Node.js', icon: '🟩' },
      { name: 'Express', icon: '🚀' },
      { name: 'Java', icon: '☕' },
      { name: 'Spring Boot', icon: '🍃' },
    ],
  },
  {
    category: 'Mobile',
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-500/10',
    techs: [
      { name: 'Flutter', icon: '🦋' },
      { name: 'React Native', icon: '📱' },
      { name: 'Swift', icon: '🍎' },
      { name: 'Kotlin', icon: '🤖' },
    ],
  },
  {
    category: 'Database',
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-500/10',
    techs: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'Redis', icon: '🔴' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-sky-500/10',
    techs: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Azure', icon: '💙' },
      { name: 'GCP', icon: '🌈' },
      { name: 'Docker', icon: '🐋' },
      { name: 'Kubernetes', icon: '☸️' },
    ],
  },
  {
    category: 'Version Control',
    color: 'from-violet-500 to-purple-500',
    bg: 'bg-violet-500/10',
    techs: [
      { name: 'Git', icon: '🌿' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'GitLab', icon: '🦊' },
    ],
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="section-padding" aria-label="Technology stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold uppercase tracking-widest text-primary-500 mb-3"
          >
            Our Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4"
          >
            Technologies We <span className="gradient-text">Master</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--muted)] max-w-2xl mx-auto"
          >
            We stay at the forefront of technology, working with the best tools and frameworks to deliver optimal solutions.
          </motion.p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                <h3 className="font-heading font-bold text-[var(--foreground)] text-lg">
                  {category.category}
                </h3>
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className={`flex items-center gap-2 ${category.bg} px-3 py-2 rounded-xl border border-[var(--border)] hover:border-primary-500/50 transition-colors cursor-default group`}
                  >
                    <span className="text-base group-hover:scale-125 transition-transform">{tech.icon}</span>
                    <span className="text-xs font-semibold text-[var(--foreground)]">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
