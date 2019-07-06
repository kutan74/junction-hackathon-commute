<template>

  <div> 
    <h1 class="h1"> Carpooling with your Co-Workers </h1>

    <div class="container">
    <div class="card">    
      <ul class= "column">
        <li class="cardTitle"> Car Pool </li>   
        <li class="cardSubTitle"> 12 drivers almost ready </li>   
        <li class="cardSubTitle"> 40 seats avalabile </li>   
      </ul>
    </div> 
    <div class="card">    
      <div class="cardContent"> 
        <h3 class="cardTitle"> Uber </h3>                
      </div>
    </div>  
    <div class="card">    
      <div class="cardContent"> 
        <h3 class="cardTitle"> Lyft </h3>                
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
  }
}
</script>