import logo from "./logo.svg";
import "./App.css";
import Navbar from "./global_components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./pages/hero";
import AppliedEvent from "./pages/applied_event";
import SignUp from "./pages/signup";
import Authenticator from "./global_components/authenticator";

function App() {
  return (
    <>
      <Authenticator>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/appliedevent" element={<AppliedEvent/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
      </Authenticator>
      
    </>
  );
}

export default App;
