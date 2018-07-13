import Vue from 'vue'
import Router from 'vue-router'


const HelloWorld = (r) => require.ensure([], () => r(require('@/components/HelloWorld')), 'HelloWorld');
const mainContent = (r) => require.ensure([], () => r(require('@/pages/content/content')), 'mainContent');
const setManage = (r) => require.ensure([], () => r(require('@/pages/setting/setManage')), 'setManage');
const changePassword = (r) => require.ensure([], () => r(require('@/pages/setting/changePassword')), 'changePassword');
const addPersonalAccount = (r) => require.ensure([], () => r(require('@/pages/setting/addPersonalAccount')), 'addPersonalAccount');

const login = (r) => require.ensure([], () => r(require('@/pages/login/login')), 'login');


Vue.use(Router);

const globalRouter = new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainContent',
      component: mainContent,
      redirect: '/test',
      children: [
        {
          path: 'test',
          name: '测试页面',
          component: HelloWorld,
        },
        {
          path: 'setManage',
          name: '设置',
          component: setManage,
        },
        {
          path: 'changePassword',
          name: '重置密码',
          component: changePassword,
        },
        {
          path: 'addPersonalAccount',
          name: '创建业务员账号',
          component: addPersonalAccount,
        },
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: login
    },
    {
      path: '*',
      name: '404_not_find',
      redirect: '/login',
    }
  ]
})

globalRouter.beforeEach((to, from, next) => {
	// 全局路由守卫
  /*
	to: Route: 即将要进入的目标 路由对象
  from: Route: 当前导航正要离开的路由
  next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  */
	next();
})

export default globalRouter;
