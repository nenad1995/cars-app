<template>
  <div>
    <car-form :car="car" @onSubmit="addCar" @onReset="resetForm"></car-form>
  </div>
</template>

<script>
import CarForm from '../components/CarForm.vue'
import { cars } from '../services/car-service'

export default {
  components: {
    CarForm
  },
  
  data () {
    return {
      car: this.getDefaults()
    }
  },

  methods: {
    addCar () {
      cars.add(this.car)
        .then((success) => {
          this.redirectToCars()
        }).catch((error) => {
          console.log(error)
        })
    },

    resetForm () {
      this.car = this.getDefaults()
    },

    redirectToCars () {
      this.$router.push({ name: 'cars' })
    },

    getDefaults () {
      return {
        brand: '',
        model: '',
        maxSpeed: 200,
        year: 1990,
        isAutomatic: false,
        numberOfDoors: 4,
        engine: 'diesel'
      }
    }
  }
}
</script>
