
/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author
 * @date
 * @description stateful component that renders MarketCreator and MarketsDisplay
 *
 * ************************************
 */

import React, { Component } from "react";
import { Connect } from "react-redux";
import MemberCreator from '../components/MemberCreator';
import MemberDisplay from '../components/MemberDisplay';

// set action type constants
const ADD_MEMBER = 'ADD_MEMBER';
const DELETE_MEMBER = 'DELETE_MEMBER'; // delete, increase age and added back to the panel, should be optimized to reflect age automatically
const SEND_MESSAGE = 'SEND_MESSAGE';
const QUERY_HEALTH = 'QUERY_HEALTH';
const SET_NEW_MEMBER = 'SET_NEW_MEMBER';

// set action creators
const addMemberActionCreator = () => ({
  type: ADD_MEMBER,
});

const deleteMemberActionCreator = memberId => ({
  type: DELETE_MEMBER,
  payload: memberId,
});

const setNewMemberActionCreator = (name, gender, age) => ({
  type: SET_NEW_MEMBER,
  payload: { name: name, gender: gender, age: age },
});

const queryHealthActionCreator = (healthInfo) => ({
  type: QUERY_HEALTH,
  payload: healthInfo,
});

const mapStateToProps = state => ({
  memberList: state.health.memberList,

});

const mapDispatchToProps = dispatch => ({
  deleteMember: (memberId) => dispatch(deleteMemberActionCreator(memberId)),
  addMember: () => dispatch(addMemberActionCreator()),
  setNewMember: (name, gender, age) => dispatch(setNewMemberActionCreator(name, gender, age)),
  queryHealth: (healthInfo) => dispatch(queryHealthActionCreator(healthInfo)),
});

class FamilyHealthContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div className="innerbox">
      <MemberCreator setNewMember={this.props.setNewMember} queryHealth={this.props.queryHealth} addMember={this.props.addMember} />
      <MemberDisplay memberList={this.props.memberList} />
    </div>
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FamilyHealthContainer);