import { Search } from '@mui/icons-material'
import React, { useRef, useState } from 'react'

function FoodSearch() {
    const ref = useRef()
    const [list,setList] = useState(false)
    const [text,setText] = useState('')
    const [data,setData] = useState([])
    const show = async()=>{
        const resp = await fetch(`${process.env.SERVER}/api/recipe/search/${ref.current.value}`)
        const respo = await resp.json()
        console.log(respo.results)
        setData(respo.results)
        console.log(data)
        setList(true)
    }
  return (
    <div>
        <div>
            <Search />
            <input ref={ref} onKeyUp={(e)=> e.key ==='Enter' && show()} />
        </div>
        <div>
        {list && (
            data.map((item,index)=>(
                    <div key={index}>
                        <img src={item.image} width='10px'/>
                        <p>{item.title}</p>
                    </div>
                ))
        )}
        </div>
        
    </div>
  )
}

export default FoodSearch