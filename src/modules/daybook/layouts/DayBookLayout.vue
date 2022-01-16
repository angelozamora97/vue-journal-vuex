<template>
  <NavBarDayBook/>
  <div class="d-flex">
    <div class="col-4">
      <EntryList/>
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBarDayBook from '@/modules/daybook/components/NavBar'
import {defineAsyncComponent} from 'vue'

export default {
  components: {
    NavBarDayBook,
    EntryList: defineAsyncComponent( () => import('@/modules/daybook/components/EntryList')),
  }
}
</script>