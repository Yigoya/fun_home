import MovieLayout from '@/Layout/MovieLayout'
import Sidebar from '@/container/Sidebar'
import React from 'react'
import Home from '../../container/Home'

function index({ resp}) {
  return (
    <MovieLayout>
        <Sidebar />
        <Home resp={resp}/>
    </MovieLayout>
    
  )
}

export default index
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