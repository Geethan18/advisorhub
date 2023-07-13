import React from "react";
import './advp.css';
import NavBar from "./navbar";
export default function Advp(){
    return(
        <>
        <NavBar/>
        <div className="bg" style={{background:'white'}}>
  
  <div className="container bootstrap snippets bootdey">
    <div className="row">
      <div className="profile-nav col-md-3">
        <div className="panel">
          <div className="user-heading round">
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4140/4140047.png"
                alt=""
              />
            </a>
            <h1>Tony Gibbs</h1>
            <p>heyya@gmail.com</p>
          </div>
          <ul className="nav nav-pills nav-stacked">
            <li className="active">
              <a href="/advp">
                {" "}
                <i className="fa fa-user" /> Profile
              </a>
            </li>
            <br></br>
            <li>
              <a href="/newregister">
                {" "}
                <i className="fa fa-edit" /> Edit profile
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="profile-info col-md-9" style={{background:'white'}}>
        <div className="panel">

        </div>
        <div className="panel">
          <div className="bio-graph-heading">
            <p >@User</p>
          </div>
          <div className="panel-body bio-graph-info" style={{background:'white'}}>

            <div className="row">
              <div className="bio-row">
                <p>
                  <span>First Name </span>: Tony
                </p>
              </div>
              <div className="bio-row">
                <p>
                  <span>Last Name </span>: Gibbs
                </p>
              </div>
              <div className="bio-row">
                <p>
                  <span>Country </span>: Knowhere
                </p>
              </div>
              <div className="bio-row">
                <p>
                  <span>Birthday</span>: 13 July 1900
                </p>
              </div>
              <div className="bio-row">
                <p>
                  <span>Occupation </span>: UI Designer
                </p>
              </div>
              <div className="bio-row">
                <p>
                  <span>Email </span>: thisisanemail@gmail.com
                </p>
              </div>
              <div className="bio-row">
                <p>
                  <span>Mobile </span>: (04) 00 00 122321
                </p>
              </div>
              <div className="bio-row">
                <p>
                  <span>Phone </span>: 04 (00) 00 122321
                </p>
              </div>
            </div>
<div>
  <p></p>
</div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    );
}