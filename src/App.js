import React from "react";
import "./App.css";
import Navbar from "./component/common/navbar/Navbar";
import Sidebar from "./component/common/sidebar/Sidebar";
import StaffList from "./component/staff/StaffList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StaffAdd from "./component/staff/StaffAdd";
import StaffEdit from "./component/staff/StaffEdit";
import StaffDetail from "./component/staff/StaffDetail";

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
            <Route path={`/edit-staff/:staffId`} element={<StaffEdit />} />
            <Route path={`/detail-staff/:staffId`} element={<StaffDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
