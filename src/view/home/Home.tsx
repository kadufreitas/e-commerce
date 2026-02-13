import { getAllProducts } from '@/src/container';
import { Card, Button } from '@radix-ui/themes';
import { Hero } from '../hero';
import { TopSelling } from '../product/topselling';

export default async function Home() {
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
      {/* <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products?.map((product) => (
          <Card
            key={product.id}
            className="border border-gray-300 rounded-lg p-4"
          >
            <div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p>{product.description}</p>
              <p className="font-bold">${product.price}</p>
              <Button variant="solid">Add to Cart</Button>
            </div>
          </Card>
        ))}
      </main> */}
    </>
  );
}
