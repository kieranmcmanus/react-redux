import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBlueTeam } from '../actions';
import { blueRef } from '../firebase';

class BlueTeam extends Component {
  componentDidMount() {
    blueRef.on('value', snap => {
      let blueGoals = [];
      snap.forEach(blueGoal => {
        const { email, title } = blueGoal.val();
        blueGoals.push({ email, title})
      })
      console.log('blueGoals', blueGoals);
      this.props.setBlueTeam(blueGoals);
    })
  }

  render() {
    return (
      <div>
        {
          this.props.blueGoals && this.props.blueGoals.map((blueGoal, index) => {
            const { title, email} = blueGoal;
            return (
              <div key={index}>
                <strong>{title}</strong> submitted by <em>{email}</em>
              </div>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { blueGoals } = state;
  return {
    blueGoals
  }
}

export default connect(mapStateToProps, { setBlueTeam })(BlueTeam);
