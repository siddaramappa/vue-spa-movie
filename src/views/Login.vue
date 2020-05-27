<template>
<div class="register container outer-wrapper">
    <!-- <h4 class="text-center ">Login Using Firebase</h4> -->
    <div class="container">
        <div class="row ">
            <div class="login-sec">
                <h2 class="text-center">Login Now</h2>
                <form class="login-form" @submit.prevent="onSubmit">
                  
                    <div class="form-group">
                        <label for="exampleInputEmail1" class="text-uppercase">Username</label>
                        <input type="email" class="form-control" placeholder="">

                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" class="text-uppercase">Password</label>
                        <input type="password" class="form-control" placeholder="">
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
    name: "Login",
    data(){
      return{
        email:'',
        password:'',
      }
    },
    methods:{
      onSubmit(){
        console.log("submit")
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
