import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthLayout from "./components/AuthLayout";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>

        {/* Protected Route */}
        <Route element={<AuthLayout/>}>
        <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
