import { formatMoney } from '@/lib/utils/values-object/Money';
import { Card, Inset, Strong, Text } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../product.model';

interface ProductsCardProps {
  item: Product | null;
}

export const ProductsCard = ({ item }: ProductsCardProps) => {
  if (!item) return null;

  return (
    <Card asChild size="2">
      <Link href={`/products/${item.id}`} style={{ textDecoration: 'none' }}>
        <Inset clip="padding-box" side="top" pb="current">
          <Image
            src="https://placehold.co/600x400/png?text=Hero+Image"
            width={600}
            height={400}
            alt="Bold typography"
            style={{
              display: 'block',
              objectFit: 'cover',
              width: '100%',
              height: 240,
              backgroundColor: 'var(--gray-5)',
            }}
          />
        </Inset>
        <Text as="p" size="3">
          <Strong>{item.name}</Strong>
        </Text>
        <Text as="p" size="2" color="gray">
          {formatMoney(item.price)}
        </Text>
      </Link>
    </Card>
  );
};
