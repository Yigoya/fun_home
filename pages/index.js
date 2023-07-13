import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'
import Link from 'next/link'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <nav className={styles.nav}>
        <h3>Fun Home</h3>
        <div>
          <div><Link href='movie'>MOVIE</Link></div>
          <div><Link href='recipe'>RECIPE</Link></div>
        </div>
      </nav>
      <div className={styles.home}>
        <div className={`${styles.home_link} ${styles.homa}`}>
        <Link href='movie'>
          <KeyboardDoubleArrowRightIcon/>
          <p>Movie</p>
          <p>this site is the site that help you to choose your favirate movie</p>
          </Link>
        </div>
        <div className={styles.home_link}>
        <Link href='recipe'>
          <KeyboardDoubleArrowRightIcon/>
          <p>recipe</p>
          <p>this site is the site that help you to choose your favirate movie</p>
          </Link>
        </div>
      </div>
    </>
  )
}
