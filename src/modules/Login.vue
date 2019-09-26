<template>
    <div class="row loginPage">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="container">
          <div class="card">
            <div class="card-header">LOGIN</div>
            <div class="card-body">
              <div class="form-group">
                <label for="username" class="bmd-label-floating">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="uname"
                  placeholder="Enter username..."
                />
              </div>
              <div class="form-group">
                <label for="pwd" class="bmd-label-floating">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="passw"
                  placeholder="Enter password..."
                />
              </div>
              <center>
                <button type="button" class="btn btn-outline-success login-btn" id="btnLogin">Login</button>
                
                <!-- <input type = "login" class = "form -control" id = "login" value = "Login" v-on:> -->
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  
</template>

 <script>
//eslint-disable-next-line
/*eslint-disable*/
// window.$ = require("jquery");
// window.JQuery = require("jquery");
// $(document).ready(function() {
//   $("input").attr("required", true);
//   // $("#email").prop('required', 'required');
//   $("#btnLogin").click(function() {
//     let input = $("#uname").val();
//     let pass = $("#passw").val();
//     $("#passw").attr({
//       pattern: "[A-Za-z]{8,}",
//       title: "This field is required"
//     });
//     if (input != "" && pass != "") {
//       console.log($("#uname").val());
//       console.log($("#passw").val());
//     }
//   });

  // $("#btnSignup").click(function(){
  //     $("#homepage").hide();
  //     $("#test").show();
  // })
// });

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      let username = this.username;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    },
    submit: function() {
      alert("Username:\n " + this.username + "Password: " + this.password);
    }
  }
};
</script>

<style scoped>
  .card {
  background-color: pink;
  margin-top: 50px;
  padding: 30px;
}
  

.h3 {
  margin-left: 500px;
  margin-top: 300px;
  font-size: 40px;
  font-family: Times new;
}
.nav {
  margin-block: auto;
}

.card-header {
  text-align: center;
  font-weight:bold;
  font-size: 30px;
  letter-spacing: 5px;
  background-color: black;
  color:pink;
  
}

label {
  font-weight:bold;
}

input {
  border: 2px solid black;
}

#btnLogin {
  color: black;
  border: 2px solid black;
  margin-top: 5px;
  padding: 12px 30px;
}

</style>
