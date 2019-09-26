<template>
        <div class="row registerPage">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="container">
          <div class="card">
            <div class="card-header">REGISTER</div>
            <div class="card-body">
                <div class="form-group">
                <label for="fname" class="bmd-label-floating">Firstname</label>
                <input
                  type="text"
                  class="form-control"
                  id="fname"
                  placeholder="Enter your firstname.."
                />
              </div>
              <div class="form-group">
                <label for="lname" class="bmd-label-floating">Lastname</label>
                <input
                  type="text"
                  class="form-control"
                  id="lname"
                  placeholder="Enter your lastname.."
                />
              </div>
              <div class="form-group">
                <label for="email" class="bmd-label-floating">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter your email.."
                />
              </div>
              <div class="form-group">
                <label for="pass" class="bmd-label-floating">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="pass"
                  placeholder="Enter your password.."
                />
              </div>
                            <div class="form-group">
                <label for="cpass" class="bmd-label-floating">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="cpass"
                  placeholder="Confirm you password.."
                />
              </div>
              <center>
                <button type="button" class="btn btn-outline-success register-btn" id="btnRegister">Register</button>
                
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
  // $("#email").prop('required', 'required');
  // $("#btnLogin").click(function() {
  //   let input = $("#uname").val();
  //   let pass = $("#passw").val();
  //   $("#passw").attr({
  //     pattern: "[A-Za-z]{8,}",
  //     title: "This field is required"
  //   });
  //   if (input != "" && pass != "") {
  //     console.log($("#uname").val());
  //     console.log($("#passw").val());
  //   }
  // });

  // $("#btnSignup").click(function(){
  //     $("#homepage").hide();
  //     $("#test").show();
  // })
// });
 </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* body{
        background-image: url(http://www.sclance.com/backgrounds/key-background/key-background_1376694.jpg);
        background-size: cover;
        background-repeat: no-repeat;
    } */
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

#btnRegister {
  color: black;
  border: 2px solid black;
  margin-top: 5px;
  padding: 12px 30px;
}

</style>
