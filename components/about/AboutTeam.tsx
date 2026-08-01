'use client';

import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { teamMembers } from '@/lib/data/team';

export default function AboutTeam() {
  return (
    <section id="team" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Meet the <span className="gradient-text">Dream Team</span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            50+ world-class engineers, designers, and strategists united by a passion for building exceptional products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6 text-center card-hover group"
            >
              {/* Avatar */}
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center text-white text-2xl font-bold group-hover:scale-105 transition-transform">
                  {member.name.charAt(0)}
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-[var(--background)]" />
              </div>

              <h3 className="font-heading font-bold text-[var(--foreground)] mb-0.5">{member.name}</h3>
              <div className="text-primary-500 text-sm font-medium mb-3">{member.role}</div>
              <p className="text-[var(--muted)] text-xs leading-relaxed mb-4">{member.bio}</p>

              {/* Expertise */}
              <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                {member.expertise.map((e) => (
                  <span key={e} className="text-xs px-2 py-0.5 rounded-lg bg-primary-500/10 text-primary-500">
                    {e}
                  </span>
                ))}
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-2">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-[var(--muted)] hover:text-primary-500 transition-colors">
                  <FaLinkedin size={14} />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-[var(--muted)] hover:text-primary-500 transition-colors">
                  <FaTwitter size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
