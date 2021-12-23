<template>
  <div>
    <Navbar></Navbar>
    <div v-if="showError">
      <div id="alert" class="alert alert-warning" role="alert">
        {{ errorMsg }}
      </div>
    </div>
    <div class="text-center">
      <h1>Welcome back, {{ username }}!</h1>
      <b-card-group deck class="deck-group">
        <b-card title="">
          <!-- <b-button type="submit" variant="primary" v-on:click="profile()"
            >Manage Profile</b-button
          > -->
          <!-- <b-button href="#/artist-manage-artpiece" variant="primary">Manage Profile</b-button> -->
          <button
            class="btn btn-md btn-primary"
            type="submit"
            @click="profile()"
          >
            Manage Profile
          </button>
          <template #footer>
            <small class="text-muted"></small>
          </template>
        </b-card>

        <b-card title="">
          <!-- <b-button href="#/artist-manage-artpiece" variant="primary">Manage Current Artpieces</b-button> -->
          <button
            class="btn btn-md btn-primary"
            type="submit"
            @click="manageArt()"
          >
            Manage Current Artpieces
          </button>
          <template #footer>
            <small class="text-muted"></small>
          </template>
        </b-card>

        <b-card title="">
          <!-- <b-button href="#/artist-upload-artpiece" variant="primary">Upload New Artpieces</b-button> -->
          <button
            class="btn btn-md btn-primary"
            type="submit"
            @click="uploadArt()"
          >
            Upload New Artpieces
          </button>
          <template #footer>
            <small class="text-muted"></small>
          </template>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script src='./artistDashboardPage.js'>
</script>

<style scoped>
.text-center {
  display: -ms-flexbox;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 80px;
  background-color: #f5f5f5;
}
.deck-group {
  margin: 20px;
}
</style>