import React from "react";
import logo from "../img/logo.png";

function Navbar() {
  return (
    // <h1>navbar</h1>
    <div>
      <nav class=" navbar navbar-light bg-light">
        <div>
          <a class="navbar-brand" href="#">
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
              <a class="nav-link active" aria-current="page" href="#">
                Specialists
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Appointments
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Contacts
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
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
