import { Hero } from '@/src/common/components';
import { TopSelling } from '@/src/product';

export default async function Home() {
  return (
    <>
      <Hero />
      <TopSelling />
    </>
  );
}
