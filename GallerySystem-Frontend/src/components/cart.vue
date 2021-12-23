<template>
    <div class="cart">
      <h2>Cart</h2>
      <table border="1" align="center">
        <thead>
        <tr>
          <td>select</td>
          <td>Art Name</td>
          <td>Art Price</td>
          <td>Quantity</td>
          <td>Price</td>
        </tr>
        </thead>
        <tbody v-for="(item,index) in shoppingCartItem" :key="index">
          <tr>
            <td>
              <input type="checkbox" v-model="item.isActive"/>
            </td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>
              <button @click="minus(index)">-</button>
              {{item.number}}
              <button @click="add(index)">+</button>
            </td>
            <td>{{item.price*item.number}}</td>
            <button @click="deleteAll(index)" align="center" >Remove Item</button>
          </tr>
        </tbody>
        <tfoot>
        <tr>
          <td></td>
          <td colspan="2">Selected ArtPieces</td>
          <td colspan="2">Grand Total</td>
        </tr>
        <tr>
          <td></td>
          
          <td colspan="2">{{isActive}}/{{allSHitemList}}</td>
          <td colspan="2">{{allPrice}}</td>
        </tr>
        <tr>
          <td></td>
          <td colspan="2"><button @click="saveShoppingCart()">Save ShoppingCart</button></td>
          <td colspan="2"><button>Check Out!</button></td>
        </tr>
        </tfoot>
      </table>
    </div>
</template>

<script src="./cartPage.js">

</script>

<style scoped>
.cart{
align-items: center;
}
</style>