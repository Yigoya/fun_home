import React from 'react'
import styles from '../styles/movies.module.css'
function MovieLayout({children}) {
  return (
    <div className={styles.layout}>
        {children}
    </div>
  )
}

export default MovieLayout