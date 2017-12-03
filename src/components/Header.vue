<template>
  <header class="navbar">
      <router-link to="/">{{title}}</router-link>
      <router-link to="/">{{menuItems.home.label}}</router-link>
      <router-link to="settings">{{menuItems.settings.label}}</router-link>
  </header>
</template>

<script>
export default{
  name: 'HeaderDiv',
  data () {
    return{
      title: "Weather Vane",
      menuItems: {
          home: {
            label: "Home",
            path: ""
          },
          settings: {
            label:"Settings",
            path: "settings"
          },
      }
    }
  },
  methods: {
    routeTo : function(path){
      alert('path: ' + path);
    }
  }
}
</script>

<style scoped>
  .navbar{
    position:fixed;
    top:0px;
    left:0px;
    width:100%;
    height:50px;
    border-bottom:7px solid gray;
    background-color:#fff;
  }
</style>
