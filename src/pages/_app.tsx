import type { AppProps } from 'next/app';
import { Sora } from 'next/font/google';
import '@/styles/globals.css';

/**
 * Site-wide display typeface. Sora is a clean, modern geometric sans that
 * replaces the previous Georgia serif on every heading — it reads as
 * contemporary and premium against the Midnight Navy palette while the
 * classical silver monogram supplies the heritage note.
 *
 * Loaded via next/font: the font is self-hosted at build time, so it works
 * with `output: 'export'` (no runtime request to Google, no FOUT). Exposed as
 * the `--font-sora` CSS variable and consumed by the heading rules in
 * globals.css (`--font-display`) and the Tailwind `serif` token.
 */
const sora = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-sora',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={sora.variable}>
      <Component {...pageProps} />
    </div>
  );
}
