import Head from 'next/head';
import { SITE } from '@/config/site';

interface SEOProps {
  title?: string;
  description?: string;
  /** Site-relative path, e.g. "/news/". */
  path?: string;
  /** Site-relative image path, e.g. "/images/og.png". */
  image?: string;
}

export default function SEO({ title, description, path = '/', image }: SEOProps) {
  const fullTitle = title ? `${title} — ${SITE.name}` : SITE.name;
  const desc = description || SITE.description;
  const canonical = `${SITE.url}${path}`;
  const ogImage = image ? `${SITE.url}${image}` : undefined;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonical} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {/* Until the real domain is confirmed, keep the placeholder build out of
          search indexes. */}
      {!SITE.domainConfirmed && <meta name="robots" content="noindex,nofollow" />}
    </Head>
  );
}
