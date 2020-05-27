<template>
  <div class="hello container mr-10">
      <div class="row">
        <div class="col-12 text-center">
          <h1> Vue Authentications Using Firebase</h1>
          <router-link  tag="button" to="/register" type="button" class="btn btn-primary mr-2">Register</router-link>
          <router-link tag="button" to="/login" type="button" class="btn btn-primary">Login</router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
