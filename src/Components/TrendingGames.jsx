import React, { useEffect } from 'react'
function TrendingGames({games}) {
    useEffect(() => {
    //  console.log(games)
    }, [])
    
  return (
    <div className=' mt-5  hidden md:block'>
    <div className='text-black md:text-[2rem] text-[3rem] font-bold dark:text-white '>Trending Games</div>
    <div className=' md:grid md:grid-cols-3 lg:grid-cols-4 gap-2 p-5 pl-0'>
        {games.map((elem,index)=>index<4&&(
          <div className='cursor-pointer group transition-all ease-in-out hover:scale-105 dark:bg-slate-700 dark:hover:bg-slate-500 hover:bg-slate-300 rounded-lg w-full p-5 flex flex-col'>
            <img className='rounded-t-xl object-cover h-[300px]' src={elem.background_image} />
            <h2 className='group-hover:font-bold text-lg ml-3 mt-3 text-black group-hover:text-black dark:group-hover:text-white  dark:text-white font-semibold'>{elem.name}</h2>
          </div>
        ))}
    </div>
    </div>
  )
}

export default TrendingGames