const UPDATE_USER_INFO = "UPDATE_USER_INFO";

export {
  UPDATE_USER_INFO
};

export function updateUserInfo(userInfo) {
  return { userInfo };
}