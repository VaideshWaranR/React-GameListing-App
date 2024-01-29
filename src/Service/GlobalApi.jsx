import axios from "axios"

const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
})
const getGenerelist=axiosCreate.get('/genres?key=2812a5fd437a4469afc33b7f09c0d5c9')
const getGame=axiosCreate.get('/games?key=2812a5fd437a4469afc33b7f09c0d5c9')
const getGameGenere=(id)=>axiosCreate.get('/games?key=2812a5fd437a4469afc33b7f09c0d5c9&genres='+id)
export default {getGenerelist,getGame,getGameGenere};