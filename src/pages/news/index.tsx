import Link from 'next/link';
import type { GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { SITE } from '@/config/site';
import { getAllPosts, type PostMeta } from '@/lib/posts';

interface Props {
  posts: PostMeta[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { posts: getAllPosts() } };
};

export default function NewsIndex({ posts }: Props) {
  return (
    <Layout>
      <SEO title={SITE.blog.label} path={`${SITE.blog.path}/`} />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">{SITE.blog.label}</h1>

        {posts.length === 0 ? (
          <p className="text-brand-light">No posts yet — check back soon.</p>
        ) : (
          <ul className="space-y-8">
            {posts.map((post) => (
              <li key={post.slug} className="border-b border-brand-muted pb-6">
                <Link href={`${SITE.blog.path}/${post.slug}/`} className="group">
                  <h2 className="text-xl font-semibold group-hover:underline">
                    {post.title}
                  </h2>
                </Link>
                {post.date && (
                  <p className="text-sm text-brand-light mt-1">{post.date}</p>
                )}
                {post.excerpt && (
                  <p className="text-brand-light mt-2">{post.excerpt}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}
