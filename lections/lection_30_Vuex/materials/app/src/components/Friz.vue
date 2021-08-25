<template>
  <div class="friz">
    Component Friz version = {{ getVersion() }}
    {{ JSON.stringify(products, 2) }}
    <button @click="getProducts">async get products</button>
  </div>
</template>

<script>
export default {
  methods: {
    getVersion() {
      //   console.log(this.$store, "store");
      return this.$store.state.version;
    },
    getProducts() {
      this.$store.dispatch("getProducts");
    },
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
