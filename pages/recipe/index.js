import RecipeLayout from '@/Layout/RecipeLayout'
import Sidebar from '@/container/Sidebar'
import React from 'react'
import Home from '../../container/Home'

function index({ response,respo }) {
  console.log(response)
  console.log(respo)
  return (
    <RecipeLayout>
        <Sidebar />
        <Home resp={response}/>
    </RecipeLayout>
  )
}

export default index

export const getStaticProps=async(context)=>{
  const res = await fetch(`${process.env.SERVER}/api/recipe`)
  const response = await res.json()

  const resp = await fetch(`${process.env.SERVER}/api/recipe/search/323`)
  const respo = await resp.json()
  return {
    props:{
      response,
      respo
    }
  }
}