import { blogPosts } from '@/lib/data/blog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Calendar, ArrowLeft, Tag } from 'lucide-react';
import ContactCTA from '@/components/home/ContactCTA';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      authors: [post.author.name],
    },
  };
}

const sampleContent = `
## Introduction

In the rapidly evolving landscape of technology, staying ahead requires not just keeping up with trends but understanding them deeply and applying them strategically.

## Key Insights

The most successful implementations we've seen share common characteristics: they start with a clear problem statement, validate assumptions early, and iterate rapidly based on real user feedback.

### Implementation Strategy

When approaching this challenge, we recommend a phased approach:

1. **Discovery Phase**: Understand the current state and desired outcome
2. **Proof of Concept**: Build a minimal viable implementation to validate assumptions  
3. **Iteration**: Refine based on feedback and performance data
4. **Scale**: Once validated, scale the solution with confidence

## Technical Considerations

Performance and reliability are non-negotiable. Any implementation must be designed with observability from day one — logging, monitoring, and alerting should be built in, not bolted on.

\`\`\`python
# Example implementation
def optimize_performance(config):
    return {
        "caching": True,
        "cdn": "enabled",
        "compression": "gzip"
    }
\`\`\`

## Results

Organizations that have adopted this approach consistently report:
- 40-60% improvement in performance metrics
- 30% reduction in operational overhead
- Significantly improved developer experience

## Conclusion

The path forward is clear: embrace modern practices, measure everything, and never stop iterating. The companies that thrive will be those that treat technology as a strategic asset, not just a cost center.
`;

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--muted)] mb-8">
            <Link href="/blog" className="hover:text-primary-500 transition-colors flex items-center gap-1">
              <ArrowLeft size={14} /> Blog
            </Link>
            <span>/</span>
            <span className="text-[var(--foreground)] line-clamp-1">{post.title}</span>
          </nav>

          {/* Category */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="gradient-bg text-white px-3 py-1 rounded-full text-xs font-bold">
              {post.category}
            </span>
            {post.tags.map((tag) => (
              <span key={tag} className="glass-card px-3 py-1 text-xs text-[var(--muted)] flex items-center gap-1">
                <Tag size={10} /> {tag}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-[var(--muted)] text-xl mb-8 leading-relaxed">{post.excerpt}</p>

          {/* Author & Meta */}
          <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-[var(--border)]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center text-white font-bold">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-[var(--foreground)]">{post.author.name}</div>
                <div className="text-xs text-[var(--muted)]">{post.author.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-6">
          {sampleContent.split('\n\n').map((block, i) => {
            if (block.startsWith('## ')) {
              return <h2 key={i} className="font-heading text-2xl font-bold text-[var(--foreground)] mt-10 mb-4">{block.replace('## ', '')}</h2>;
            }
            if (block.startsWith('### ')) {
              return <h3 key={i} className="font-heading text-xl font-bold text-[var(--foreground)] mt-6 mb-3">{block.replace('### ', '')}</h3>;
            }
            if (block.startsWith('```')) {
              return (
                <pre key={i} className="bg-[var(--surface-2)] border border-[var(--border)] rounded-xl p-4 overflow-x-auto text-sm text-[var(--muted)] font-mono">
                  {block.replace(/```[\w]*/g, '').trim()}
                </pre>
              );
            }
            if (block.startsWith('- ') || block.startsWith('1.')) {
              const items = block.split('\n').filter(Boolean);
              return (
                <ul key={i} className="space-y-2 my-4">
                  {items.map((item, j) => (
                    <li key={j} className="text-[var(--muted)] leading-relaxed flex items-start gap-2">
                      <span className="text-primary-500 mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: item.replace(/^[\-\d.]\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--foreground)]">$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.trim()) {
              return <p key={i} className="text-[var(--muted)] leading-relaxed text-lg">{block}</p>;
            }
            return null;
          })}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[var(--border)]">
          <span className="text-sm font-semibold text-[var(--muted)] mr-2">Tags:</span>
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-primary-500/10 text-primary-500 border border-primary-500/20">
              #{tag}
            </span>
          ))}
        </div>

        {/* Author card */}
        <div className="mt-10 glass-card p-6 flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
            {post.author.name.charAt(0)}
          </div>
          <div>
            <div className="font-heading font-bold text-[var(--foreground)]">{post.author.name}</div>
            <div className="text-primary-500 text-sm mb-2">{post.author.role} at TechVision</div>
            <p className="text-[var(--muted)] text-sm">
              Expert in {post.tags.join(', ')}. Passionate about building world-class digital products.
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-6">
            Related <span className="gradient-text">Articles</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.id} href={`/blog/${p.slug}`} className="glass-card p-5 card-hover group block">
                <span className="text-xs font-bold text-primary-500 mb-2 block">{p.category}</span>
                <h3 className="font-heading font-bold text-[var(--foreground)] mb-2 group-hover:text-primary-500 transition-colors line-clamp-2">
                  {p.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
                  <span>{p.readTime}</span>
                  <span>{p.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <ContactCTA />
    </>
  );
}
