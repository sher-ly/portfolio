export default function(mock) {
  let data =  [
    {
      code: 0,
      message: '',
      userInfo: {
        email: '', // user email
        nickname: '', // user nickname
        userType: 0, // user type
      },
    }
  ];

  mock.onPost('/api/v1/user/profile').reply(() => {
    return [200, data[0]];
  })

  mock.onGet('/api/v1/user/profile').reply(() => {
    return [200, data[0]];
  })

  mock.onDelete('/api/v1/user/profile').reply(200);
}
