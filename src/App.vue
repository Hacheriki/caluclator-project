<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <CalculatorWidget/>
</template>

<script>
import {CalculatorWidget} from "@/widgets";

export default {
  name: 'App',
  components: {
    CalculatorWidget,
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  float: left;
  box-sizing: border-box;
}

html {
  height: 100vh;
  width: 100vw;
}

body {
  height: 100%;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #202020;
  box-sizing: border-box;
  padding: 10px;
}
</style>
