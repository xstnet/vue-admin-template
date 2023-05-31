import Mock, { Random } from 'mockjs';
Mock.setup({
  timeout: 1000
});
Mock.mock(/api\/user\/info/, 'get', (options: any) => {
  const data = {
    code: 0,
    message: 'ok',
    data: {
      id: 1,
      username: 'admin',
      nickname: '张三',
      avatar:
        'https://sns-img-bd.xhscdn.com/d21de716-95fa-faaf-45a0-6ee2d48211bd?imageView2/2/w/1920/format/webp|imageMogr2/strip',
      gender: Random.natural(1, 2),
      email: 'axxxxxx@qq.com',
      mobile: '133xxxx3333'
    }
  };

  return data;
});
