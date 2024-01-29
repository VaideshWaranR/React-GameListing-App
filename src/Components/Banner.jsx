import React, { useEffect } from 'react'

function Banner({game}) {
    useEffect(() => {
    }, [])
    
  return (
    <div className='mr-5 relative'>
        <div className='absolute bottom-0 p-5 w-full bg-gradient-to-t from-slate-900 to-transparent'>
            <h2 className=' sm:text-sm md:text-[1.75rem] lg:text-[3rem] tracking-tighter font-semibold text-white md:mb-3'>{game.name}</h2>
            <button className='sm:px-2 sm:py-2 md:px-4 md:py-4 bg-blue-500 text-white rounded-lg'>Get Now</button>
        </div>
        <img 
        className="rounded-xl h-[50%] w-full object-cover"
        src={game.background_image}/>
    </div>
  )
}

export default Banner