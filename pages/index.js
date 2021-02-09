import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Olá, Marilene</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Olá, Marilene!
        </h1>
        <p>
          <img src="/ola-marilene.jpeg" height="200" width="200"/>
        </p>
        <p>
          <small>
            Projeto teste para estudos de NextJS, ReactJS e Material UI          
          </small>
        </p>
      </main>

      <footer className={styles.footer}>
        Filipe Gomes 2021
      </footer>
    </div>
  )
}
