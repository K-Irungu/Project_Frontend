import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStethoscope,
  faPrescriptionBottleMedical,
  faSyringe,
} from "@fortawesome/free-solid-svg-icons";

function Appointment() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        // setData(res?.data?.data)
        setData(res.data);
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  }, []);
  return (
    <div class="table-responsive-md">
      <table class="table table-striped caption-top">
        <caption>
          <h1>List of Appointments</h1>
        </caption>
        <thead class="thead-dark">
          <tr>
            <th scope="col">
              <h3>ID</h3>
            </th>
            <th scope="col">
              <h3>Patients</h3>
            </th>
            <th scope="col">
              <h3>Doctors</h3>
            </th>
            <th scope="col">
              <h3>Speciality</h3>
            </th>
            <th scope="col justify-content-center">
              <h3>Actions</h3>
            </th>
          </tr>
        </thead>
        {/* Table data */}

        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>
                    <div class="d-flex justify-content-evenly">
                      <button type="button" class="btn btn-dark">
                        <FontAwesomeIcon icon={faStethoscope} />
                      </button>
                      <button type="button" class="btn btn-success">
                        <FontAwesomeIcon icon={faSyringe} />
                      </button>
                      <button type="button" class="btn btn-danger">
                        <FontAwesomeIcon icon={faPrescriptionBottleMedical} />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
}

export default Appointment;