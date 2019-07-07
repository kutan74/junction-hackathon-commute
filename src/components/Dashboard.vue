<template>

  <div> 
    <h1 class="h1"> Carpooling with your Co-Workers </h1>

    <div class="container">
    <div class="card" v-on:click="greet">          
      <ul class= "column">
        <li class="cardTitle"> Carpool </li>   
        <li class="cardSubTitle"> Travel with your co-workers </li>   
        <li class="cardSubTitle"> 40 seats avalabile </li>   
      </ul>
    </div> 
    <div class="card">    
      <div class="cardContent"> 
        <ul class= "column">
        <li class="cardTitle"> Uber </li>   
        <li class="cardSubTitle"> Want to share a Uber? </li>   
        <li class="cardSubTitle"> Find out who is nearby </li>   
      </ul>
      </div>
    </div>  
    <div class="card">    
      <div class="cardContent"> 
        <ul class= "column">
        <li class="cardTitle"> Lyft </li>   
        <li class="cardSubTitle"> 5$ off on your first Lyft ride </li>   
        <li class="cardSubTitle">  </li>   
      </ul>
      </div>
    </div>        
  </div>  
  </div>

  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  methods: {
    greet: function (event) {
      this.$router.push('carpool')
    }
  }
}
</script>