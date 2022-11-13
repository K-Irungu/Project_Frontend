import React from "react";
import avi2m from "../img/avi-2m.png";
import avi1 from "../img/avi-1.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons'
function Card() {
    return (
<div className="container ">
<div class="row">
    <div className="col-md-12 ">
        <h1 className="my-3 text-center">Meet our specialists</h1>
    </div>
    {/* card1 */}
    <div className="col-lg-3 col-md-4 col-sm-3">
        <div className="rounded shadow d-flex justify-content-center align-items-center p-3 bg-danger rounded-lg flex-column">
            <div className="person-img">
                <img src={avi2m} alt="avi" id="avi" class="img rounded-circle  border-danger" />
            </div>
            <div className="person-name my-2">
                <h3 class="text-white">Dr. Ofueneke</h3>
            </div>
            <div className="info">
            <h6 class="text-white">Cardiologist</h6>
            </div>
            <div className="social-icons my-2">
                <a href="#" class="text-white"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#" class="text-white"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" class="text-white"><FontAwesomeIcon icon={faInstagram}/></a>
            </div>
            <button className="btn btn-sm btn-light btn-lg btn-block">view</button>
        </div>
    </div>
    {/* card2 */}
    <div className="col-lg-3 col-md-4 col-sm-3">
        <div className="rounded shadow d-flex justify-content-center align-items-center p-3 bg-danger rounded-lg flex-column">
            <div className="person-img">
                <img src={avi1} alt="avi" id="avi" class="img rounded-circle  border-danger" />
            </div>
            <div className="person-name my-2">
                <h3 class="text-white">Dr. Linda</h3>
            </div>
            <div className="info">
            <h6 class="text-white">Pediatrician</h6>
            </div>
            <div className="social-icons my-2">
                <a href="#" class="text-white"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#" class="text-white"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" class="text-white"><FontAwesomeIcon icon={faInstagram}/></a>
            </div>
            <button className="btn btn-sm btn-light btn-lg btn-block">view</button>
        </div>
    </div>
    {/* card3 */}
    <div className="col-lg-3 col-md-4 col-sm-3">
        <div className="rounded shadow d-flex justify-content-center align-items-center p-3 bg-danger rounded-lg flex-column">
            <div className="person-img">
                <img src={avi1} alt="avi" id="avi" class="img rounded-circle  border-danger" />
            </div>
            <div className="person-name my-2">
                <h3 class="text-white">Dr. Olive</h3>
            </div>
            <div className="info">
            <h6 class="text-white">Oncologist</h6>
            </div>
            <div className="social-icons my-2">
                <a href="#" class="text-white"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#" class="text-white"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" class="text-white"><FontAwesomeIcon icon={faInstagram}/></a>
            </div>
            <button className="btn btn-sm btn-light btn-lg btn-block">view</button>
        </div>
    </div>
    {/* card4 */}
    <div className="col-lg-3 col-md-4 col-sm-3">
        <div className="rounded shadow d-flex justify-content-center align-items-center p-3 bg-danger rounded-sm flex-column">
            <div className="person-img">
                <img src={avi2m} alt="avi" id="avi" class="img rounded-circle  border-danger" />
            </div>
            <div className="person-name my-2">
                <h3 class="text-white">Dr. Kimani</h3>
            </div>
            <div className="info">
            <h6 class="text-white">Radiologist</h6>
            </div>
            <div className="social-icons my-2">
                <a href="#" class="text-white"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#" class="text-white"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" class="text-white"><FontAwesomeIcon icon={faInstagram}/></a>
            </div>
            <button className="btn btn-sm btn-light btn-lg btn-block">view</button>
        </div>
    </div>
</div>
</div>

   
 );
}

export default Card;