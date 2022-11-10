import React, { useState } from "react"
import data from "../db.js"
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
//import  Navbars  from '../Components/Navbar';


const LoginForm = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [name,setName]=useState("")
    const [Number,setNumber]=useState("")
    const [Specialist,setspecialist]=useState("")
    const [Address,setaddress]=useState("")
    return (
      <Form onSubmit={onSubmit}>
          <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
  
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="Number"
            placeholder="Number"
            value={Number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicSpecialist">
          <Form.Label>Specialist</Form.Label>
          <Form.Control
            type="text"
            placeholder="Specialist"
            value={Specialist}
            onChange={(e) => setspecialist(e.target.value)}
            required
           
          />
        </Form.Group>
  
        {/* <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group> */}


        <Form.Group controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            value={Address}
            onChange={(e) => setaddress(e.target.value)}
            required
          />
        </Form.Group>


        {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me!" />
        </Form.Group> */}
        <Button variant="primary" type="submit" block>
          Book
        </Button>
      </Form>
    );
  };
  





export const Doctor=()=>{
    const [count,setcount]=useState(1)
    const [show, setShow] = useState(false);
    const length=data.length
    var bool=true
    // console.log(length)

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => {
        setShow(true)
    };
  
    const onLoginFormSubmit = (e) => {
        e.preventDefault();
        alert("you have successfully appointed")
        handleClose();
      };



 
    const handleclick=()=>{
        
       if(count<=length){
           setcount(count+1)
           
           
       }else{
        //    alert('No More appointments can be done')
           bool=false
       }
    }
 
   
    return(
      <div>
          
      <div>
   <div className='navset'>
       <nav className='navbar'>
           <ul>
              
               
              
            
           </ul>
       </nav>
  
   </div>
</div>


          {/* data */}
           {data.map(e=>{
               return(

                   <div className="name">
                        <div className="img">
                            <img src={e.img}></img>
                            </div>
                        <div className="datamain">
                            <div className="data">
                              <div>
                              {`Name : DR ${ e.name}`}
                              </div>
                            <div>
                            {`Speciality : ${e.Speciality}`}
                            </div>
                            <div>
                                <span>Time Available : </span>{` ${e.Slot}`}
                            </div>
                        
                            <div>
                                {`Cost : ${e.Cost}`}
                            </div>
                            <button onClick={handleShow } className="bt"  >Book appointment</button>
                            </div>
                        </div>
                   </div>

               )
           })}


        

    <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Booking Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <LoginForm onSubmit={onLoginFormSubmit} />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close 
            </Button>
            </Modal.Footer>
        </Modal>

           {/*  */}


      

       


           
</div>


    )
}

                  
                
    