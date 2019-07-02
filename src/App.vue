<template>
  <div id="app">
   <div>
     <div>
      <router-view />
     </div>
   </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>
