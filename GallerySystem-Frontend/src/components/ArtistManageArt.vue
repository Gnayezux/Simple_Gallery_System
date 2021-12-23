<template>
  <div>
    <Navbar></Navbar>
    <div class="text-center">
      <div v-if="showError">
        <div id="alert" class="alert alert-warning" role="alert">
          {{ errorMsg }}
        </div>
      </div>
      <div><h2>Artpieces</h2></div>
      <b-table class="artpiece-table" stacked :items="items"></b-table>
      <button type="submit" class="btn btn-dark mb-2" @click="back(email)">BACK</button>
    </div>
  </div>
</template>

<script src="./artistManageArtPage.js">
</script>

<style scoped>
.text-center {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #f5f5f5;
}
.text-center .artpiece-table {
  width: 100%;
  max-width: 800px;
  padding: 15px;
  margin: auto;
}
</style>