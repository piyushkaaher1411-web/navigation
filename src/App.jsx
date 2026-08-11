import React from 'react'
import Home from './Home'
import About from'./About'
import './Box.css'
import {Route, Routes, Link,useNavigate} from 'react-router-dom'
import Notfound from './Notfound'

const App = () => {
  let a=useNavigate()
  return (
    <div>
      <button onClick={()=>a('/about')}>About</button>                      
      <button onClick={()=>a('/')}>Home</button>
      <Routes>
        <Route path='*' element={<Notfound></Notfound>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  )
}

export default App
