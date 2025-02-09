import React from 'react'
import NavBar from './NavBar'
import { albumsData } from '../assets/assets'
import Albumitem from './Albumitem'
import { songsData } from '../assets/assets'
import SongItems from './SongItems'

const DisplayHome = () => {
  return (
    <>
      <NavBar/>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((items,index)=>(<Albumitem key={index} name={items.name} desc={items.desc} id={items.id} image={items.image}/>))}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hit</h1>
        <div className='flex overflow-auto'>
          {songsData.map((items,index)=>(<SongItems key={index} name={items.name} desc={items.desc} id={items.id} image={items.image}/>))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
