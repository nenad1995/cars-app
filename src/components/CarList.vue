<template>
  <div>
    <div v-for="car in cars" :key="car.id">
      <div>
        <h3>{{ car.brand }}</h3>
        <h3>Model: {{ car.model }}</h3>
      </div>
      <ul>
        <li>Year: {{ car.year }}</li>
        <li>Number of doors: {{ car.numberOfDoors }}</li>
        <li>Maximum speed: {{ car.maxSpeed }}</li>
        <li>{{ car.isAutomatic ? 'Automatic' : 'Manual' }}</li>
        <li>Engine: {{ car.engine }}</li>
      </ul>
      <div>
        <router-link :to="{ name: 'edit', params: { id: car.id } }">Edit</router-link>
        <button @click="onDelete(car)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cars: Array
  },

  methods: {
    onDelete (car) {
      this.$emit('onDelete', car)
    }
  }
}
</script>