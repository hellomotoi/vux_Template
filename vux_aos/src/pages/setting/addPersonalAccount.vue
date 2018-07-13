<template>
  <div class="addPersonalAccount">
  	<group>
	  	<x-input title="真实姓名" type="text" 
		:required="true"
		placeholder="请输入姓名"
		v-model="userName">
		</x-input>
		<x-input title="账号名" type="text" 
		:required="true"
		placeholder="请输入账号名"
		v-model="accountName">
		</x-input>
  	</group>
  	<div style="padding:15px;">
      <x-button @click.native="confirmAdd" :disabled="disabledBtn" :show-loading="disabledBtn" type="primary">提交</x-button>
    </div>
  </div>
</template>

<script>
import { XInput, Group, XButton } from 'vux'
export default {
  data () {
    return {
      userName: '',
      accountName: '',
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
	confirmAdd() {

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