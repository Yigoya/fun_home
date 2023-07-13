import React from 'react'
import { useRouter } from 'next/router'
import MovieLayout from '@/Layout/MovieLayout'
import MovieHeader from '@/components/MovieHeader'
import Detail from '@/components/Detail'
import styles from '@/styles/movies.module.css'
import Comments from '@/container/Comments'
function movies({response,comment}) {
    const router = useRouter()
    const { id } = router.query
    console.log(response)
    console.log(comment)

  return (
    <div className={styles.movie_detail}>
      <MovieHeader data={response}/>
      <Detail data={response} />
      <Comments data={comment.results} />
    </div>
  )
}
export default movies
export const getStaticProps = async(context) =>{
    
    const url = `${process.env.SERVER}/api/movie/${context.params.id}`
    console.log(url)
    const res = await fetch(url)
    const response = await res.json()
    const urlc = `${process.env.SERVER}/api/comment/${context.params.id}`

    const resc = await fetch(urlc)
    const comment = await resc.json()

    return {
        props:{
            response,
            comment,
        }
    } 
}

export const getStaticPaths = async ()=>{
  const res = await fetch(`${process.env.SERVER}/api/movie`)
  const resp = await res.json()
  const ids = resp.results.map((item)=>item.id)
  const paths = ids.map((item)=> ({params:{id: item.toString()}}))
  return {
    paths,
    fallback:false
  }
}

// export const getStaticProps = async(context) =>{
//     const url = `https://api.themoviedb.org/3/movie/${context.params.id}?language=en-US`
//     const options = {
//         method:'GET',
//         headers:{
//             accept:'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGEzZTdhMzBjMDVkMjg5YTA4YTczNGZjMjZkZWJkZiIsInN1YiI6IjY0OGIxNWQ3YzJmZjNkMDBmZmI5YTM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2CzvPqV9MPirRHF6T7a756wSU0zblcm8QvHoDh5-igI'
//         }
//     }
//     const res = await fetch(url,options)
//     const response = await res.json()
//     console.log(response)
//     return {
//         props:{
//             response
//         }
//     } 
// }

// export const getStaticPaths = async () => {
//     const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`
//     const options = {
//         method:'GET',
//         headers:{
//             accept:'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGEzZTdhMzBjMDVkMjg5YTA4YTczNGZjMjZkZWJkZiIsInN1YiI6IjY0OGIxNWQ3YzJmZjNkMDBmZmI5YTM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2CzvPqV9MPirRHF6T7a756wSU0zblcm8QvHoDh5-igI'
//         }
//     }
//     const res = await fetch(url,options)
//     const response = await res.json()
    
    
//       const ids = response.results.map((art) => art.id)
//       const paths = ids.map((id) => ({ params: { id: id.toString() } }))
//       console.log(paths)
//       return {
//         paths,
//         fallback: false,
//       }
//     }