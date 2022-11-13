import React, { useState, useEffect } from "react";

function Booking() {

// const[patientName, setPatientName] = useState({})
// const[doctorName, setDoctorName] = useState({})
// const[speciality, setSpeciality] = useState({})
const[selects, setSelects]=useState();



  return (
    
    <div class="bg-light">
      <section class="container my-2 bg-danger w-50 text-light p-2 rounded">
        <form class="row g-3 p-3">
          <div class="col-md-4">
            <label for="name" class="form-label">
              Patient's Name
            </label>
            <input
              name="patientName"
              type="text"
              class="form-control"
              id="Input1"
              placeholder="name"
            ></input>
          </div>

          <div class="col-md-4">
            
            <label for="input2" class="form-label">
              Specialist
            </label>
            <select value={selects} onchange = {e=>setSelects(e.target.value)}defaultValue={'DEFAULT'} id="input2" class="form-select" name="speciality">
              <option value="DEFAULT" disabled>Select</option>
              <option value="dentist"> Dentist</option>
              <option value="optician">Optician</option>
            </select>
          </div>

          <div class="col-md-4">
            <label for="input3" class="form-label">
              Specialist Available
            </label>
            <select defaultValue={'DEFAULT'} id="input3" class="form-select" name="doctorname">
              <option value="DEFAULT" disabled selected>Select</option>
              <option value="dentist1"> Dentist1</option>
              <option value="optician1">Optician1</option>
            </select>
          </div>

          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-light">
              Book
            </button>
          </div>
        </form>
      </section>

      {/* // mmmmmmmmmmmmmm */}

      <div class="column">
        <div class="row">
          <div class="card"><h1>A</h1></div>
        </div>
        <div class="row">
          <div class="card"><h1>B</h1></div>
        </div>
        <div class="row">
          <div class="card"><h1>C</h1></div>
        </div>
      </div>
    </div>

    
  );
}

export default Booking;
