import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import SignIn from "./routes/SignIn";
import Registration from "./routes/registration";
import Navbar from "./components/NavBar";
import Customers from "./routes/Customers";
import Records from "./routes/Records";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Registration />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/records" element={<Records />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
