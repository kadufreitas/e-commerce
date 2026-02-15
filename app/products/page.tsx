import { Hero } from '@/src/common/components';
import { getAllProducts, TopSelling } from '@/src/product';

export default async function Products() {
  const products = await getAllProducts({
    pageOptions: { page: 1, limit: 10 },
  });

  if (!products) {
    return <div>Failed to load products.</div>;
  }

  return (
    <>
      <Hero />
      <TopSelling />
    </>
  );
}
