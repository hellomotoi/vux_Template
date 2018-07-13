<template>
  <div class="login" id="login">
  	<img src="../../assets/logo.png" class="loginImg">
  	<div class="signBox">
  		<div class="userName" :class="{'activeName': activeName}">
  			<input type="text" id="userNameInput"
  				maxlength="15"
  				v-model="userName"
  			 @focus="focusName" 
  			 @blur="blurName">
  			<label for="userNameInput">{{nameLabelText}}</label>
  		</div>
  		<div class="passWord" :class="{'activeWord': activeWord}">
  			<input type="password" id="passWordInput"
  				maxlength="15"
  				v-model="passWord"
  			 @focus="focusWord" 
  			 @blur="blurWord">
  			<label for="passWordInput">{{wordLabelText}}</label>
  		</div>
  		<div id="signIn" @click="handleSignIn">登录</div>
  	</div>
  </div>
</template>

<script>
// import { Alert } from 'vux'
export default {
  data () {
    return {
    	nameLabelText: '用户名',
      activeName: false,
      wordLabelText: '密码',
      activeWord: false,
      userName: '',
      passWord: ''
    }
  },
  created() {

  },
  mounted() {

  },
  computed: {},
  props: [],
  components: {
		// Alert
  },
  methods: {
		focusName() {
			this.nameLabelText = 'UserName';
			this.activeName = true;
		},
		blurName() {
			if (!this.userName) {
				this.nameLabelText = '用户名';
				this.activeName = false;
			}
		},
		focusWord() {
			this.wordLabelText = 'PassWord';
			this.activeWord = true;
		},
		blurWord() {
			if (!this.passWord) {
				this.wordLabelText = '密码';
				this.activeWord = false;
			}
		},
		handleSignIn() {
			console.log('用户名', this.userName);
			console.log('密码', this.passWord);
			if (this.userName == '' || this.passWord == '') {
				this.$vux.alert.show({
				  title: '提示',
				  content: '输入信息不能为空',
				  onShow () {
				    
				  },
				  onHide () {
				    
				  }
				})
			}else {
				this.$router.push('/')
			}
		}
  },
  watch: {

  },
  filters: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#login {
	width: 100%;
	height: 100%;
	font-size: 1.2rem;
	.loginImg {
		display: block;
		width: 9rem;
    margin: 3rem auto;
	}
	.signBox {
		width: 80%;
		margin: 0 auto;
		.activeName {
			border-bottom: 1px solid #04BB7F;
			input{
				background-color: #fff;
			}
			label {
				color: #04BB7F;
				top: -2.4rem;
				left: 0;
				font-size: 0.96rem;
				font-weight: bold;
			}
		}
		.activeWord {
			border-bottom: 1px solid #04BB7F;
			input{
				background-color: #fff;
			}
			label {
				color: #04BB7F;
				top: -2.4rem;
				left: 0;
				font-size: 0.96rem;
				font-weight: bold;
			}
		}
		> div {
			height: 3rem;
			line-height: 3rem;
			position: relative;
			margin-bottom: 2.1rem;
			border-left: 4px solid #04BB7F;
			border-bottom: 1px solid #fff;
		}
		input {
			height: 3rem;
			outline: none;
			border: none;
			width: 100%;
			box-sizing: border-box;
			border-radius: 0 6px 6px 0;
			padding: 0 0.6rem;
			background-color: #eee;
			color: #333;

		}
		label {
			transition: all .3s;
			height: 3rem;
			position: absolute;
			top: 0;
			left: 0.9rem;
			color: #666;
		}
		#signIn {
			height: 3.6rem;
			line-height: 3.6rem;
			color: #fff;
			border: none;
			background-color: #04BB7F;
			text-align: center;
			border-radius: 6px;
			font-size: 1.2rem;
			letter-spacing: 10px;
			margin-top: 3rem;
		}
	}
}
</style>