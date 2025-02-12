<template>
  <div class="about">
    <h1>This is an about pageeeee</h1>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },

  mounted() {
    this.$axios.get('/api/test').then(res => {
      console.log(res)
    })
  },
}

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
