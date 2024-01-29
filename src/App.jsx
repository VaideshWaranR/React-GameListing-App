import React, { useEffect, useState } from 'react'
import Home from './Pages/Home'
import Header from './Components/Header'
import { Themecontext } from "./Context/Context"
const App = () => {
  useEffect(() => {
    settheme(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')
  }, [])
  
  const [theme, settheme] = useState('dark')
  return (
    <Themecontext.Provider value={{theme,settheme}}>
    <div className={`${theme} ${theme==='dark' ?'bg-slate-800':'bg-slate-100'} h-full p-5`}>
      <Header />
      <Home />
    </div>
    </Themecontext.Provider>
  )
}

export default App