<template>
  <div id="app">
    <router-view :key="$route.path+(new Date()).getTime()" />
  </div>
</template>
<style>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
</style>
