import { Http } from '@/utils/http';

export const postCreatePaper = <T extends Api.Base = Api.Exam.CreatePaper>(data: T['params']) => {
  return Http.get<T>('/exam/create-paper', data);
};

export const postUpdatePaper = <T extends Api.Base = Api.Exam.UpdatePaper>(data: T['params']) => {
  return Http.get<T>('/exam/update-paper', data);
};
