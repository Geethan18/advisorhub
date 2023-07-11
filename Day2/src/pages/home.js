import React from "react";
import './home.css';
import { Link } from "react-router-dom";
function Home(){
    return(
        <div>
<div className="navhead">

<ul>
  <li className="navItems">           
            <input
              type="text"
              name="text"
              placeholder="Search"

            /></li>
  <li className="navItems" id="navItems"><Link to='/'>LogOut</Link></li>
  <li className="navItems" id="navItems">Contact</li>
  <li className="navItems" id="navItems">About</li>
  <li className="navItems" id="navItems">Home</li>
</ul></div>
        <div className="template">
            {/* <div className="container"> */}
            <div className ="con">
  <div className="card-container">
    <span className="pro">Verified</span>
    <img
      className="round"
      src="https://randomuser.me/api/portraits/men/62.jpg"
      alt="user"
    />
    <h3>Ricky Park</h3>
    <h6>New York</h6>
    <p>
      User interface designer and <br /> front-end developer
    </p>
    <div className="buttons">
      <button className="primary">Message</button>
      <button className="primary ghost">Following</button>
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
    <h3>Ricky Park</h3>
    <h6>New York</h6>
    <p>
      User interface designer and <br /> front-end developer
    </p>
    <div className="buttons">
      <button className="primary">Message</button>
      <button className="primary ghost">Following</button>
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
    <h3>Ricky Park</h3>
    <h6>New York</h6>
    <p>
      User interface designer and <br /> front-end developer
    </p>
    <div className="buttons">
      <button className="primary">Message</button>
      <button className="primary ghost">Following</button>
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

  {/* </div> */}
</div>
        </div>
        </div>
    );
}
export default Home;