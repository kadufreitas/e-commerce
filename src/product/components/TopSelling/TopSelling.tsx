import styles from './TopSelling.styles.module.css';

const products = [
  {
    id: 1,
    name: 'Vertical Striped Shirt',
    price: '$212',
    img: 'https://placehold.co/300x300?text=Product+1',
  },
  {
    id: 2,
    name: 'Courage Graphic T-shirt',
    price: '$145',
    img: 'https://placehold.co/300x300?text=Product+2',
  },
  {
    id: 3,
    name: 'Loose Fit Bermuda Shorts',
    price: '$80',
    img: 'https://placehold.co/300x300?text=Product+3',
  },
  {
    id: 4,
    name: 'Faded Skinny Jeans',
    price: '$210',
    img: 'https://placehold.co/300x300?text=Product+4',
  },
];

export const TopSelling = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>TOP SELLING</h2>

        <div className={styles.grid}>
          {products.map((p) => (
            <div key={p.id} className={styles.card}>
              <img src={p.img} alt={p.name} />
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
