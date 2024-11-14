import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Hero />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
