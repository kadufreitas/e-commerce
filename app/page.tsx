import { Hero } from '@/src/common/components';
import { getTopSellingProducts } from '@/src/product/actions';
import { TopSelling } from '@/src/product/components';

export default async function Home() {
  const productsTopSelling = await getTopSellingProducts();

  return (
    <>
      <Hero />
      <TopSelling products={productsTopSelling} />
    </>
  );
}
