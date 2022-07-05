import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { LogIn,Singnup,Mydashboard } from "./screen";

export default function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Singnup/>} />
        <Route path="login" element={<LogIn/>} />
        <Route path="dashboard" element={<Mydashboard/>} />
      </Routes>
    </Router>
  );
}
