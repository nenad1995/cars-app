<template>
  <nav> 
    <router-link :to="{ name: 'home' }">
      Cars App
    </router-link>
    <div>
      <ul>
        <li>
          <router-link :to="{ name: 'cars' }">
            Cars
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'add' }">Add Car</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>