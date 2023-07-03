import React, { FunctionComponent } from "react"
import Sidebar from "./dashboard/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/pages/Dashboard";
import Etudiant from "./dashboard/pages/Etudiant";
import Enseignant from "./dashboard/pages/Enseignant";

import "./App.css"

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/etudiants" element={<Etudiant/>}/>
        <Route path="/enseignants" element={<Enseignant/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
