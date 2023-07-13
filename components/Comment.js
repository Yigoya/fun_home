import { Star } from '@mui/icons-material'
import React from 'react'

function Comment({data}) {
    let rating = []
    for(let i=0;i<data.author_details.rating;i++){
            rating.push(i)   
    }
    console.log(rating)
  return (
    <div>
        <div>
            <img src={`http://image.tmdb.org/t/p/w500/${data.author_details.avatar_path}`}/>
            <p>{data.author}</p>
            {rating.map((i)=>(
                <Star fontSize='12px'/>
            ))}
        </div>
        <div>
            <p>{data.content}</p>
        </div>
        <div>
            <p>{data.updated_at}</p>
        </div>
    </div>
  )
}

export default Comment