<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style>
@import '~assets/css/normalize.css';
#tabbar {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right:  0;
  background-color: #f6f6f6;
}
.tabbaritem {
  height: 49px;
  text-align: center;
  flex: 1;
  padding-top: 5px;
}
.tabbaritem img {
  width: 20px;
  height: 20px;
}
</style>