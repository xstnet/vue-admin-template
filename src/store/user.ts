import { defineStore } from 'pinia';

interface UserInfo {
  id: N;
  username: S;
  nickname: S;
  avatar: S;
  mobile: S;
  email: S;
  gender: N;
  company_id: N;
}
interface State {
  userInfo: UserInfo | null;
}

export const useUserInfoStore = defineStore('user', {
  state: (): State => ({ userInfo: null }),
  getters: {},
  actions: {
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo;
    }
  }
});
