import { Grid } from '@radix-ui/themes';
import { Product } from '../product.model';
import { ProductsCard } from './ProductCard';

interface ProductsGridProps {
  items: Product[];
}

export const ProductsGrid = ({ items }: ProductsGridProps) => {
  if (!items || items.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <Grid columns={{ initial: '1', md: '4' }} gap="3" width="auto">
      {items.map((item) => (
        <ProductsCard item={item} key={item.id} />
      ))}
    </Grid>
  );
};
