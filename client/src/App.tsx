import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Login from "./components/Forms/Login"

export default function App(){
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route element={<Layout/>}>
          {/* Unprotected Routes  */}
          <Route index element={<Hero/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}