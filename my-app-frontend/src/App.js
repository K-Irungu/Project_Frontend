import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import "./App.css";
import Navbar from "./components/Navbar";
import Appointments from "./components/Appointments";
import Home from "./components/Home";
import Login from './components/Register'
import SignUp from './components/Signup'
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Doctor} from './components/Doctor';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      < Doctor/>
     
      {/* <Appointments /> */}
      <Footer />
      </div>



  );
}

export default App;
