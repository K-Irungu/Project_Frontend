import React from "react";
import logo from "../img/logo.png";
// import {BrowserRouter as Link} from "react-router-dom"

function Navbar() {
  return (
    // <h1>navbar</h1>
    <div>
      <nav class=" navbar navbar-light bg-light">
        <div>
          <a class="navbar-brand" href="./Home">
            <div className="App-header bg-light">
              <img
                src={logo}
                class=" App-logo "
                alt="logo"
              />
              <div class="h2 logo-text">Tabibu Wako</div>
            </div>
          </a>
        </div>
        <div class=" navbar-expand-xl navbar-dark bg-danger">
          <ul class="navbar-nav ms-auto">
          <li class="nav-item">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="./Appointment">
                Appointments
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./Footer">
                Contacts
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./Login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
