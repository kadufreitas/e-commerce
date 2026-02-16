import Link from 'next/link';
import { getTopSellingProducts } from '../../actions/getTopSellingProducts';
import { ProductsCard } from '../Card';
import { Button, Flex, Grid, Heading, Section } from '@radix-ui/themes';

export const TopSelling = async () => {
  const products = await getTopSellingProducts();

  if (!products) {
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
