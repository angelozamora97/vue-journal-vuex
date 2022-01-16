<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3 ">Julio</span>
      <span class="mx-2 fs-4 fw-light">2021, Jueves</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-all"></i>
      </button>

      <button class="btn btn-primary">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea 
      placeholder="¿Que sucedio hoy?"
    ></textarea>
  </div>

  <Fab 
    icon='fa-save'
  />

  <img 
    src="https://cdn.pixabay.com/photo/2016/07/13/15/43/moon-1514773_960_720.jpg" 
    alt="entry-picture"
    class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    Fab: defineAsyncComponent(()=> import('../components/Fab.vue'))
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
textarea{
  font-size: 20px;
  border: none;
  height: 100%;
}
textarea:focus{
  outline: none;
}

img{
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 50px;
  box-shadow: 0px 5px 10px rgba(73, 73, 73, 0.425);
}
</style>