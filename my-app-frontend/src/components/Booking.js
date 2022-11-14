import React, { useState, useEffect } from "react";
import axios from "axios";
;

function Booking() {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [doctorSpeciality, setDoctorSpeciality] = useState("");
  const [message, setMessage] = useState("");

  const handlpatientname = (event) => {
    const patient_name = event.target.value;
    setPatientName(patient_name);
  };

  const handledoctorsName = (event) => {
    const doctor_name = event.target.value;
    setDoctorName(doctor_name);
  };

  const handledoctorSpeciality = (event) => {
    const doctor_speciality = event.target.value;
    setDoctorSpeciality(doctor_speciality);
  };

  const submitData = async (e) => {
    e.preventDefault();
    const userdata = {
      patientName,
      doctorName,
      doctorSpeciality,
    };
    console.warn(submitData);
    await axios
      .post(
        "https://jsonplaceholder.typicode.com/users",
        JSON.stringify(userdata)
      )
      .then((result) => {
        setMessage(result.data.msg);
        console.log(result.data);
        console.log(result.data.msg);
      });
  };
  return (
    <div className="row">
      <div className="col-sm-12">
      <h1 class="text-danger text-center">Book your Appointment</h1>

        {message ? (
          <div className="text-success text-danger">
            {" "}
            <h5>{message} </h5>
          </div>
        ) : (
          <></>
        )}
<div class="bg-light pt-5 m-5 pb-5 ">
      <section class=" mb-3 container my-2 bg-danger w-50 text-light p-2 rounded">
        <form onSubmit={submitData} className="row g-3 p-3">
          <div className="col-md-4 " >
            <label className="form-label "><h5 >Patient's Name</h5></label>
            <input
            placeholder="Enter Patient's name"
              type="text"
              name="patient_name"
              className="form-control p-2"
              onChange={(e) => handlpatientname(e)}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label"><h5>Doctors name</h5></label>
            <input
              placeholder="Enter Dr's name"
              type="text"
              name=" doctor_name"
              className="form-control p-2"
              onChange={(e) => handledoctorsName(e)}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label"><h5>Speciality</h5></label>
            <input
            placeholder="Enter Dr's speciality"
              type="text"
              name="doctor_speciality"
              className="form-control p-2"
              onChange={(e) => handledoctorSpeciality(e)}
            />
          </div>

          <div className="col-12 d-flex justify-content-center">
            <button type="submit" className="btn btn-success mt-4">
              Book
            </button>
          </div>
        </form>
        </section>
      </div>
       <>
      
       </>
    </div>
    
    </div>
  );
}

export default Booking;
