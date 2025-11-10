import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Read from "./pages/Read.jsx";
import Create from "./pages/Create.jsx";
import Update from "./pages/Update.jsx";

function App() {

  return (
    <div className="w-screen h-screen flex flex-col gap-5  py-10 px-10 max-sm:px-2 "> 
       <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Update />} />
       </Routes>
    </div>
  );
}

export default App;
