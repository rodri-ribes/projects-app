import './app.css'
import React from "react";
import { Route, Routes } from 'react-router-dom'


/**COMPONENTS */


import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import Error404 from './components/Error404/Error404';


function App() {

  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
