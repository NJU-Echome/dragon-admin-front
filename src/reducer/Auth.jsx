import { UPDATE_USER_INFO } from '../action/Auth';

function getUserInfo(state = null, action) {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return action.userInfo;
    default:
      return state;
  }
}

export default {
  userInfo: getUserInfo
};
