import React from "react";


function Navbar() {
    return (
        // <h1>navbar</h1>
<div >
<nav class="navbar navbar-expand-lg navbar-dark bg-danger static-top">
  <div class="container">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Appointments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Book</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
</div>

        );
}

export default Navbar