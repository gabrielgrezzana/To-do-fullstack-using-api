// import { Header } from './Pages/Header/Header'
import { Body } from './Pages/Body/Body'
import { Login } from './Pages/Login/Login' 
import {useState } from 'react'
import axios from 'axios'
axios.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem("userToken")

function App() {
const [page, setPage] = useState(false)




  return (
    <>
  
      {page == true ? <Body  /> : <Login  setPage={setPage}/>}
      
    </>
  )
}

export default App
