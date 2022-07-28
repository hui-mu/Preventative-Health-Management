/**
 * ************************************
 *
 * @module  healthReducer
 * @author
 * @date
 * @description reducer for health data
 *
 * ************************************
 */
// set action type constants
const ADD_MEMBER = 'ADD_MEMBER';
const DELETE_MEMBER = 'DELETE_MEMBER'; // delete, increase age and added back to the panel, should be optimized to reflect age automatically
const SEND_MESSAGE = 'SEND_MESSAGE';
const QUERY_HEALTH = 'QUERY_HEALTH';
const SET_NEW_MEMBER = 'SET_NEW_MEMBER';

const initialState = {
  totalMembers: 0,
  memberList: [],
  lastMemberId: 10000,
  age: '',
  gender: '',
  name: '',
  // healthInfo: ''
  healthInfo: []
};

const healthReducer = (state = initialState, action) => {
  let memberList;

  switch (action.type) {
    case ADD_MEMBER: {
      const lastMemberId = state.lastMemberId + 1;
      const totalMembers = state.totalMembers + 1;

      const newMember = {
        'memberId': state.lastMemberId,
        'name': state.name,
        'gender': state.gender,
        'age': state.age,
        'health': state.healthInfo,
      }

      newMember.userEmail = 'fooooo';
      // request to update database
      fetch('/member/create', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/JSON' },
        body: JSON.stringify(newMember)
      }).then(res => res.json()).then(data => console.log('should see serverside response info', data));

      // update state
      memberList = state.memberList.slice();
      memberList.push(newMember);

      return {
        ...state,
        memberList,
        lastMemberId,
        totalMembers,
        age: '',
        gender: '',
        name: '',
        // healthInfo: '',
        healthInfo: []
      }
    };
    case DELETE_MEMBER: {
      const totalMembers = state.totalMembers - 1;
      const newMemberList = [];
      for (let i = 0; i < state.memberList.length; i++) {
        const member = JSON.parse(JSON.stringify(state.memberList[i]));
        if (i !== action.payload) newMemberList.push(member);
      }

      return {
        ...state,
        totalMembers,
        memberList: newMemberList,
      }
    };
    case QUERY_HEALTH: {

      // const healthInfo = ['toBeFetchedFromApi'];
      return {
        ...state,
        healthInfo: action.payload
      }
    };
    case SET_NEW_MEMBER: {
      return {
        ...state,
        name: action.payload.name,
        gender: action.payload.gender,
        age: action.payload.age,
      }
    };
    default: {
      return state;
    }
  };
}


export default healthReducer;