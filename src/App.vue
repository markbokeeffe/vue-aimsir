<template>
  <div id="app">
    <HeaderDiv></HeaderDiv>
    <router-view/>
  </div>
</template>

<script>
import WeatherForecast from './components/WeatherForecast'
import HeaderDiv from './components/Header'

export default {
  name: 'app',
  components: {
    WeatherForecast,
    HeaderDiv
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
