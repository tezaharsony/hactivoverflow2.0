<template>
  <div id="app">
    <router-view></router-view>
    <!-- <postThread></postThread>
    <Thread></Thread> -->
  </div>
</template>

<script>
import Home from '@/components/Home'
// import Thread from '@/components/Thread'
// import postThread from '@/components/postThread'
import Login from '@/components/Login'
export default {
  name: 'app',
  components: {
    Home,
    // Thread,
    // postThread,
    Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
