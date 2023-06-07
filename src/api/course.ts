import { Http } from '@/utils/http';

export const getCourseList = <T extends Api.Base = Api.Course.GetCourseList>(params?: T) => {
  console.log('pppppppppp', params);

  return Http.get<Api.PaginateResponse<T>>('/course/list', params);
};

export const postCreateTextCourse = <T extends Api.Base = Api.Exam.UpdatePaper>(
  data: T['params']
) => {
  return Http.post<T>('/exam/update-paper', data);
};
