<template>
  <div class="briz">
    Component Briz version = {{ version }}
    <input type="text" v-model="localVersion" />
    <button @click="onChange">change version</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   localVersion: null,
    };
  },
  computed: {
    version() {
      return this.$store.state.version;
    },
  },
  methods: {
    onChange() {
      this.$store.commit("changeVersion", this.localVersion);
    },
  },
  created() {
    this.localVersion = this.version;
  },
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
