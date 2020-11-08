import Vue from "vue";
import loadingView from "./index.vue";
export class Loading {
  constructor(option = {}) {
    let $root = this && this.$root ? this.$root : window;
    let div = document.createElement("div");
    document.body.appendChild(div);
    let loading = new Vue({
      name: "AntLoading",
      render: createElement => {
        return createElement(loadingView, { props: option });
      }
    }).$mount(div);
    const $loading = loading.$children[0];
    if ($root && Array.isArray($root.$children)) {
      $root.$children.push($loading);
      $loading.$parent = $root;
    }
    return $loading;
  }
}
