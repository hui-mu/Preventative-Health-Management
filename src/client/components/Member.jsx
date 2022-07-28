/**
 * ************************************
 *
 * @module  Market
 * @author
 * @date
 * @description presentation component that renders a single box for each market
 *
 * ************************************
 */

import React from 'react';


const Member = props => {
  const healthArr = [];
  // const show = (arr) => {
  for (let i = 0; i < props.health.length; i++) {
    healthArr.push(<li key={i}>{props.health[i]}</li>);
  }
  // return healthArr;
  // };

  return (
    <div class="card">
      <div class="card-header fs-4">
        Name: {props.name}
      </div>
      <div class="card-body">
        <label htmlFor='marketid' class="card-title fs-4">Preventative Health Care Tips</label>
        <br></br>
        <ul>{healthArr}</ul>
        <br></br>
        {/* <button type='button' class="btn btn-primary me-3" onClick={() => show(props.health)}>Details</button> */}
        <button type='button' class="btn btn-secondary me-3" onClick={() => props.deleteMember(props.id)}>Delete</button>
      </div>
    </div>
  );

};

export default Member;