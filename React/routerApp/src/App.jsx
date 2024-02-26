import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from "./components/Home"
import Support from "./components/Support"
import About from "./components/About"
import Labs from "./components/Labs"
import NotFound from "./components/NotFound"
import MainHeader from './components/MainHeader'

const App = () => {
  return (
    <>
        <nav>
          <ul>
            <li>
              <NavLink to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/labs">Labs</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path='/' element={<MainHeader/>} >
                {/* Default Route  */}
                <Route index element={<Home/>}></Route>

                <Route path='/support' element={<Support/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/labs' element={<Labs/>} />
                <Route path='/*' element={<NotFound/>} />
            </Route>
        </Routes>

    </>
  )
}

export default App
