import { Button, Flex, Grid, Heading, Section } from '@radix-ui/themes';
import Link from 'next/link';
import { Product } from '../product.model';
import { ProductsCard } from './ProductCard';

interface TopSellingProps {
  products: Product[] | null;
}

export const TopSelling = ({ products }: TopSellingProps) => {
  if (!products || products.length === 0) {
    return <div>Failed to load top selling products.</div>;
  }

  return (
    <Section py="3">
      <Flex justify="between" align="baseline" mb="4">
        <Heading size="3" weight="bold">
          TOP SELLING
        </Heading>
        <Button asChild variant="outline">
          <Link href="/products">View All</Link>
        </Button>
      </Flex>

      <Grid columns={{ initial: '1', md: '4' }} gap="3" width="auto">
        {products.map((p) => (
          <ProductsCard item={p} key={p.id} />
        ))}
      </Grid>
    </Section>
  );
};
