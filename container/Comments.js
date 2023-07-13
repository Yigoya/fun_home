import Comment from '@/components/Comment'
import React from 'react'

function Comments({data}) {
    
  return (
    <div>
        {data.map((item)=>(
            <Comment data={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Comments