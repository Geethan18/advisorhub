import React from "react";
import './nh.css';
import { Link } from "react-router-dom";
import NavBar from "./navbar";
function NHome(){
  return( <>

      <NavBar/>
      {/* <div className="newclass">
      Be an Advisor,<br></br> Not an example
      </div> */}
        <div style={{height:'40vh'}}>

        <div className="templater" style={{overflow:'hidden'}}>
            {/* <div className="container"> */}
            <div className ="con">
  <div className="card-container">
    <span className="pro">Verified</span>
    <img
      className="round"
      src="https://randomuser.me/api/portraits/men/62.jpg"
      alt="user"
    />
    <h3>Tony Stark</h3>
    <h6>New York</h6>
    <p style={{color:'white'}}>
      User interface designer and <br /> front-end developer
    </p>
    <div className="buttons">
      <button className="primary"><Link to='/request'>Message</Link></button>
      <button className="primary ghost"><Link to='/newprofile'>View</Link></button>
    </div>
    <div className="skills">
      <h6>Skills</h6>
      <ul>
        <li>UI / UX</li>
        <li>Front End Development</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
      </ul>
    </div>
  </div>

</div>

<div className ="con">
  <div className="card-container">
    <span className="pro">Verified</span>
    <img
      className="round"
      src="https://randomuser.me/api/portraits/women/79.jpg"
      alt="user"
    />
    <h3>Tony Shank</h3>
    <h6>New York</h6>
    <p style={{color:'white'}}>
      User interface designer and <br /> front-end developer
    </p>
    <div className="buttons">
      <button className="primary"><Link to='/request'>Message</Link></button>
      <button className="primary ghost"><Link to='/newprofile'>View</Link></button>
    </div>
    <div className="skills">
      <h6>Skills</h6>
      <ul>
        <li>UI / UX</li>
        <li>Front End Development</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
      </ul>
    </div>
  </div>

</div>
<div className ="con">
  <div className="card-container">
    <span className="pro">Verified</span>
    <img
      className="round"
      src="https://randomuser.me/api/portraits/men/62.jpg"
      alt="user"
    />
    <h3>Tony Stark</h3>
    <h6>New York</h6>
    <p style={{color:'white'}}>
      User interface designer and <br /> front-end developer
    </p>
    <div className="buttons">
      <button className="primary"><Link to='/request'>Message</Link></button>
      <button className="primary ghost"><Link to='/newprofile'>View</Link></button>
    </div>
    <div className="skills">
      <h6>Skills</h6>
      <ul>
        <li>UI / UX</li>
        <li>Front End Development</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
      </ul>
    </div>
  </div>

</div>
<div className ="con">
  <div className="card-container">
    <span className="pro">Verified</span>
    <img
      className="round"
      src="https://randomuser.me/api/portraits/men/60.jpg"
      alt="user"
    />
    <h3>Tony Shark</h3>
    <h6>New York</h6>
    <p style={{color:'white'}}>
      User interface designer and <br /> front-end developer
    </p>
    <div className="buttons">
      <button className="primary"><Link to='/request'>Message</Link></button>
      <button className="primary ghost"><Link to='/newprofile'>View</Link></button>
    </div>
    <div className="skills">
      <h6>Skills</h6>
      <ul>
        <li>UI / UX</li>
        <li>Front End Development</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
      </ul>
    </div>
  </div>


 </div>
</div>
 

        {/* </div> */}
        </div>
        </>
    );
}
export default NHome;