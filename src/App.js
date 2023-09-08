import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from "./components/pages/Home";
import Services from './components/pages/Services';
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path='/services' Component={Services} />
          <Route path="/products" Component={Products} />
          <Route path="/sign-up" Component={SignUp} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;