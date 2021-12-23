<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #f5f5f5;">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <h3>Gallery System</h3>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#/artist-dashboard">Home <span class="sr-only">(current)</span></a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <a class="btn btn-dark btn-sm" href="/" role="button">Log out</a>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navBar",
  
};
</script>

<style scoped>
.nav-link {
  margin-left: 10px;
}
</style>