import React, { useEffect, useState } from 'react'
import Photogallaryitem from './Photogallaryitem'


function Photogallary() {
  const [photos, setPhotos] = useState([])
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(true)
    const photoitem = async() => {
      try {
      const res = await fetch('https://creative-assign-server.vercel.app/photogallary')
        const data = await res.json()
        setPhotos(data)
      }
      catch (error) {
        console.log(error)
      }
      setLoad(false)
    }
    photoitem()
  }, [])
  if (load) {
    return <h1>loding...</h1>
  }
  return (
    <div className='my-16 max-w-[1250px] mx-auto'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bebas'>world press photo of the year</h1>
        <p className='text-lg capitalize text-orange-700 font-bold'>fully dynamic grid layout</p>
      </div>
      <div className='grid grid-cols-12 grid-rows-3 gap-3 md:mx-0 mx-2'>
          {
            photos.map((value) =><Photogallaryitem key={value._id} value={value}></Photogallaryitem>
          )}
      </div>
    </div>
  )
}

export default Photogallary