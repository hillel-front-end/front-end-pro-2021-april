<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <app-hello-world msg="Welcome to Your Vue.js App" />
    <app-foo></app-foo>
    <button @click="toogleModal">show modal</button>

    <app-modal v-if="isVisibleModal" @close="toogleModal">
      <template v-slot:header>
        <div>Header from App Component</div>
      </template>
      <template v-slot:footer>
        <button @click="toogleModal">save</button>
        <button @click="toogleModal">cancel</button>
      </template>
    </app-modal>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Foo from "./components/Foo.vue";
import Modal from "./components/Modal.vue";

export default {
  data() {
    return {
      isVisibleModal: false,
    };
  },
  methods: {
    toogleModal() {
      this.isVisibleModal = !this.isVisibleModal;
    },
  },
  components: {
    AppHelloWorld: HelloWorld,
    AppFoo: Foo,
    AppModal: Modal,
  },
};

// export default
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
