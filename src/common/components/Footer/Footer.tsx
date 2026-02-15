import styles from './Footer.styles.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3>E-SHOP</h3>
          <p>
            We have clothes that suits your style and which you&apos;re proud to
            wear.
          </p>
        </div>

        <div className={styles.links}>
          <div>
            <h4>Company</h4>
            <a>About</a>
            <a>Features</a>
            <a>Careers</a>
          </div>

          <div>
            <h4>Help</h4>
            <a>Customer Support</a>
            <a>Delivery Details</a>
            <a>Terms & Conditions</a>
          </div>

          <div>
            <h4>FAQ</h4>
            <a>Account</a>
            <a>Orders</a>
            <a>Payments</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        Shop.co © 2000-2023. All Rights Reserved
      </div>
    </footer>
  );
};
