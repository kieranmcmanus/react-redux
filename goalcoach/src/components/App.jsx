import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';
import RedTeam from './RedTeam';
import BlueTeam from './BlueTeam';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div style={{margin: '5px'}}>
        <h3>Goal Coach</h3>
        <AddGoal />
        <hr />
        <h4>Goals</h4>
        <GoalList />
        <hr />
        <h4>Complete Goals</h4>
        <CompleteGoalList />
        <hr />
        <h4>Red Team</h4>
        <RedTeam />
        <hr />
        <h4>Blue Team</h4>
        <BlueTeam />
        <hr />
          <button
            className="btn btn-danger"
            onClick={() => this.signOut()}
          >
            Sign Out
          </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log('state', state);
  return {}
}

export default connect(mapStateToProps, null)(App);
