import Link from 'next/link';
import type { GetStaticProps } from 'next';
import { ArrowUpRight } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { SITE } from '@/config/site';
import { getAllPosts, type PostMeta } from '@/lib/posts';

interface NewsIndexProps {
  posts: PostMeta[];
}

export const getStaticProps: GetStaticProps<NewsIndexProps> = async () => {
  return { props: { posts: getAllPosts() } };
};

export default function NewsIndex({ posts }: NewsIndexProps) {
  return (
    <Layout>
      <SEO
        title={SITE.blog.label}
        description={`${SITE.blog.label} from ${SITE.name} — perspective on aviation markets in Canada and beyond, and commercial strategy.`}
        path={`${SITE.blog.path}/`}
      />

      <section className="border-b border-gra-silver/30 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gra-silver-dark">
            {SITE.blog.label}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gra-ink">
            Notes from the firm
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gra-ink/70">
            Perspective on aviation markets in Canada and beyond, commercial
            strategy, and what we are working on.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-16">
        {posts.length === 0 ? (
          <p className="text-gra-ink/60">
            New {SITE.blog.label.toLowerCase()} are on the way — check back soon.
          </p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`${SITE.blog.path}/${post.slug}/`}
                  className="group block rounded-2xl border border-gra-silver/30 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gra-silver/60 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    {post.category && (
                      <span className="inline-flex items-center rounded-full bg-gra-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gra-silver-dark ring-1 ring-inset ring-gra-navy/10">
                        {post.category}
                      </span>
                    )}
                    {post.date && (
                      <span className="text-sm text-gra-silver-dark">{post.date}</span>
                    )}
                  </div>
                  <h2 className="mt-3 text-xl font-semibold text-gra-ink group-hover:text-gra-navy">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="mt-2 leading-relaxed text-gra-ink/65">
                      {post.excerpt}
                    </p>
                  )}
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-gra-navy">
                    Read more
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}
