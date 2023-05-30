namespace Api {
  interface Base {
    params: KV;
    response: KV;
  }

  type ResponseData<T = Base> = {
    code: N;
    status: B;
    message: S;
    data: T extends Base ? T['response'] : T;
  };

  // 分页参数
  interface PaginateParams {
    current?: N;
    pageSize?: N;
  }

  interface PaginateResponse<T> {
    total: N;
    list: T extends Base ? T['response'][] : T[];
  }

  // -----------------------------------------------------------------------------------------------
}
