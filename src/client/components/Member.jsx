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

const Member = props => (

  <div class="card">
    <div class="card-body">
      <label htmlFor='marketid' class="card-title fs-4">Name: {props.name}</label>
      <br></br>
      <button type='button' class="btn btn-primary me-3" onClick="">Details</button>
      <button type='button' class="btn btn-secondary me-3" onClick={() => props.deleteMember(props.id)}>Delete</button>

    </div>
  </div>


);

export default Member;