import type { GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Hero from '@/components/sections/Hero';
import WhatWeDo from '@/components/sections/WhatWeDo';
import Approach from '@/components/sections/Approach';
import Insights from '@/components/sections/Insights';
import ContactCTA from '@/components/sections/ContactCTA';
import { SITE } from '@/config/site';
import { getAllPosts, type PostMeta } from '@/lib/posts';

interface HomeProps {
  posts: PostMeta[];
}

const LATEST_POST_COUNT = 3;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return { props: { posts: getAllPosts().slice(0, LATEST_POST_COUNT) } };
};

export default function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <SEO
        path="/"
        description={`${SITE.tagline} ${SITE.description}`}
      />
      <Hero />
      <WhatWeDo />
      <Approach />
      <Insights posts={posts} />
      <ContactCTA />
    </Layout>
  );
}
