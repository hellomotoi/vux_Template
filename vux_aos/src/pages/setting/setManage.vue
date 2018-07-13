<template>
  <div class="setManage">
  	<group>
      <cell title="修改登录密码" link="/changePassword">
      </cell>
      <cell title="创建业务员账号" link="/addPersonalAccount">
      </cell>
      <cell title="查看门店业务员" link="/checkPersonalAccount">
      </cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell} from 'vux'
export default {
  data () {
    return {
      
    }
  },
  created() {

  },
  mounted() {

  },
  computed: {},
  props: [],
  components: {
	Group,
    Cell
  },
  methods: {

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