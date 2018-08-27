import { SIGNED_IN, SET_GOALS, SET_COMPLETED, RED_TEAM, BLUE_TEAM } from '../constants';

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;
}

export function setGoals(goals) {
  const action = {
    type: SET_GOALS,
    goals
  }
  return action;
}

export function setCompleted(completeGoals) {
  const action = {
    type: SET_COMPLETED,
    completeGoals
  }
  return action;
}

export function setRedTeam(redGoals) {
  const action = {
    type: RED_TEAM,
    redGoals
  }
  return action;
}

export function setBlueTeam(blueGoals) {
  const action = {
    type: BLUE_TEAM,
    blueGoals
  }
  return action;
}
