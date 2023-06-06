declare namespace Api {
  namespace Course {
    interface GetCourseList extends Base {
      params: PaginateParams;
      response: { paper_id: N };
    }
  }
}
