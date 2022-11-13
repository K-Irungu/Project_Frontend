import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Card from "./components/Card";
import Booking from "./components/Booking";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Appointment from "./components/Appointment";

// import Appointment from "./components/Appointment";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  
  return (
  <div>
    <Navbar />
    <Router>
      
    <Routes>
      <Route path="/" element= {<Home />}/>
      <Route path="/Booking" element= {<Booking />}/>
      <Route path="/Login" element= {<Login />}/>
      <Route path="/Appointment" element= {<Appointment />}/>
    </Routes>
    

  </Router>
  <Footer />
  

  </div>
  );
}

export default App;
