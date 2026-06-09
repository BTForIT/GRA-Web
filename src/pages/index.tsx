import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import ComingSoon from '@/components/ComingSoon';

export default function Home() {
  return (
    <Layout>
      <SEO path="/" />
      <ComingSoon />
    </Layout>
  );
}
