import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./Dashboard";


function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
