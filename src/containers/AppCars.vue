<template>
  <div>
    <car-list :cars="cars"></car-list>
  </div>
</template>

<script>
import CarList from '../components/CarList.vue'
import { cars } from '../services/car-service'

export default {
  components: {
    CarList
  },

  data () {
    return {
      cars: []
    }
  },

  beforeRouteEnter (to, from, next) {
    cars.getAll()
      .then((response) => {
        next((vm) => {
          vm.cars = response.data
        })
      }).catch((error) => {
        console.log(error)
      })
  }
}
</script>