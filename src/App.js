import React from "react";
import "./App.css";
import Navbar from "./component/common/navbar/Navbar";
import Sidebar from "./component/common/sidebar/Sidebar";
import StaffList from "./component/staff/StaffList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StaffAdd from "./component/staff/StaffAdd";

function App() {
  return (
    <>
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StaffList />} />
            <Route path="/add-staff" element={<StaffAdd />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
