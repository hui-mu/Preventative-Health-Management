/**
 * ************************************
 *
 * @module  MarketCreator
 * @author
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */
import React from "react";

const MemberCreator = props => {
  return (
    <div >
      <p class="fs-5">Create New Member</p>
      <div className="form-floating">
        <input class="form-control" placeholder="something" id='name'></input>
        <label htmlFor='name' >Name(*)</label>
      </div>
      <br></br>
      <div className="form-floating">
        <input class="form-control" placeholder="something" id='gender'></input>
        <label htmlFor='gender'>Gender(*)</label>
      </div>
      <br></br>
      <div class="form-floating">
        <input class="form-control" placeholder="something" id='age' onChange={() => { props.setNewMember(document.getElementById('name').value, document.getElementById('gender').value, document.getElementById('age').value) }}></input>
        <label htmlFor='age' >Age(*)</label>
      </div>
      <br></br>
      <div>
        <button type="button" class="btn btn-outline-primary me-3" onClick={props.queryHealth}>Query Health Info</button>
        <button type="button" class="btn btn-outline-primary me-3" onClick={props.addMarket}>Add Member</button>
      </div>

    </div >
  );
};

export default MemberCreator;