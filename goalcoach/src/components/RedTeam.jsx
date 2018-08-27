import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRedTeam } from '../actions';
import { redRef } from '../firebase';

class RedTeam extends Component {

  componentDidMount() {
    redRef.on('value', snap => {
      let redGoals = [];
      snap.forEach(redGoal => {
        const { email, title } = redGoal.val();
        redGoals.push({ email, title})
      })
      console.log('redGoals', redGoals);
      this.props.setRedTeam(redGoals);
    })
  }

  render() {
    if (this.props.redGoals){
    return (
      <div>
        {
          this.props.redGoals.map((redGoal, index) => {
            const { title, email} = redGoal;
            return (
              <div key={index}>
                <strong>{title}</strong> completed by <em>{email}</em>
              </div>
            )
          })
        }
      </div>
    )
  } else {
    return null;
  }
  }
}

function mapStateToProps(state) {
  const { redGoals } = state;
  return {
    redGoals
  }
}

export default connect(mapStateToProps, { setRedTeam })(RedTeam);
