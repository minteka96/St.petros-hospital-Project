import React from "react";
import { Routes, Route } from "react-router";
import "./assets/css/style.css";
import AdminDashboard from "./markup/pages/Admin/AdminDashboard";
import Doctors from "./markup/pages/Doctors/Doctors";
import AddDoctor from "./markup/pages/AddDoctor/AddDoctor";
import Patients from "./markup/pages/Patients/Patients";
import AddPatient from "./markup/pages/AddPatient/AddPatient";
function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/Doctors/Doctors.jsx" element={<Doctors />} />
      <Route path="/AddDoctor/AddDoctor.jsx" element={<AddDoctor />} />
      <Route path="/Patients/Patients.jsx" element={<Patients />} />
<Route path="/AddPatient/AddPatient.jsx" element={<AddPatient />} />
    </Routes>
  );
}
export default App;
