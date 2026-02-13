import styles from './Hero.styles.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>

          <p className={styles.subtitle}>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality.
          </p>

          <button className={styles.cta}>Shop Now</button>

          <div className={styles.stats}>
            <div>
              <strong>200+</strong>
              <span>International Brands</span>
            </div>
            <div>
              <strong>2,000+</strong>
              <span>High-Quality Products</span>
            </div>
            <div>
              <strong>30,000+</strong>
              <span>Happy Customers</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <img
            src="https://placehold.co/600x400?text=Hero+Image"
            alt="Hero models"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};
