import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SITE } from '@/config/site';
import type { PostMeta } from '@/lib/posts';

interface InsightsProps {
  posts: PostMeta[];
}

export default function Insights({ posts }: InsightsProps) {
  return (
    <section id="insights" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gra-blue">
              {SITE.blog.label}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gra-navy sm:text-4xl">
              Notes from the firm
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gra-slate">
              Perspective on Canadian regional aviation, commercial strategy,
              and what we are working on.
            </p>
          </div>
          <Link
            href={`${SITE.blog.path}/`}
            className="group inline-flex items-center self-start text-sm font-semibold text-gra-primary transition-colors hover:text-gra-primary-dark sm:self-auto"
          >
            View all {SITE.blog.label.toLowerCase()}
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="mt-10 text-gra-slate">
            New {SITE.blog.label.toLowerCase()} are on the way — check back soon.
          </p>
        ) : (
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug} className="h-full">
                <Link
                  href={`${SITE.blog.path}/${post.slug}/`}
                  className="group flex h-full flex-col rounded-xl border border-gra-sky bg-gra-cloud p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gra-blue/40 hover:shadow-card-hover"
                >
                  {post.category && (
                    <span className="inline-flex w-fit items-center rounded-full bg-gra-sky px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gra-primary">
                      {post.category}
                    </span>
                  )}
                  <h3 className="mt-4 text-lg font-semibold text-gra-navy group-hover:text-gra-primary">
                    {post.title}
                  </h3>
                  {post.date && (
                    <p className="mt-1 text-sm text-gra-slate">{post.date}</p>
                  )}
                  {post.excerpt && (
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-gra-slate">
                      {post.excerpt}
                    </p>
                  )}
                  <span className="mt-5 inline-flex items-center text-sm font-semibold text-gra-primary">
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
