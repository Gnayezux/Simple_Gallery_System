<template>
  <div class="home">
    <div>
      <h1>{{ title }}</h1>
    </div>
    <hr />
    <div class="artList">
      <h2>Selected Art list</h2>
      <center>
        <button @click="getListofArtPieces(), addArtInfoToList()">
          Refresh the List
        </button>
      </center>
      <table border="0" align="center">
        <thead>
          <tr>
            <td>Art Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>artID</td>
          </tr>
        </thead>
        <tbody v-for="(item, index) in artList" :key="index">
          <tr>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.artID }}</td>
            <td>
              <button @click="addArtToCart(index)">Add to Shopping Cart</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <cart :shoppingCartItem="shoppingCartItem" @removeItem="remove"></cart>
    </div>
  </div>
</template>

<script src='./shoppingCartPage.js'>
</script>
<style scoped>
.home {
  background: #f5f5f5;
  text-align: center;
}
.artList {
  background: darkcyan;
  text-align: center;
}
</style>
