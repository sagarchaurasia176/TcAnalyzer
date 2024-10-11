import React from 'react'
import HeaderData from '../api/HeaderData'
const HeroComponent = () => {
  return (
    <div className=' p-3 w-full h-3/4 bg-slate-50'>
        <div>
            <h1>{HeaderData.title}</h1>
        </div>
    </div>
  )
}

export default HeroComponent