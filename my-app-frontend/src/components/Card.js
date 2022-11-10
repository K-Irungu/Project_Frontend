import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



function Card() {
    return (
        <>
    
               <div className="form-group ">
               
      <input type ="text"  placeholder= " Key in Your name"/>
  
      <div className="form-group" required="">
      <label for="sel1">SERVICES:</label>
              <select class="form-control" id="pick">
                <option>---Services---</option>
                  <option value="1">Optician</option>
                  <option value="2">Dentist</option>
                  <option value="3">Cardiologist</option>
                  <option value="4">Physiologist</option>
                  <option value="5">Peditritian</option>
              </select>
          </div>
          <div className="form-group" required="">
      <label for="sel1">OUR DOCTORS:</label>
              <select class="form-control" id="pick">
                <option>---DR---</option>
                  <option value="1">DR RICARD</option>
                  <option value="2">DR MARK</option>
                  <option value="3">DR MIRRA</option>
                  <option value="4">DR PRUNA</option>
                  <option value="5">DR SAM</option>
                  </select>
          </div>
  
          <div class="form-group">
            <button type="submit" className="btn1">Appointment</button>
                         </div>
                    
                         </div>
  
                              
  
  </>
    );
  }
  
  export default Card;