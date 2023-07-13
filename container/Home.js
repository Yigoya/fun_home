import MovieHeader from '@/components/MovieHeader'
import Movies from '@/components/Movies'
import Nav from '@/components/Nav'
import React from 'react'
import styles from '@/styles/movies.module.css'
function Home({resp}) {
  const data = resp.results
  console.log(data)
  return (
    <div className={styles.home}>
      <Nav />
      <MovieHeader data={data[0]} />
      <div>
        <h2>Movies trending</h2>
      </div>
      <div className={styles.movie_grid}>
        {data.map((item)=>(
          <Movies data={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default Home

export const getStaticProps =async ()=>{
  console.log(process.env.SERVER)
  const res = await fetch(`${process.env.SERVER}/api/movie`)
  const resp = await res.json()
  console.log(resp)
  return {
    props:{
      resp
    }
  }
}