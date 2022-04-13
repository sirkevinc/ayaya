import styles from '../../styles/Components.module.css'

export default function Footer() {
    return(
        <div className={styles.footer}>
            <h1>Contact Us</h1>
            <hr />
            <section className={styles.links}>
                <ul>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>Some other link</li>
                    <li>Some other link</li>
                </ul>
            </section>
            <section className={`${styles.footer} ${styles.bottom}`}>
                <span>Copyright mumbo jumbo</span>
                <div>
                    <span>Twitter</span>
                    <span>Instagram</span>
                </div>
            </section>
        </div>
    )
}

      {/* <footer className={styles.footer}>
        <a
        >
          Powered by{' '}
          <span className={styles.logo}>
          </span>
        </a>
      </footer> */}