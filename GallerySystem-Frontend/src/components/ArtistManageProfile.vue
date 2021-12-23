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
      <b-table class="profile-table" stacked :items="items"></b-table>
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

          <button
            type="submit"
            class="btn btn-dark mb-2"
            @click="search(email)"
          >
            Search
          </button>
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

<script src="./artistManageProfilePage.js">
</script>

<style scoped>
.alert {
  margin-left: 15px;
}
</style>