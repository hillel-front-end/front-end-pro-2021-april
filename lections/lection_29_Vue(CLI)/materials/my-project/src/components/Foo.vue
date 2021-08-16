<template>
  <div class="foo-component">
    <button @click="onShow">show</button>
    <div class="greeting" v-show="visibility">{{ greeting }}</div>
  </div>
</template>

<script>
import ModalMixin from "../mixins/modal.mixin";

export default {
  data: () => ({
    greeting: "Hello world From Foo component",
    products: [],
  }),
  mixins: [ModalMixin],
  beforeCreate() {
    // debugger;
    // console.log("Before Create", this);
  },

  created() {
    // debugger;
    // console.log("Created", this);
  },
  mounted() {
    // debugger;
    // console.log("mounted", this);
    fetch("http://localhost:3003/products")
      .then((config) => config.json())
      .then((resp) => console.log(resp, "resp"));
  },
};
</script>

// hooks
<style lang="scss">
.greeting {
  color: blue;
}
</style>
