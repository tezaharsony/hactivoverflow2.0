<template lang="html">
  <div class="container">
    <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <div class="panel panel-info" >
                <div style="padding-top:30px" class="panel-body" >
                    <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
                    <form @submit.prevent='Login(dataLogin)' id="loginform" class="form-horizontal" role="form">

                        <div style="margin-bottom: 25px" class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <input v-model="dataLogin.name" id="login-username" type="text" class="form-control" name="username" value="" placeholder="username">
                                </div>

                        <div style="margin-bottom: 25px" class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                    <input v-model="dataLogin.password" id="login-password" type="password" class="form-control" name="password" placeholder="password">
                                </div>
                            <div style="margin-top:10px" class="form-group">
                                <!-- Button -->

                                <div class="col-sm-12 controls">
                                  <!-- <a id="btn-login" href="#" class="btn btn-success">Login  </a> -->
                                  <button type="Submit" name="button" class="btn btn-success">Login</button>
                                </div>
                            </div>


                            <div class="form-group">
                                <div class="col-md-12 control">
                                    <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%" >
                                        Don't have an account!
                                    <a href="#" onClick="$('#loginbox').hide(); $('#signupbox').show()">
                                        Sign Up Here
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </form>class=""



                    </div>
                </div>
    </div>
    <div id="signupbox" style="display:none; margin-top:50px" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <div class="panel-title">Sign Up</div>
                        <div style="float:right; font-size: 85%; position: relative; top:-10px"><a id="signinlink" href="#" onclick="$('#signupbox').hide(); $('#loginbox').show()">Sign In</a></div>
                    </div>
                    <div class="panel-body" >

                            <div id="signupalert" style="display:none" class="alert alert-danger">
                                <p>Error:</p>
                                <span></span>
                            </div>


                          <form @submit.prevent='register ()' id="loginform" action="index.html" method="post">
                            <div class="form-group">
                                <label for="lastname" class="col-md-3 control-label">Name</label>
                                <div class="col-md-9">
                                    <input v-model="dataUser.nameUp"type="text" class="form-control" name="lastname" placeholder="Last Name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="password" class="col-md-3 control-label">Password</label>
                                <div class="col-md-9">
                                    <input v-model="dataUser.passwordUp"type="password" class="form-control" name="passwd" placeholder="Password">
                                </div>
                            </div>
                            <div class="form-group">
                                <!-- Button -->
                                <div class="col-md-offset-3 col-md-9">
                                    <button id="btn-signup" type="Submit" class="btn btn-info"><i class="icon-hand-right"></i> &nbsp Sign Up</button>
                                </div>
                     </div>
                          </form>




                </div>
     </div>
</div>

</div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      dataLogin: {
        name: '',
        password: ''
      },
      dataUser: {
        nameUp: '',
        passwordUp: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'Login'
    ]),
    register () {
      var self = this
      axios.post('http://localhost:3000/api/users', {
        name: self.dataUser.nameUp,
        password: self.dataUser.passwordUp
      })
      .then(response => {
        console.log(response)
        alert(response)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>
