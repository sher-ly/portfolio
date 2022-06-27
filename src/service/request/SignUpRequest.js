export default class SignUpRequest {
  constructor() {
    this.email = ''; // email
    this.password = ''; // password
    this.nickname = ''; // nickname
  }
}
/**
import SignUpRequest from "@/service/request/SignUpRequest";
import ResultCode from "@/service/ResultCode";

async signUp() {
  let req = new SignUpRequest();
  req.email = this.email;
  req.password = this.password;
  req.nickname = this.nickname;
  try {
    let res = await this.$api.signUp(req);
    console.log(res);
    if (res.code === ResultCode.Success) {
      if (res.accessToken !== null) {
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
