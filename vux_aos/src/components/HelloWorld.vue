<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="test">
      test
    </div>
  </div>
</template>

<script>
import { testApi } from '@/service/serviceAPI'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    testApi({}).then(res => {
      console.log('获取数据', res);
    })

    this.msg = 'HelloWorld.vue'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">
.hello {
  text-align: center;
  font-size: 1.2rem;
  .test {
    color: red;
    height: 1000px;
  }
}
</style>
