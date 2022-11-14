
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStethoscope,
  faPrescriptionBottleMedical,
  faSyringe,
} from "@fortawesome/free-solid-svg-icons";


function App() {
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
    <div className="table-responsive-md">
      <table  class = "table table-striped caption-top">
      <caption>
          <h1 class="text-danger">List of Appointments</h1>
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
                      <a  href= "/Details" class="btn btn-dark">
                        <FontAwesomeIcon icon={faStethoscope} />
                      </a>
                      <a  href= "/Details" class="btn btn-success" >
                        <FontAwesomeIcon icon={faSyringe} />
                      </a>
                      <a  href= "/Details" class="btn btn-danger" >
                        <FontAwesomeIcon icon={faPrescriptionBottleMedical} />
                      </a>
                    </div>
                    </td>

              </tr>
            )
          }
        </tbody>
      </table>
      {/* <div>
      <input type="text" value={patientName} } /> <br /><br />
        <input type="text" value={doctorName} onChange={(e)=>{setDoctorName(e.target.value)}} /> <br /><br />
        <input type="text" value={doctorSpeciality}  onChange={(e)=>{setDoctorSpeciality(e.target.value)}} /> <br /><br />
        <button  >Update User</button>  
      </div> */}
    </div>
  );
}
export default App;