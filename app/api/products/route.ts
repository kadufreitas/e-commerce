import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/lib/mocks/products-db';
import { randomUUID } from 'crypto';

// GET /api/products?page=&limit=&name=
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const name = searchParams.get('name');
  const page = Number(searchParams.get('page') ?? 1);
  const limit = Number(searchParams.get('limit') ?? 10);
  const topSelling = searchParams.get('topSelling') === 'true';

  let filtered = products;

  if (name) {
    filtered = products.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  if (topSelling) {
    filtered = products
      .filter((p) => p.soldCount > 0)
      .sort((a, b) => b.soldCount - a.soldCount)
      .slice(0, 4);

    return NextResponse.json({
      products: filtered,
    });
  }

  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  return NextResponse.json({
    products: paginated,
  });
}

// POST /api/products
export async function POST(req: NextRequest) {
  const body = await req.json();
  const product = body.product;

  const newProduct = {
    ...product,
    id: randomUUID(),
  };

  products.push(newProduct);

  return NextResponse.json({ product: newProduct });
}
