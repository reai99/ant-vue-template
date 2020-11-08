<template>
  <div>
    <div>Hello Reai !</div>
    <a-button type="primary" @click="ceshi">请求</a-button>
  </div>
</template>

<script>
export default {
  data (){
    return {
    }
  },
  methods: {
    async ceshi(){
      // const res = await this.$api.ceshi()
      // console.log(res)
      // this.$Dialog({
      //   title: 'ceshi',
      // })
      // this.$Drawer({
      //   title:'drawer',
      //   width: 1000,
      //   // maskClosable: true
      // })
    }
  },
}

</script>
<style>
</style>
