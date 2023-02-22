import React from 'react';
import './Modal.css';

const Modal =({open,onClose})=> {
    if(!open) return null;
    return(
        <div className="overlay">
    <form className="form">
      <div className="App">
        <div className="div1">
          <label className="fname">Full Name</label>
          <label className="pno">Phone Number</label>
          <br />
          <input type="text" className="input1" placeholder="Full Name" ></input>
          <input type="text" className="input2" placeholder="Number"></input>
          <br/><br/>
        </div>
        <div>
          <label className="adr">Home/Official Address</label>
          <br />
          <textarea rows="3" cols="30" placeholder=" Address" className="input3"></textarea>
        
          <br/><br/>
        </div>
        <div>
          <label className="purpose">Purpose of Meet</label>
          <br />
          <textarea rows="3" cols="30" placeholder="Purpose" className="input4"></textarea>
          <br/><br/>
        </div>
        <div>
          <label className="date">Date</label>
          <label className="time">Time</label>
          <br />
          <input type="date" className="input5" placeholder="dd/mm/yyyy"></input>
          <input type="time" className="input6" placeholder="hh:mm"></input>
          <br/><br/>
        </div>
        <div>
          <label className="stat">Status</label>
          <br />
          <select id="status-select" name="status" className="form-select">
            <option value="blank" className="form-option" disabled selected hidden>Status</option>
            <option value="accepted">Accepted</option>
            <option value="declined">Declined</option>
          </select>
          <br/><br/>
        </div>
        <div >
          <label className="note">Note</label>
          <br/>
          <textarea rows="5" cols="30" placeholder="Enter note" className="input7"></textarea>
        </div>
        <div className="div7">
          <br/>
          <button className="btn1">Discard</button>
          <button type="submit" className="btn2">Update</button>
        </div>
        <br/><br/>
      </div>
    </form>
    </div>
         
    )
}
export default Modal;