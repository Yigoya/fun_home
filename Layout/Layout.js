import React from 'react'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'

function Layout({children}) {
  
  return (
    <>
      <Nav/>
        <div className={styles.main}>
            {children}
        </div>
    </>
  )
}

export default Layout