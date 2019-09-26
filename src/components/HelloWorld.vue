<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <a class="navbar-brand" href="#">Easakay</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
              <!-- <span class="sr-only">(current)</span> -->
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"s
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              />
          </li>-->
          <!-- <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>-->
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <h1 class="text-primary">Login using VueJs</h1>
    <div class="row loginPage">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="container" style="background-color:black">
          <div class="card" style="background-color: pink">
            <div class="card-header" style="background-color: black">Login</div>
            <div class="card-body">
              <div class="form-group">
                <label for="username" class="bmd-label-floating">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="uname"
                  placeholder="Enter your username here!"
                />
              </div>
              <div class="form-group">
                <label for="pwd" class="bmd-label-floating">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="passw"
                  placeholder="Enter your password!"
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
  </div>
</template>
<style>    
  .card-header {
    color:darksalmon;
    font-weight: bold;
    letter-spacing: 2px;
  }

  label {
    font-size: 20px;
    float: left;
  }
  input[placeholder]{
    font-size: 12px;
    border: 2px solid black;
  }
</style> 