import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/lib/mocks/products-db';

type Params = {
  params: { id: string };
};

// GET /api/products/:id
export async function GET(_: NextRequest, { params }: Params) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({ product });
}

// PUT /api/products/:id
export async function PUT(req: NextRequest, { params }: Params) {
  const { id } = await params;
  const body = await req.json();
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  products[index] = {
    ...products[index],
    ...body.product,
  };

  return NextResponse.json({ product: products[index] });
}

// DELETE /api/products/:id
export async function DELETE(_: NextRequest, { params }: Params) {
  const { id } = await params;
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  products.splice(index, 1);

  return NextResponse.json({ success: true });
}
