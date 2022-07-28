/**
 * ************************************
 *
 * @module  MarketsDisplay
 * @author
 * @date
 * @description presentation component that renders n Market components
 *
 * ************************************
 */
import React from 'react';
import Member from './Member.jsx';

const MemberDisplay = props => {
  const members = [];
  const memberList = props.memberList;
  const deleteMember = props.deleteMember;
  for (let i = 0; i < memberList.length; i++) {
    const { memeberId, name, gender, health } = memberList[i]
    members.push(<Member memeberId={memeberId} name={name} gender={gender} health={health} id={i} key={i} deleteMember={deleteMember} />);
  }

  return (
    <div className='displayBox'>
      <br></br>
      <h4 class="fs-5">Members</h4>
      {console.log(members)}
      {members}
    </div>
  );

};
export default MemberDisplay;