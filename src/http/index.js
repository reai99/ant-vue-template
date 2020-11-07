import axios from 'axios'
import { Loading } from './loading'
import { message } from "ant-design-vue";

const isDev = process.env.NODE_ENV === "development";

// 设置请求头
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

// 请求配置项
const config = {
  withCredentials: true, // 请求带上cookies
  baseURL: isDev ? '/agent' :process.env.VUE_APP_ApiUrl,  // 设置默认地址
  timeout: 10 * 1000, // 请求异常时间
}

const _axios = axios.create(config);
// 请求加载
_axios.loading = new Loading();
_axios.interceptors.request.use(
  config => {
    // 加入鉴权信息 ....
    _axios.loading.open();
    return config
  },
  error => {
    message.error("请求错误!");
    // _axios.loading.close()
    return Promise.reject(error);
  }
)

_axios.interceptors.response.use(
  config => {
    if (_axios.loading) {
      _axios.loading.close();
    }
    return config.data
  },
  error => {
    message.error("服务器响应错误!");
    console.log(error)
    // _axios.loading.close()
    return Promise.reject(error);
  }
)

export default _axios