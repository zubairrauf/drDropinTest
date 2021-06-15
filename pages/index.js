import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dr.Dropin</title>
        <meta name="description" content="Code test from Dr.Dropin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Våre klinikker
        </h1>
        <div className={styles.grid}>
       
        </div>
      </main>
    </div>
  )
}
