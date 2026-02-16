import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/lib/mocks/products-db';
import { Product, ProductStrategy } from '@/src/product';

// GET /api/products/recommendations?strategy=
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const strategy = searchParams.get('strategy') || 'best-sellers';

  let recommended: Product[] = [];

  if (strategy === ProductStrategy.BEST_SELLERS) {
    recommended = products
      .filter((p) => p.soldCount > 0)
      .sort((a, b) => b.soldCount - a.soldCount)
      .slice(0, 4);
  } else if (strategy === ProductStrategy.FEATURED) {
    recommended = products.filter((p) => p.isFeatured).slice(0, 4);
  } else if (strategy === ProductStrategy.SIMILAR_ITEMS) {
    // For simplicity, we just return random products for similar items
    recommended = products.sort(() => 0.5 - Math.random()).slice(0, 4);
  }

  return NextResponse.json({
    products: recommended,
  });
}
