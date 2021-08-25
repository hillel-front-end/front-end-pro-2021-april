<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <nav>
      <router-link to="/home">Main page</router-link> |
      <router-link to="/home/candidates">Candidates</router-link> |
      <router-link to="/home/contacts">Candidates</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>
