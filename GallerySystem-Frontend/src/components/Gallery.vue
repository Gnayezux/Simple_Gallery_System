<template>
  <div>
    <Navbar></Navbar>
    <div v-if="showError">
      <div id="alert alert-dismissible" class="alert alert-warning" role="alert">
        {{ errorMsg }}
      </div>
    </div>
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Gallery</h1>
      <p class="lead">Because art is too important not to share.</p>
    </div>
    <div class="container">
      <h4 class="my-0 font-weight-normal mb-2">See what we got !</h4>
      <!-- <b-table class="profile-table" striped hover :items="items"></b-table> -->
      <table class="table table-striped">
        <thead>
          <tr>
            <td>Art Piece</td>
            <td>Price</td>
            <td>Discount Percentage</td>
            <td>Artist</td>
            <td>Description</td>
            <td></td>
          </tr>
        </thead>
        <tbody v-for="item in items" :key="item.artID">
          <tr>
            <td>{{ item.artPieceName }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.discountPercentage }}</td>
            <td>{{ item.artPieceArtist }}</td>
            <td>{{ item.artPieceDescription }}</td>
            <td>
              <!-- <button type="submit" class="btn btn-dark btn-sm" @click="addToShoppingCart(index)">
                Add to Shopping Cart
              </button> -->
              <button
                type="submit"
                class="btn btn-dark"
                @click="addToShoppingCart(item.artID)"
              >
                Add To Shopping Cart
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit" class="btn btn-dark mb-2 ml-2" @click="back()">
        BACK
      </button>
    </div>
  </div>
</template>

<script src="./galleryPage.js">
</script>

<style>
</style>