import $axios from './axiosConfig.js';

const methodType = 'post';

/* ========== 登录 ========== */
// 注册
// 登录
// export const signIn = (data) => $axios(methodType, '/if/user/mLoginByPwdOrSmsCode.htm', data);
// 退出登录
// export const signOut = (data) => $axios(methodType, '', data);

/* ========== 测试API ========== */
export const testApi = (data) => $axios(methodType, '/if/usr/userInfo/personalStatus.htm', data);