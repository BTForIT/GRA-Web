import Link from 'next/link';
import type { ReactNode } from 'react';
import { SITE } from '@/config/site';

export default function Layout({ children }: { children: ReactNode }) {
  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen flex flex-col bg-white text-brand">
      <header className="border-b border-brand-muted">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight text-lg">
            {SITE.name}
          </Link>
          {SITE.blog.enabled && (
            <nav className="text-sm">
              <Link href={`${SITE.blog.path}/`} className="hover:underline">
                {SITE.blog.label}
              </Link>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-brand-muted">
        <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-brand-light flex flex-wrap items-center justify-between gap-2">
          <span>
            © {year} {SITE.name}
          </span>
          {SITE.contact.email && (
            <a href={`mailto:${SITE.contact.email}`} className="hover:underline">
              {SITE.contact.email}
            </a>
          )}
        </div>
      </footer>
    </div>
  );
}
