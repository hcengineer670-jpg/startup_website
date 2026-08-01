import { portfolioProjects } from '@/lib/data/portfolio';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactCTA from '@/components/home/ContactCTA';
import { ExternalLink, ArrowLeft } from 'lucide-react';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

const categoryEmojis: Record<string, string> = {
  web: '🌐', mobile: '📱', ai: '🤖', crm: '👥', erp: '⚙️', ecommerce: '🛒',
};

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = portfolioProjects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
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
            <Link href="/portfolio" className="hover:text-primary-500 transition-colors">Portfolio</Link>
            <span>/</span>
            <span className="text-[var(--foreground)]">{project.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="glass-card px-3 py-1 text-xs font-semibold text-[var(--foreground)]">
                  {project.categoryLabel}
                </span>
                {project.featured && (
                  <span className="gradient-bg px-3 py-1 rounded-full text-white text-xs font-bold">
                    Featured Project
                  </span>
                )}
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4">
                {project.title}
              </h1>
              <p className="text-[var(--muted)] text-lg mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 glass-card text-[var(--foreground)] font-semibold px-6 py-3 rounded-xl hover:border-primary-500/50 transition-colors"
                >
                  <ArrowLeft size={16} />
                  All Projects
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="h-64 lg:h-80 bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center glass-card">
              <span className="text-[10rem] opacity-40">
                {categoryEmojis[project.category] ?? '💻'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Problem */}
              <div className="glass-card p-8">
                <h2 className="font-heading font-bold text-xl text-[var(--foreground)] mb-4 flex items-center gap-2">
                  <span>❗</span> The Challenge
                </h2>
                <p className="text-[var(--muted)] leading-relaxed">{project.problem}</p>
              </div>

              {/* Solution */}
              <div className="glass-card p-8">
                <h2 className="font-heading font-bold text-xl text-[var(--foreground)] mb-4 flex items-center gap-2">
                  <span>💡</span> Our Solution
                </h2>
                <p className="text-[var(--muted)] leading-relaxed">{project.solution}</p>
              </div>

              {/* Results */}
              <div className="glass-card p-8">
                <h2 className="font-heading font-bold text-xl text-[var(--foreground)] mb-6 flex items-center gap-2">
                  <span>📈</span> Results & Impact
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {project.results.map((result) => (
                    <div key={result} className="gradient-bg-soft border border-primary-500/20 rounded-xl p-4 text-center">
                      <div className="text-2xl mb-2">✅</div>
                      <p className="text-[var(--foreground)] font-semibold text-sm">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Feedback */}
              <div className="glass-card p-8 border border-primary-500/20">
                <h2 className="font-heading font-bold text-xl text-[var(--foreground)] mb-4 flex items-center gap-2">
                  <span>💬</span> Client Feedback
                </h2>
                <blockquote className="text-[var(--muted)] italic text-lg leading-relaxed">
                  &ldquo;{project.clientFeedback}&rdquo;
                </blockquote>
                <div className="mt-4 text-sm font-semibold text-primary-500">— {project.title} Team</div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <div className="glass-card p-6">
                <h3 className="font-heading font-bold text-[var(--foreground)] mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 font-medium border border-primary-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="glass-card p-6 space-y-4">
                <h3 className="font-heading font-bold text-[var(--foreground)] mb-4">Project Info</h3>
                {[
                  { label: 'Category', value: project.categoryLabel },
                  { label: 'Status', value: '✅ Live' },
                  { label: 'Year', value: '2024' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center text-sm border-b border-[var(--border)] pb-3 last:border-0">
                    <span className="text-[var(--muted)]">{item.label}</span>
                    <span className="font-semibold text-[var(--foreground)]">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* CTA Card */}
              <div className="glass-card p-6 text-center border border-primary-500/20">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-heading font-bold text-[var(--foreground)] mb-2">Like What You See?</h3>
                <p className="text-[var(--muted)] text-sm mb-4">Let&apos;s build something great together.</p>
                <Link href="/contact" className="block gradient-bg text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity text-sm">
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-6">
                Related <span className="gradient-text">Projects</span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link key={p.id} href={`/portfolio/${p.slug}`} className="glass-card p-6 card-hover group block">
                    <div className="text-3xl mb-3">{categoryEmojis[p.category] ?? '💻'}</div>
                    <h3 className="font-heading font-bold text-[var(--foreground)] mb-1 group-hover:text-primary-500 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[var(--muted)] text-sm line-clamp-2">{p.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
