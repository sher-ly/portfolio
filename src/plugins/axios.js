import axios from "axios";

let config = {
    // withCredentials: true,
    headers: {
        "Content-type": "application/json",
    },
}

if (process.env.NODE_ENV === 'development') {
    config.baseURL = "http://localhost:8080";
}
const _axios = axios.create(config);
export default _axios;
//# sourceMappingURL=axios.js.map
