import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { SITE } from '@/config/site';
import Wordmark from '@/components/Wordmark';

/**
 * Primary navigation. Anchor links target homepage sections via absolute
 * `/#id` hrefs so they resolve correctly from any page (e.g. /news). Mobile
 * uses a React-state toggle — no external dependencies.
 */
const NAV_LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'What We Do', href: '/#what-we-do' },
  { label: 'Approach', href: '/#approach' },
  { label: 'Insights', href: '/#insights' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mailto = `mailto:${SITE.contact.email}`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gra-navy-dark/80 backdrop-blur supports-[backdrop-filter]:bg-gra-navy-dark/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Link
          href="/"
          aria-label={`${SITE.name} — home`}
          className="shrink-0 rounded-md"
        >
          <Wordmark onDark className="h-11 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gra-sky transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={mailto}
            className="rounded-lg bg-gra-pearl px-4 py-2 text-sm font-semibold text-gra-navy shadow-sm ring-1 ring-white/10 transition-colors hover:bg-white"
          >
            Contact
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-white/10 bg-gra-navy-dark md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md py-3 text-base font-medium text-gra-sky transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 pb-1">
              <a
                href={mailto}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg bg-gra-pearl px-4 py-3 text-center text-base font-semibold text-gra-navy transition-colors hover:bg-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
