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
      accessToken: '', // access token
    }
  ];

  mock.onPost('/api/v1/auth/signin').reply(() => {
    return [200, data[0]];
  })

  mock.onGet('/api/v1/auth/signin').reply(() => {
    return [200, data[0]];
  })

  mock.onDelete('/api/v1/auth/signin').reply(200);
}
