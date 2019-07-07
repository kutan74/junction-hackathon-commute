<template>
  <div id="app">
    <div class="navBar"> 
      <h1 class="navBarTitle"> Commute </h1>
    </div>
    
    <nav>
        <router-link to='/'></router-link>
        <router-link to='/carpool'></router-link>       
    </nav>
    
     <transition
        name="fade"
        mode="out-in"
      >
        <router-view/>
      </transition>  
    
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'
import Carpool from './components/Carpool.vue'
import './style.css'

export default {
  name: 'app',
  components: {
    Dashboard,    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;  
  
}
</style>
