import React from 'react'

import Image from 'next/image'
import styles from '@/styles/movies.module.css'
function MovieHeader({data}) {
    console.log(data)
    const image = data.backdrop_path ? `http://image.tmdb.org/t/p/w500/${data.backdrop_path}`: data.image 
  return (
    <div className={styles.movieheader}>
       <img 
        src={image}
        className={styles.img}
       />
       <div className={styles.detail}>
        <h1>NETFLIX</h1>
        <h3>THE PALE BLUE EYE</h3>
        <div>
            <p>7.8</p>
            
        </div>
        <div>
            <p>DETAILS</p>
        </div>
        <div>
       </div>
       </div>
       
    </div> 
  )
}

export default MovieHeader