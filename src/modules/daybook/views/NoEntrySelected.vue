import { defineAsyncComponent } from 'vue';
<template>
  <div class="d-flex justify-content-center">
    <h1>No hay nada seleccionado</h1>
  </div>
  <Fab/>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    Fab: defineAsyncComponent( ()=> import('../components/Fab') ) 
  }
}
</script>

<style scoped>
div{
  height:100%;
}
</style>