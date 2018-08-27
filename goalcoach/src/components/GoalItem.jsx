import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef, goalRef, redRef, blueRef } from '../firebase';

class GoalItem extends Component {
  completeGoal() {
    // add to complete goals on the database
    // remove this goal from the goal's reference
    const { email } = this.props.user;
    const { title, serverKey } = this.props.goal;
    goalRef.child(serverKey).remove();
    completeGoalRef.push({email, title});
  }

  addToRedTeam() {
    // add to red team goals on the database
    // remove this goal from the goal's reference
    const { email } = this.props.user;
    const { title, serverKey } = this.props.goal;
    goalRef.child(serverKey).remove();
    redRef.push({email, title});
  }

  addToBlueTeam() {
    // add to blue team goals on the database
    // remove this goal from the goal's reference
    const { email } = this.props.user;
    const { title, serverKey } = this.props.goal;
    goalRef.child(serverKey).remove();
    blueRef.push({email, title});
  }

  render() {
    const { email, title } = this.props.goal;
    return (
      <div style={{margin: '5px'}}>
        <strong>{title}</strong>
        <span style={{marginRight: '5px'}}> submitted by <em>{email}</em></span>
        <button
          style={{marginRight: '5px'}}
          className="btn btn-sm btn-success"
          onClick={() => this.completeGoal()}
        >
          Complete
        </button>
        <button
          style={{marginRight: '5px'}}
          className="btn btn-sm btn-danger"
          onClick={() => this.addToRedTeam()}
        >
          Assign to Red Team
        </button>
        <button
          style={{marginRight: '5px'}}
          className="btn btn-sm btn-primary"
          onClick={() => this.addToBlueTeam()}
        >
          Assign to Blue Team
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(GoalItem);
