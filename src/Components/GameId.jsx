import React from 'react'

function GameId({games}) {
    console.log(games)
  return (
    <div>
        <h2 className=' text-black text-3xl p-2 font-bold dark:text-white'>Popular Games</h2>
        <div className=' md:grid md:grid-cols-3 lg:grid-cols-3 gap-2 p-5 pl-0'>
        {games.map((elem)=>(
          <div className='cursor-pointer group transition-all ease-in-out hover:scale-105 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500 rounded-lg w-full p-5 flex flex-col'>
            <img className='rounded-t-xl object-cover h-[300px]' src={elem.background_image} />
            <h2 className='group-hover:font-bold text-lg ml-3 mt-3 text-black dark:text-white font-semibold'>{elem.name}<span>{elem.metacritic}</span></h2>
           <h2 className='dark:text-white font-bold tracking-wide text-black'>⭐{elem.rating}   💬{elem.reviews_count}    🔥{elem.suggestions_count}</h2>
          </div>
        ))}
    </div>
    </div>
  )
}

export default GameId