<template>
  <div>
    <Navbar></Navbar>
    <div v-if="showError">
      <div id="alert" class="alert alert-warning" role="alert">
        {{ errorMsg }}
      </div>
    </div>
    <div class="text-center">
      <div><h2>User Profile</h2></div>
      <b-table class="customer-table" stacked :items="items"></b-table>
      <div>
        <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <label for="email" class="sr-only">Search Profile</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div v-if="showError">
            <b-alert variant="warning" show dismissible fade>{{
              errorMsg
            }}</b-alert>
          </div>
          <button
            type="submit"
            class="btn btn-dark mb-2 ml-2"
            @click="back(email)"
          >
            BACK
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./customerPersonalizePage.js">
</script>

<style scoped>
.text-center {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 10px;
  background-color: #f5f5f5;
}
.form-upload {
  width: 100%;
  max-width: 600px;
  padding: 15px;
  margin: auto;
}
.form-upload .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-upload input[type="username"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.form-upload input[type="address"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.form-upload input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn {
  margin-top: 20px;
}
</style>