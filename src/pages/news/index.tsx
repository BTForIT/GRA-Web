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

      <section className="border-b border-white/10 bg-gra-navy">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gra-blue">
            {SITE.blog.label}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
            Notes from the firm
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gra-sky/85">
            Perspective on aviation markets in Canada and beyond, commercial
            strategy, and what we are working on.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-14">
        {posts.length === 0 ? (
          <p className="text-gra-sky/75">
            New {SITE.blog.label.toLowerCase()} are on the way — check back soon.
          </p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`${SITE.blog.path}/${post.slug}/`}
                  className="group block rounded-xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-gra-blue/50 hover:bg-white/[0.07] hover:shadow-card-hover"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    {post.category && (
                      <span className="inline-flex items-center rounded-full bg-gra-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gra-sky ring-1 ring-inset ring-white/10">
                        {post.category}
                      </span>
                    )}
                    {post.date && (
                      <span className="text-sm text-gra-slate">{post.date}</span>
                    )}
                  </div>
                  <h2 className="mt-3 text-xl font-semibold text-white group-hover:text-gra-blue">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="mt-2 leading-relaxed text-gra-sky/80">
                      {post.excerpt}
                    </p>
                  )}
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-gra-blue">
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
