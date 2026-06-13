import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SITE } from '@/config/site';
import type { PostMeta } from '@/lib/posts';

interface InsightsProps {
  posts: PostMeta[];
}

export default function Insights({ posts }: InsightsProps) {
  return (
    <section id="insights" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gra-silver-dark">
              {SITE.blog.label}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gra-ink sm:text-4xl">
              Notes from the firm
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gra-ink/70">
              Perspective on aviation markets in Canada and beyond, commercial
              strategy, and what we are working on.
            </p>
          </div>
          <Link
            href={`${SITE.blog.path}/`}
            className="group inline-flex items-center self-start text-sm font-semibold text-gra-navy transition-colors hover:text-gra-silver-dark sm:self-auto"
          >
            View all {SITE.blog.label.toLowerCase()}
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="mt-10 text-gra-ink/60">
            New {SITE.blog.label.toLowerCase()} are on the way — check back soon.
          </p>
        ) : (
          <ul className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug} className="h-full">
                <Link
                  href={`${SITE.blog.path}/${post.slug}/`}
                  className="group flex h-full flex-col rounded-2xl border border-gra-silver/30 bg-gra-pearl/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gra-silver/60 hover:bg-white hover:shadow-md"
                >
                  {post.category && (
                    <span className="inline-flex w-fit items-center rounded-full bg-gra-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gra-silver-dark ring-1 ring-inset ring-gra-navy/10">
                      {post.category}
                    </span>
                  )}
                  <h3 className="mt-4 text-lg font-semibold text-gra-ink group-hover:text-gra-navy">
                    {post.title}
                  </h3>
                  {post.date && (
                    <p className="mt-1 text-sm text-gra-silver-dark">{post.date}</p>
                  )}
                  {post.excerpt && (
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-gra-ink/65">
                      {post.excerpt}
                    </p>
                  )}
                  <span className="mt-5 inline-flex items-center text-sm font-semibold text-gra-navy">
                    Read more
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
