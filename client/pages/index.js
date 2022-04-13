import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../src/components/header.js'
import Title from '../src/components/title.js'
import Main from '../src/components/main.js'
import Footer from '../src/components/footer.js'

import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>AYAYA Group</title>
        <meta name="description" content="AYAYA Group Official Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Title />
      <main className={styles.main}>
        <Main />
      </main>

      <Footer />

      {/* <footer className={styles.footer}>
        <a
        >
          Powered by{' '}
          <span className={styles.logo}>
          </span>
        </a>
      </footer> */}
    </div>
  )
}
