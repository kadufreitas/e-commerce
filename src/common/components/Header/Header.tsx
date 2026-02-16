import { Container, Flex } from '@radix-ui/themes';
import { NavigationMenu } from 'radix-ui';
import styles from './Header.styles.module.css';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Flex align="center" justify="between">
          <Link href="/" className={styles.logo}>
            E-SHOP
          </Link>
          {/* Navigation */}
          <NavigationMenu.Root className={styles.navRoot}>
            <NavigationMenu.List className={styles.navList}>
              <NavigationMenu.Item>
                <Link href="/products" className={styles.navLink}>
                  Shop
                </Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <Link href="/sale" className={styles.navLink}>
                  On Sale
                </Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <Link href="/new-arrivals" className={styles.navLink}>
                  New Arrivals
                </Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <Link href="/brands" className={styles.navLink}>
                  Brands
                </Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Shopping Bag */}
          <button className={styles.cartButton} aria-label="Shopping cart">
            BAG
          </button>
        </Flex>
      </Container>
    </header>
  );
};
