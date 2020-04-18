<template>
  <form @submit="SearchProducts">
    <input type="text" placeholder="search Products" v-model="item" />
    <button>Search</button>
  </form>
</template>
<script>
export default {
    name: "",
    props:["SearchProducts"]
}
</script>

<style  scoped>

</style>

