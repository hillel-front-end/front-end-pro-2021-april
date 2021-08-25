<template>
  <div class="auth">
    <h2>Auth</h2>
    <button @click="goTo('/')">go to /</button>
    <button @click="goTo('/about')">go to about</button>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      this.$router.push(path);
    },
  },
  mounted() {
    // console.log(this.$router, "router");
    // console.log(this.$route, "route");\
    // setTimeout(() => {
    //   if (true) {
    //     this.$router.push("/"); // program routing go to path ==> /
    //   }
    // }, 2000);
  },
};
</script>
