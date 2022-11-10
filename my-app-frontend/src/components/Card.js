

function Card() {
  return (
    <select class="form-control" id="type">
             <div className="card "></div>
    <input type ="text"  placeholder= " Key in Your name"/>

    <div class="form-group" required="">
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

        <div class="form-group">
          <button type="submit" className="btn1">Appointment</button>
                       </div>

                            </select>

            
  );
}

export default Card;