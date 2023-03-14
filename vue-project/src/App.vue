<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <!-- 클릭하면 경로로 이동해 index.js의 path로 가서 computed.vue가 실행 -->
    <router-link to="/computedExam">computed</router-link> |
    <router-link to="/DataBinding">DataBinding</router-link> |
    <router-link to="/EventClick">EventClick</router-link> |
    <!-- index.js의 routes path이름과 같아야한다. -->
    <router-link to="/Jinju">Jinju</router-link> |
    <router-link to="/GimHae">Gimhae</router-link> |
    <router-link to="/DustSeoul">DustSeoul</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
