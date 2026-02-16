import { getProductById } from '@/src/product/actions';
import { ProductsDetail } from '@/src/product/components';

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById({ productId: id });

  if (!product) {
    return <div>Failed to load product.</div>;
  }

  return <ProductsDetail product={product} />;
}
