import BaseResponse from '@/service/response/BaseResponse';
export default class UserProfileResponse extends BaseResponse {
  constructor() {
    super();
    this.userInfo = null;
  }
}
