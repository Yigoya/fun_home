import React from 'react'
import styles from '@/styles/movies.module.css'
import Image from 'next/image'
import image from '@/assets/image.jpg'
import { useRouter } from 'next/router'

function Movies({ data }) {
  const router = useRouter()
  const onClick=(id)=>{
    router.push(`movies/${id}`)
  }
  const image = data.poster_path ? `http://image.tmdb.org/t/p/w500/${data.poster_path}`: data.image 

  return (
    <div className={styles.movies} onClick={(e)=>onClick(data.id)}>
      <img
        src={image}
        
        className={styles.img_m}
      />
      <h3>{data.title}</h3>
      <p>adventure</p>
    </div>
  )
}

export default Movies