import React from "react";
import NavBar from "./navbar";
export default function Request(){

      
    return(
        
        <>
        <NavBar/>
        <form className="needs-validation" noValidate="" style={{marginTop:'-250px'}}>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label htmlFor="validationCustom01">First name</label>
      <input
        type="text"
        className="form-control"
        id="validationCustom01"
        placeholder="First name"
        defaultValue="Mark"
        required=""
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationCustom02">Last name</label>
      <input
        type="text"
        className="form-control"
        id="validationCustom02"
        placeholder="Last name"
        defaultValue="Otto"
        required=""
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationCustomUsername">Advisor</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupPrepend">
            @
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          id="validationCustomUsername"
          placeholder="Advisor Name"
          aria-describedby="inputGroupPrepend"
          required=""
        />
        {/* <div className="invalid-feedback">Please choose an Advisor.</div> */}
      </div>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-2">
      <label htmlFor="validationCustom03">Language</label>
      <input
        type="text"
        className="form-control"
        id="validationCustom03"
        placeholder="Language"
        required=""
      />
      <div className="invalid-feedback">Please provide a valid Language.</div>
    </div>
    
      <div class="col-md-6 mb-3">
      <label for="validationCustom04">Country</label>
      <input type="text" class="form-control" id="validationCustom04" placeholder="Country" required/>
      <div class="invalid-feedback">
        Please provide a valid Country.
      </div>
    </div>
      </div>
    <div class="form-group col-md-12">
      <label for="inputZip"></label>
      {/* <br></br>  */}
      <textarea class="form-control" id="exampleFormControlTextarea1" rows='4' cols='20' placeholder="Please provide with the Summary of the problem to be stated and solved along with the date and time you would like to schedule the meeting."></textarea>
    </div>
  <div className="form-group">
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        defaultValue=""
        id="invalidCheck"
        required=""
      />
      <label className="form-check-label" htmlFor="invalidCheck">
        I agree to accept and follow the rules and regulations of the<br></br> 
        website, therby adhering to use polite terms and any violations<br></br>
        of the rules can block me. 
      </label>
      <div className="invalid-feedback">You must agree before submitting.</div>
    </div>
  </div>
  <button className="btn btn-primary" type="submit" onClick={()=> {alert("Request sent Successfully"); window.location.href='/newhome'}}>
    Submit form
  </button>
</form>

        </>
    );
}
