<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Auth</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/home">Home</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
#nav {
  text-align: center;
}
.content {
  width: 70%;
  margin: 20px auto;
  min-height: 50vh;
  border: 1px solid red;
}
</style>
