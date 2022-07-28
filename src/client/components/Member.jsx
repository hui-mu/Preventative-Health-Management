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

  <div className="marketBox">
    <div>
      <label htmlFor='marketid'>Name: {props.name}</label>
    </div>
    <div>
      <button type='button' onClick={() => props.deleteMember(props.id)}>Delete</button>
    </div>
  </div>
);

export default Member;