import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import Home from "./components/Home";
import Competitions from "./components/Competitions";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Competitions" element={<Competitions />}></Route>
      </Routes>
    </>
  );
}

export default App;
