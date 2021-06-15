import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Clinics from '../components/Clinics'

export default function Home({ data }) {
  console.log('DATA; ', data)

  return (
    <div className={styles.container}>
      <Head>
        <title>Dr.Dropin</title>
        <meta name="description" content="Code test from Dr.Dropin" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Clinics data={data}/>
      </main>
    </div>
  )
}

//Get data at build
export async function getStaticProps () {
  const res = await fetch('https://staging-core.api.drdropin.no/v1/clinics');
  const data = await res.json();
  console.log('STATIS: ', data)
  return {
    props: {
      data
    }
  }
}