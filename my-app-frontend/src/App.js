
import "./App.css";
import Navbar from "./components/Navbar";
import Appointments from "./components/Appointments";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      
      <Home />
      {/* <Appointments /> */}
      <Footer />
      </div>



  );
}

export default App;
