import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6 animate-float">🔍</div>
        <h1 className="font-heading text-6xl font-bold gradient-text mb-4">404</h1>
        <h2 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-4">
          Page Not Found
        </h2>
        <p className="text-[var(--muted)] mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="gradient-bg text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="glass-card text-[var(--foreground)] font-semibold px-8 py-3 rounded-xl hover:border-primary-500/50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
