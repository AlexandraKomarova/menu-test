import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Example } from "../components/Example";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Example />
    </div>
  )
}
