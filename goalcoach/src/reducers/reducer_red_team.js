import { RED_TEAM } from '../constants';

export default (state = [], action) => {
  switch(action.type) {
    case RED_TEAM:
      const { redGoals } = action;
      return redGoals;
    default:
      return state;
  }
}
