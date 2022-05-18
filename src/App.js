import './App.css';
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appoinment from "./Pages/Appoinment/Appoinment";
import Home from "./Pages/Home/Home";
import Review from "./Pages/Review/Review";

import Navbar from "./Pages/Shared/Navbar";
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequiredAuth from './Pages/Shared/RequiredAuth';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';
function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="mx-w-7xl mx-auto px-12">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        {/* <Route path="/review" element={<Review></Review>} /> */}
        <Route path="/appoinment" element={
          <RequiredAuth>
            <Appoinment></Appoinment>
          </RequiredAuth>
        } />
        <Route path="/dashboard" element={<RequiredAuth><Dashboard></Dashboard></RequiredAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          {/* <Route path="users" element={<AllUsers></AllUsers>}></Route> */}
          <Route path="users" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>

        </Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
