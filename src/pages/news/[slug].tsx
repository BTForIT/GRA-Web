import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { SITE } from '@/config/site';
import { getAllPostSlugs, getPostData, type PostData } from '@/lib/posts';

interface NewsPostProps {
  post: PostData;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPostSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<NewsPostProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await getPostData(slug);
  return { props: { post } };
};

export default function NewsPost({ post }: NewsPostProps) {
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
          className="inline-flex items-center text-sm font-semibold text-gra-primary transition-colors hover:text-gra-primary-dark"
        >
          <ArrowLeft className="mr-1.5 h-4 w-4" />
          {SITE.blog.label}
        </Link>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-gra-navy sm:text-4xl">
          {post.title}
        </h1>
        {post.date && (
          <p className="mt-3 text-sm text-gra-slate">
            {post.date}
            {post.author ? ` · ${post.author}` : ''}
          </p>
        )}
        <div
          className="prose-content mt-8"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </Layout>
  );
}
