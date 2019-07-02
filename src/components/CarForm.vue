<template>
  <form @submit.prevent="onSubmit" @reset="onReset">
    <div>
      <label>Brand</label> 
      <div>
        <input type="text" required="required" minlength="2" v-model="car.brand">
      </div>
    </div>
    <div>
      <label>Model</label> 
      <div>
        <input type="text" required="required" minlength="2" v-model="car.model">
      </div>
    </div>
    <div>
      <label>Year</label> 
      <div>
        <select required="required" v-model="car.year">
          <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
        </select>
      </div>
    </div>
    <div>
      <label>Maximum Speed</label> 
      <div>
        <input type="number" v-model="car.maxSpeed">
      </div>
    </div>
    <div>
      <label>Number of Doors</label> 
      <div >
        <input type="number" required="required" v-model="car.numberOfDoors">
      </div>
    </div>
    <div>
      <label>Engine</label> 
      <div>
        <div>
          <label>
            <input type="radio" required="required" value="electric" v-model="car.engine">
            Electric
          </label>
        </div>
        <div>
          <label>
            <input type="radio" required="required" value="petrol" v-model="car.engine">
            Petrol
          </label>
        </div>
        <div>
          <label>
            <input type="radio" required="required" value="hybrid" v-model="car.engine">
            Hybrid
          </label>
        </div>
        <div>
          <label>
            <input type="radio" required="required" value="diesel" v-model="car.engine">
            Diesel
          </label>
        </div>
      </div>
    </div>
    <div>
      <div></div> 
      <div>
        <div>
          <label>
            <input type="checkbox" value="true" v-model="car.isAutomatic">
            Automatic
          </label>
        </div>
      </div>
    </div> 
    <div>
      <div>
        <button type="reset">Reset</button>
             <button type="button" @click="preview">Preview</button>
        <button  type="submit">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    car: Object
  },
  
  data () {
    return {
      years: Array(30).fill(1990).map((n, i) => n + i)
    }
  },

  methods: {
    onSubmit () {
      this.$emit('onSubmit')
    },

    onReset () {
      this.$emit('onReset')
    },

    preview () {
      alert(`
        Brand: ${this.car.brand}
        Model: ${this.car.model}
        Year: ${this.car.year}
        Maximum Speed: ${this.car.maxSpeed}
        Number of Doors: ${this.car.numberOfDoors}
        Engine: ${this.car.model}
        ${this.car.isAutomatic ? 'Automatic' : 'Manual'}
      `)
    }
  }
}
</script>