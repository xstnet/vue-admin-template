import Mock, { Random } from 'mockjs';
Mock.setup({
  timeout: 1000
});
Mock.mock(/api\/course\/list/, 'get', (options: any) => {
  const list = [
    {
      id: 1,
      start_time: '2016-05-03',
      name: 'React 从入门到精通',
      type: '综合课',
      status: 100,
      credit: 100,
      created_at: new Date(),
      teacher: {
        id: 1,
        name: '张三'
      },
      cover:
        'https://i0.hdslb.com/bfs/archive/3086cba16f49bec40a765e2320436b3b18b0bc86.jpg@672w_378h_1c_!web-search-common-cover.webp'
    },
    {
      id: 2,
      start_time: '2016-05-03',
      name: 'WebSocket是什么',
      status: 100,
      created_at: new Date(),
      type: '图文课',
      credit: 100,
      teacher: {
        id: 1,
        name: '张三'
      },
      cover:
        'https://i2.hdslb.com/bfs/archive/12a888dd9f2fb64ce1d32fb075e6e49ffbcd6ea1.jpg@672w_378h_1c_!web-search-common-cover.webp'
    },
    {
      id: 3,
      start_time: '2016-05-03',
      name: 'OAuth2.0介绍',
      status: 100,
      created_at: new Date(),
      type: '图文课',
      credit: 100,
      teacher: {
        id: 1,
        name: '张三'
      },
      cover:
        'https://i2.hdslb.com/bfs/archive/b0fd51d2bbe22d17d694dceb99b879e4eb1f4fde.jpg@672w_378h_1c_!web-search-common-cover.webp'
    },
    {
      id: 4,
      start_time: '2016-05-03',
      name: 'Vue3入门',
      status: 100,
      created_at: new Date(),
      type: '视频课',
      credit: 100,
      teacher: {
        id: 1,
        name: '张三'
      },
      cover:
        'https://i0.hdslb.com/bfs/legacy/660382cf331217801d2d659050a32040151fabd3.png@672w_378h_1c_100q_!web-search-common-cover.webp'
    },
    {
      id: 5,
      status: 100,
      start_time: '2017-05-03',
      name: 'TCP和UDP的区别',
      type: '视频课',
      credit: 100,
      created_at: new Date(),
      teacher: {
        id: 1,
        name: '张三'
      },
      cover:
        'https://i2.hdslb.com/bfs/archive/1de112ab58dd55fd950ed2854d2b53417c95b4b5.jpg@672w_378h_1c_!web-search-common-cover.webp'
    }
  ];

  const data = {
    code: 0,
    message: 'ok',
    data: {
      list,
      total: 400
    }
  };

  return data;
});
