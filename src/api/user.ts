import { Http } from '@/utils/http';

export const getUserInfo = () => {
  return Http.get<Api.User.GetUserInfo>('/user/info');
};
