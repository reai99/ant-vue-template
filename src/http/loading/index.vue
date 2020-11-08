<template>
  <div class="ant-loading" :class="{ active: callStack !== 0 }">
    <a-spin
      class="ant-loading-spin"
      :spinning="callStack !== 0"
      v-bind="spinProps"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { Spin } from "ant-design-vue";
Vue.use(Spin);

export default {
  name: "LoadingIndex",
  data() {
    return {
      callStack: 0,
      spinProps: {
        size: "large",
        tip: "正在努力加载中...",
      },
    };
  },
  created() {
    this.spinProps = Object.assign({}, this.spinProps, this.$attrs);
  },
  methods: {
    open() {
      this.callStack++;
    },
    close() {
      if (this.callStack > 0) {
        this.callStack--;
      }
    },
    closeAll() {
      this.callStack = 0;
    },
  },
};
</script>

<style scoped>
.ant-loading {
  display: table;
  width: 100%;
  height: 100%;
  margin: auto;
  background: rgba(255, 255, 255, 0.1);
  visibility: hidden;
  opacity: 0;
  transition: opacity ease 0.3s;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}
.ant-loading > .ant-loading-spin {
  display: table-cell;
}
.ant-loading.active {
  visibility: visible;
  opacity: 1;
  z-index: 2147483647;
}
</style>
