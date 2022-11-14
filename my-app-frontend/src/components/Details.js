

import React, { useEffect, useState } from 'react'


function Details() {
  const [user, setUser] = useState([])
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [doctorSpeciality, setDoctorSpeciality] = useState("");
  const [userId,setUserId]=useState(null)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setPatientName(resp[0].name)
        setDoctorSpeciality(resp[0].username)
        setDoctorName(resp[0].email)
        setUserId(resp[0].id)
      })
    })
  }

  function deleteUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  function selectUser(id)
  {
    let item=user[id-1];
    setPatientName(item.name)
    setDoctorName(item.email)
    setDoctorSpeciality(item.username);
        setUserId(item.id)
  }
  function updateUser()
  {
    let item={patientName,doctorSpeciality,doctorName}
    console.warn("item",item)
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  return (
    <div>
        <h1 class="text-danger text-center">Edit Appointment</h1>
        <div class="bg-light">
      <section class=" mb-3 container my-2 bg-danger w-50 text-light p-2 rounded">
        <form  className="row g-3 p-3">
          <div className="col-md-4 " >
            <label className="form-label "><h5 >Patient's Name</h5></label>
            <input
            placeholder="Enter Patient's name"
              type="text"
              name="patient_name"
              className="form-control p-2"
              value={patientName}
              onChange={(e) => {setPatientName(e.target.value)}}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label"><h5>Doctors name</h5></label>
            <input
              placeholder="Enter Dr's name"
              type="text"
              name=" doctor_name"
              className="form-control p-2"
              value={doctorName} 
              onChange={(e)=>{setDoctorName(e.target.value)}}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label"><h5>Speciality</h5></label>
            <input
            placeholder="Enter Dr's speciality"
              type="text"
              name="doctor_speciality"
              className="form-control p-2"
              value={doctorSpeciality}  
              onChange={(e)=>{setDoctorSpeciality(e.target.value)}}
            />
          </div>

          <div className="col-12 d-flex justify-content-center">
            
            <button onSubmit={updateUser } type="submit" className="btn btn-success mt-4">
              Save
            </button>
          </div>
        </form>
        </section>
      </div>


     {/* ---------------------------------- list---------------------------- */}
    <div className="table-responsive-md">
      <table  class = "table table-striped caption-top">
      <caption>
          <h1 class="text-danger">Update Appointments</h1>
        </caption>
        <thead class="thead-dark">
          <tr>
            <th scope="col">
              <h3 class="text-danger">ID</h3>
            </th>
            <th scope="col">
              <h3 class="text-danger">Patient's Name</h3>
            </th>
            <th scope="col">
              <h3 class="text-danger">Doctor's Name</h3>
            </th>
            <th scope="col">
              <h3 class="text-danger">Speciality</h3>
            </th>
           
          </tr>
        </thead>
        <tbody>
          
          {
            user.map((item, i) =>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>
                    <div class="d-flex justify-content-evenly">

                      <button onClick={() => selectUser(item.id)} type="button" class="btn btn-primary">
                        Edit
                      </button>
                      <button onClick={() => deleteUser(item.id)} type="button" class="btn btn-danger">Delete
                      </button>
                    </div>
                  </td>
                
              </tr>
            )
          }
        </tbody>
      </table>
      
</div>

        </div>         

    );
}
export default Details;



