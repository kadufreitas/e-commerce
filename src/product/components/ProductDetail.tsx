import { formatMoney } from '@/lib/utils/values-object/Money';
import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Inset,
  Strong,
  Text,
} from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../product.model';

interface ProductsDetailProps {
  product: Product | null;
}

export const ProductsDetail = ({ product }: ProductsDetailProps) => {
  if (!product) return null;

  return (
    <Grid columns={{ initial: '1', md: '3' }} gap="6">
      {/* LEFT CONTENT */}
      <Box gridColumn={{ md: 'span 2' }}>
        <Heading size="6" mb="3">
          {product.name}
        </Heading>

        {/* Image gallery */}
        <Card>
          <Inset clip="padding-box">
            <Grid columns="2" gap="2">
              <Box position="relative" height="200px">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Grid>
          </Inset>
        </Card>

        <Box mt="5">
          <Heading size="4" mb="2">
            Description
          </Heading>
          <Text size="3" color="gray">
            {product.description}
          </Text>
        </Box>
      </Box>

      {/* RIGHT SIDEBAR */}
      <Box>
        <Card size="3">
          <Flex direction="column" gap="4">
            <Flex align="center" justify="between">
              <Heading size="5">{formatMoney(product.price)}</Heading>
              <Badge color="green">In stock</Badge>
            </Flex>

            <Button size="3">Add to cart</Button>

            <Text size="2" color="gray">
              Ships within 2-3 business days
            </Text>
          </Flex>
        </Card>

        <Box mt="4">
          <Link href="/products">
            <Text size="2">← Back to products</Text>
          </Link>
        </Box>
      </Box>
    </Grid>
  );
};
