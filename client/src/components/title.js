import styles from '../../styles/Home.module.css'

export default function Title() {
    return (
        <div className={styles.title__container}>
            <h1 className={`${styles.title} ${styles.fadeInText}`}>AYAYA Group</h1>
            <p className={`${styles.subtitle} ${styles.fadeInText}`}>Building the future</p>
        </div>
    )
}