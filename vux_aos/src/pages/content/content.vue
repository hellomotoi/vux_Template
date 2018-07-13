<template>
  <div class="mainCon" id="mainCon">
  	<drawer
    width="200px;"
    :show.sync="drawerVisibility"
    :show-mode="drawerShowMode"
    :drawer-style="{'background-color':'#35495e', width: '200px', height: '100%', 'overflow-y': 'auto'}">

      <!-- drawer content -->
      <div slot="drawer">
      	<div class="userInfo">
      		<img src="../../assets/logo.png" class="userImg">
      		<p>用户名字</p>
      		<p>用户积分等...</p>
      	</div>
        <group title="Main Menu" style="margin-top:20px;">
          <cell title="测试" link="/test" value="测试" @click.native="drawerVisibility = false">
          </cell>
          <cell link="/test" @click.native="drawerVisibility = false">
          	<span slot="title" style="color:#04BB7F;"><span style="vertical-align:middle;">我的工单 </span> <badge text="1"></badge></span>
          </cell>
          <cell title="线上借款申请" link="/test" @click.native="drawerVisibility = false">
          	<span class="badge">6</span>
          </cell>
          <cell title="录标" link="/test" @click.native="drawerVisibility = false">
          </cell>
          <cell title="门店初审" link="/test" @click.native="drawerVisibility = false">
          </cell>
          <cell title="风控审核" link="/test" @click.native="drawerVisibility = false">
          </cell>
          <cell title="财务审核" link="/test" @click.native="drawerVisibility = false">
          </cell>
          <cell title="待上标" link="/test" @click.native="drawerVisibility = false">
          </cell>
          <cell title="待方框" link="/test" @click.native="drawerVisibility = false">
          </cell>
        </group>
        <group style="margin-top:20px;color: #04BB7F;">
        	<cell title="设置" link="/setManage" value="" @click.native="drawerVisibility = false">
        		<img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/logo.png">
          </cell>
        </group>
        <group style="margin:20px 0;color:#ff4433;">
        	<cell title="退出登录" :is-link="true" value="" @click.native="signOut">
          </cell>
        </group>
      </div>

      <!-- main content -->
      <view-box>

        <x-header
          slot="header"
          style="width:100%;position:absolute;left:0;top:0;z-index:100;background-color:#35495e;"
          :title="navTitleText"
          >
          <span slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
            <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
          </span>
        </x-header>

        <!-- remember to import BusPlugin in main.js if you use components: x-img and sticky -->
        <div class="routerContainer">
          <router-view class="router-view"></router-view>
        </div>
        

      </view-box>
    </drawer>
  </div>
</template>

<script>
import { Group, Cell, Badge, Drawer, ViewBox, XHeader} from 'vux'
export default {
  data () {
    return {
      showMenu: false,
      menus: {
        'language.noop': '<span class="menu-title">Language</span>',
        'zh-CN': '中文',
        'en': 'English'
      },
      drawerVisibility: false,
      drawerShowMode: 'push',
      navTitleText: ''
    }
  },
  created() {
  	console.log(this.$route);
  	this.navTitleText = this.$route.name;
  },
  mounted() {

  },
  computed: {},
  props: [],
  components: {
		Group,
    Cell,
    Badge,
    Drawer,
    ViewBox,
    XHeader
  },
  methods: {
		signOut() {
			// 相关退出登录操作

			this.drawerVisibility = false;
			this.$router.push('/login');
		}
  },
  watch: {
		$route(now, old) {
			this.navTitleText = now.name;
		}
  },
  filters: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
#mainCon {
	height: 100%;
	.userInfo {
    font-size: 1.2rem;
    text-align: center;
    margin-top: 1rem;
    color: #fff;
		> img {
			width: 6rem;
			height: 6rem;
			border-radius: 50%;
			overflow: hidden;
			border: 3px solid #04BB7F;
		}
	}
	.badge {
		color: #ff4433;
	}
	.routerContainer {
		padding: 46px 10px 10px;
	}
}
</style>