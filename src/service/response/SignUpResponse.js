import BaseResponse from '@/service/response/BaseResponse';
export default class SignUpResponse extends BaseResponse {
  constructor() {
    super();
    this.accessToken = '';
  }
}
