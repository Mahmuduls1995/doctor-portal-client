import './App.css';
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appoinment from "./Pages/Appoinment/Appoinment";
import Home from "./Pages/Home/Home";
import Review from "./Pages/Review/Review";

import Navbar from "./Pages/Shared/Navbar";
function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/review" element={<Review></Review>} />
        <Route path="/appoinment" element={<Appoinment></Appoinment>} />
      </Routes>
    </div>
  );
}

export default App;
