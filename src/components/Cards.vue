<template>
    <div>
      <div class="container Cards">
         <div class="Cards__Content">
<font-awesome-icon :icon="['fas', 'coffee']"/>
<p>Have a cup of coffee: <font-awesome-icon icon="coffee" /></p>
 <h1>Using Font Awesome "Brand" icons in Vue.js</h1>
    <p>Have a cup of coffee: <font-awesome-icon icon="coffee" /></p>
    <p>Have a module of JavaScript: <font-awesome-icon icon="js" /></p>
    <p>Have a module of Vue.js: <font-awesome-icon icon="vuejs" /></p>
    <font-awesome-icon icon="desktop"/>
         </div>
      </div>

    </div>
</template>

<script>
export default {
    name:"Cards"
}
</script>


<style scoped>
*{
   margin: 5em
}

</style>