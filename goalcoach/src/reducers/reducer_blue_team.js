import { BLUE_TEAM } from '../constants';

export default (state = [], action) => {
  switch(action.type) {
    case BLUE_TEAM:
      const { blueGoals } = action;
      return blueGoals;
    default:
      return state;
  }
}
