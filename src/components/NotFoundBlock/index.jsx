import styles from './NotFoundBlock.module.scss'

function NotFound() {
  return (
    <div className={styles.root}>
      <span className={styles.icon}>😕</span>
      <h2 className={styles.title}>Ничего не найдено</h2>
      <p className={styles.description}>
        К сожалению данная страница отсутствует
      </p>
    </div>
  )
}

export default NotFound
