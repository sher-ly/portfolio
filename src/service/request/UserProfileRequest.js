export default class UserProfileRequest {
  constructor() {}
}
/**
import UserProfileRequest from "@/service/request/UserProfileRequest";
import ResultCode from "@/service/ResultCode";

async userProfile() {
  let req = new UserProfileRequest();
  try {
    let res = await this.$api.userProfile(req);
    console.log(res);
    if (res.code === ResultCode.Success) {
      if (res.userInfo !== null) {
        this.setUserInfo(res.userInfo);
      }
      else {
        console.error(res);
      }
    }
    else {
      console.error(res);
    }
  }
  catch (err) {
    console.error(err);
  }
}
**/
