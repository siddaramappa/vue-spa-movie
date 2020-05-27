<template>
  <div class="register container outer-wrapper">
    <!-- <h4 class="text-center ">Regerist Using Firebase</h4> -->
    <div class="container">
        <div class="row ">
            <div class="login-sec">
                <h2 class="text-center">Register Now</h2>
                <form class="login-form" @submit.prevent="register">
                     <div class="form-group">
                        <label for="exampleInputEmail1" class="text-uppercase">Username</label>
                        <input type="text" class="form-control" placeholder="Username" v-model="name">

                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1" class="text-uppercase">Email</label>
                        <input type="email" class="form-control" placeholder="Email" v-model="email">

                    </div>
                   
                    <div class="form-group">
                        <label for="exampleInputPassword1" class="text-uppercase">Password</label>
                        <input type="password" class="form-control" placeholder="Passowrd" v-model="password">
                    </div>

                    <div class="text-center ">
                        
                       <button type="submit" class="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name:"Register",
  data(){
      return{
          email:'',
          password:'',
          name:''
      }
  },
  methods:{
      register(){
          const formData = {
              email: this.email,
              password : this.password,
              name: this.name
          }
        this.$store.dispatch('signup',formData);
      }
  }
}
</script>
<style lang="css">
.outer-wrapper {
    margin-top: 20px
}

.login-sec {
    padding: 20px;
    background: #E1F5FE;
    width: 50%;
    margin: 0 auto;
}
</style>