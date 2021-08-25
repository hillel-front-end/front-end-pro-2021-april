<template>
  <div id="app">
    <Briz />
    <Friz />
  </div>
</template>

<script>
import Friz from "./components/Friz.vue";
import Briz from "./components/Briz.vue";

export default {
  name: "App",
  data: () => ({
    name: "Valera",
  }),
  components: {
    Friz,
    Briz,
  },
};
</script>
