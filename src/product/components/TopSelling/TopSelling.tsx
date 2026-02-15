import Image from 'next/image';
import { getTopSellingProducts } from '../../actions/getTopSellingProducts';
import styles from './TopSelling.styles.module.css';

export const TopSelling = async () => {
  const products = await getTopSellingProducts();

  if (!products) {
    return <div>Failed to load top selling products.</div>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>TOP SELLING</h2>

        <div className={styles.grid}>
          {products.map((p) => (
            <div key={p.id} className={styles.card}>
              <Image src={p.img} alt={p.name} width={300} height={300} />
              <h4>{p.name}</h4>
              <span>{p.price}</span>
            </div>
          ))}
        </div>

        <button className={styles.viewAll}>View All</button>
      </div>
    </section>
  );
};
