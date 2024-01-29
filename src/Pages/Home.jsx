import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalApi from '../Service/GlobalApi'
import Banner from '../Components/Banner'
import TrendingGames from '../Components/TrendingGames'
import GameId from '../Components/GameId'
function Home() {
  const [id,setGenid]=useState(4)
  const[i,seti] =useState(0);
  setTimeout(() => {
    if(i===games.length)seti(0)
    else
    seti(i+1)
  }, 100000);
  const [pop,setpop] =useState([])
  const [games,setgames]=useState([])
  useEffect(() => {
  getGamesList()
  Gamesgenere(4)
  }, [])
  const getGamesList=()=>{
    GlobalApi.getGame.then((resp)=>{
      setgames(resp.data.results)}
    )}
    const Gamesgenere=(ind)=>{
        GlobalApi.getGameGenere(ind).then((resp)=>{
          setpop(resp.data.results)
        })
    }
  return (
    <div className='grid grid-cols-4 p-2 h-[100%]'>
      <div className=' hidden md:block lg:block '>
        <GenreList setGenid={(setGenid)=>Gamesgenere(setGenid)}/>
      </div>
      {games.length>0 ?
      <div className='col-span-4 md:col-span-3'><Banner game={games[i]}/>
      <TrendingGames games={games}/>
      <GameId games={pop}/>
      </div>
      :null}
    </div>

  )
}

export default Home