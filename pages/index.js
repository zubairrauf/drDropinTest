import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Clinics from '../components/Clinics'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dr.Dropin</title>
        <meta name="description" content="Code test from Dr.Dropin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Clinics />
      </main>
    </div>
  )
}
