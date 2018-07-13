<template>
  <div class="changePassword">
  	<group>
			<x-input title="原密码" type="password" 
			:required="true"
			placeholder="请输入原始密码"
			v-model="oldPW">
			</x-input>
			<x-input title="新密码" type="password" 
			:required="true"
			placeholder="请输入新密码"
			v-model="newPW">
			</x-input>
			<x-input title="确认新密码" type="password" 
			:required="true"
			placeholder="请再次输入新密码"
			v-model="copyPW">
			</x-input>
  	</group>
  	<div style="padding:15px;">
      <x-button @click.native="confirmChange" :disabled="disabledBtn" :show-loading="disabledBtn" type="primary">提交</x-button>
    </div>
  </div>
</template>

<script>
import { XInput, Group, XButton } from 'vux'
export default {
  data () {
    return {
      oldPW: '',
      newPW: '',
      copyPW: '',
      disabledBtn: false
    }
  },
  created() {

  },
  mounted() {

  },
  computed: {},
  props: [],
  components: {
		XInput,
    XButton,
    Group,
  },
  methods: {
	confirmChange() {
		console.log(this.oldPW,this.newPW,this.copyPW);
		if (this.oldPW == '' || this.newPW == '' || this.copyPW == '') {
			this.$vux.toast.text('输入不能为空', 'middle');
			return;
		}else if (this.newPW !== this.copyPW) {
			this.$vux.toast.text('确认密码与新密码不一致', 'middle');
			return;
		}else {
			// 数据请求
			this.disabledBtn = true;
			setTimeout(() => {
				this.disabledBtn = false;
			},3000)
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
<style lang="less" rel="stylesheet/less" type="text/less">

</style>