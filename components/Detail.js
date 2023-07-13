import React from 'react'
import styles from '@/styles/movies.module.css'
function Detail({data}) {
  return (
    <div className={styles.detailmovie}>
        <div className={styles.detail_img}>
            <img src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`}/>
        </div>
        <div className={styles.detailright}>
            <div>
                <button> Watch Now</button>
                <button> Add to favorite</button>
            </div>
            <h1>data.title</h1>
            <div>
                {data.genres.map((item)=>(
                    <p>{item.name}</p>
                ))}
            </div>
            <p>{data.overview}</p>
            <div>
                <p>{`Released: ${data.release_date}`}</p>
                <p>{`Length: ${data.runtime}min`}</p>
            </div>
            <div>
            <p>{`Language: ${data.spoken_languages[0].name}`}</p>
            </div>
        </div>
        
    </div>
  )
}

export default Detail