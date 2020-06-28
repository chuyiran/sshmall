<template>
  <div id="app">
      <maintabbar></maintabbar>
      <router-view></router-view>
  </div>
</template>

<script>
import maintabbar from 'components/content/mainTabbar/MainTabBar'
export default {
  name:'app',
  components:{maintabbar}
}
</script>

<style>

</style>