import Link from 'next/link';
import { SITE } from '@/config/site';
import Wordmark from '@/components/Wordmark';

const FOOTER_LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'About', href: '/about' },
  { label: 'What We Do', href: '/#what-we-do' },
  { label: 'Approach', href: '/#approach' },
  { label: 'Insights', href: '/#insights' },
  { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  // Use a fixed copyright year for the firm; falls back to the current year if
  // somehow earlier. Approved copy specifies "© 2026 Grand River Advisory".
  const copyrightYear = Math.max(year, 2026);

  return (
    <footer className="border-t border-white/10 bg-gra-navy-dark text-gra-sky">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="max-w-md">
            <Wordmark onDark className="h-16 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-gra-sky/80">
              Global aviation investment, ownership, and advisory expertise —
              applied across Canada and beyond, focused on long-term
              stewardship and strategic growth.
            </p>
            <a
              href={`mailto:${SITE.contact.email}`}
              className="mt-4 inline-block text-sm font-medium text-white underline-offset-4 hover:underline"
            >
              {SITE.contact.email}
            </a>
          </div>

          <nav aria-label="Footer" className="md:justify-self-end">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gra-sky/60">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gra-sky/85 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-gra-sky/60">
            © {copyrightYear} {SITE.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
