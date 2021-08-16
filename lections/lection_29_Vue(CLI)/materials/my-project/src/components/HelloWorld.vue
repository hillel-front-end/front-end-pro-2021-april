<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Modal v-show="visibility" @close="onShow" />
    <button @click="onShow">show modal in Hello</button>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import ModalMixin from "../mixins/modal.mixin";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mixins: [ModalMixin],
  components: {
    Modal,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  border: 1px solid red;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
