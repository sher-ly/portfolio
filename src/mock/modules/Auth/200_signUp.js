export default function(mock) {
  let data =  [
    {
      code: 0,
      message: '',
      accessToken: '', // access token
    }
  ];

  mock.onPost('/api/v1/auth/signup').reply(() => {
    return [200, data[0]];
  })

  mock.onGet('/api/v1/auth/signup').reply(() => {
    return [200, data[0]];
  })

  mock.onDelete('/api/v1/auth/signup').reply(200);
}
