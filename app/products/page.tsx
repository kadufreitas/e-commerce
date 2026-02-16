import { getAllProducts } from '@/src/product';
import { ProductsGrid } from '@/src/product/components';
import { Box } from '@radix-ui/themes';

export default async function Products() {
  const products = await getAllProducts({
    pageOptions: { page: 1, limit: 10 },
  });

  if (!products) {
    return <div>Failed to load products.</div>;
  }

  return (
    <Box pt="9">
      <ProductsGrid items={products} />
    </Box>
  );
}
