import { getAllProducts } from '@/src/container';

export default async function Home() {
  const products = await getAllProducts({
    pageOptions: { page: 1, limit: 10 },
  });

  if (!products) {
    return <div>Failed to load products.</div>;
  }

  return (
    <div>
      <main>
        {products?.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
