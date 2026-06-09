import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { SITE } from '@/config/site';
import { getAllPostSlugs, getPostData, type PostData } from '@/lib/posts';

interface Props {
  post: PostData;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPostSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await getPostData(slug);
  return { props: { post } };
};

export default function NewsPost({ post }: Props) {
  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`${SITE.blog.path}/${post.slug}/`}
        image={post.image ?? undefined}
      />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href={`${SITE.blog.path}/`}
          className="text-sm text-brand-accent hover:underline"
        >
          ← {SITE.blog.label}
        </Link>
        <h1 className="text-3xl font-bold mt-4 mb-2">{post.title}</h1>
        {post.date && (
          <p className="text-sm text-brand-light mb-8">
            {post.date}
            {post.author ? ` · ${post.author}` : ''}
          </p>
        )}
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </Layout>
  );
}
