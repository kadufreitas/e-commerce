import { Container, Flex } from '@radix-ui/themes';
import { NavigationMenu } from 'radix-ui';
import styles from './Header.styles.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Flex align="center" justify="between">
          <div className={styles.logo}>E-SHOP</div>
          {/* Navigation */}
          <NavigationMenu.Root className={styles.navRoot}>
            <NavigationMenu.List className={styles.navList}>
              <NavigationMenu.Item>
                <NavigationMenu.Link className={styles.navLink}>
                  Shop
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link className={styles.navLink}>
                  On Sale
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link className={styles.navLink}>
                  New Arrivals
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link className={styles.navLink}>
                  Brands
                </NavigationMenu.Link>
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
