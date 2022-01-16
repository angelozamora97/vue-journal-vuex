<template>
  <div class="entry-container mb-3 pointer p-2"
    @click="$router.push({name: 'entry', params: {id: 10}})">
    <div class="entry-title d-flex">
      <span>15</span>
      <span>Julio</span>
      <span>2021, Jueves</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta labore harum exercitationem cupiditate, assumenda aperiam sunt expedita nisi rerum deserunt error repellat neque pariatur iste nam impedit, iure dolorem, fugit aspernatur. Fuga alias, ut minima repudiandae totam optio sed, cum illo ipsum magnam aliquam ea quo numquam laudantium excepturi quibusdam rem ullam aliquid explicabo sapiente quos unde.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
}

.entry-container:hover{
  background-color: #2c3e508e;
  transition: 0.2s all ease-in;
}
.entry-description{
  font-size: 12px;
}
</style>