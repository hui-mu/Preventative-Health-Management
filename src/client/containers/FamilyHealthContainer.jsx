
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
import { connect } from "react-redux";
import MemberCreator from '../components/MemberCreator.jsx';
import MemberDisplay from '../components/MemberDisplay.jsx';

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

const queryHealthActionCreator = (arg) => ({
  type: QUERY_HEALTH,
  payload: arg,
});

const mapStateToProps = state => ({
  memberList: state.health.memberList,
  age: state.health.age,
  gender: state.health.gender,
});

const mapDispatchToProps = dispatch => ({
  deleteMember: (memberId) => dispatch(deleteMemberActionCreator(memberId)),
  addMember: () => dispatch(addMemberActionCreator()),
  setNewMember: (name, gender, age) => dispatch(setNewMemberActionCreator(name, gender, age)),
  queryHealth: (arg) => {
    return dispatch(queryHealthActionCreator(arg))
  },
});

class FamilyHealthContainer extends Component {
  constructor(props) {
    super(props);
    this.query = this.query.bind(this);
  }

  async query(age, gender) {
    console.log(this.props);
    await fetch(`https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?age=${age}&sex=${gender}`, {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log("?????? query api", `https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?age=${age}&sex=${gender}`, data);
        const resource = data.Result.Resources.some.Resource;
        const health = [];
        for (let i = 0; i < resource.length; i++) {
          health.push(resource[i].Title);
        }
        this.props.queryHealth(health);
      })
  };

  render() {
    return (
      <div className="innerbox">
        {/* {console.log("props???????", this.props)} */}
        <MemberCreator setNewMember={this.props.setNewMember} queryHealth={() => { return this.query(this.props.age, this.props.gender); }} addMember={this.props.addMember} />
        <MemberDisplay memberList={this.props.memberList} deleteMember={this.props.deleteMember} />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FamilyHealthContainer);