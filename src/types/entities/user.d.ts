declare namespace Entity {
  namespace User {
    // 试卷
    interface User extends CommonFields {
      username: S;
      nickname: S;
      company_id: N;
      avatar: S;
      gender: 0 | 1 | AnyNumber;
      password: S;
      email: S;
      mobile: S;
    }
  }
}
