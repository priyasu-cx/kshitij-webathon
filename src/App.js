import logo from "./logo.svg";
import "./App.css";
import Navbar from "./global_components/navbar";
import { Routes, Route } from "react-router-dom";
import Hero from "./pages/hero";

function App() {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Hero />} />
      </Routes> */}
    </>
  );
}

export default App;
