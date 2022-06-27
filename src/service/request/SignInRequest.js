export default class SignInRequest {
  constructor() {
    this.email = ''; // email
    this.password = ''; // password
  }
}
/**
import SignInRequest from "@/service/request/SignInRequest";
import ResultCode from "@/service/ResultCode";

async signIn() {
  let req = new SignInRequest();
  req.email = this.email;
  req.password = this.password;
  try {
    let res = await this.$api.signIn(req);
    console.log(res);
    if (res.code === ResultCode.Success) {
      if (res.userInfo !== null && res.accessToken !== null) {
        this.setUserInfo(res.userInfo);
        this.setAccessToken(res.accessToken);
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
