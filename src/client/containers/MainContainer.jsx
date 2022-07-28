/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React, { Component } from 'react';
// import { render } from 'react-dom';
import { connect } from 'react-redux';

import FamilyHealthContainer from './FamilyHealthContainer.jsx';
import TotalDisplay from '../components/TotalDisplay.jsx';

const mapStateToProps = state => (
  {
    totalMembers: state.health.totalMembers
  }
);

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <div className='outerBox'>
          <h1 id='header' class="fs-2">Family Health Panel</h1>
          <TotalDisplay totalMembers={this.props.tm} />
          <FamilyHealthContainer />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(MainContainer);