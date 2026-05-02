// React component using CSS Modules
// In the built HTML, class names will be random hashes like 'x7f2k9m3'
import styles from './styles.module.css'

function ProductCard({ title, price }) {
  return (
    <div className={styles.productCard}>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.price}>{price} ₽</span>
    </div>
  )
}

export default ProductCard
