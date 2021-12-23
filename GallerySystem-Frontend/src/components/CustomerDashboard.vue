<template>
  <div>
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Your personal space</h1>
      <p class="lead">Welcome Home!</p>
    </div>
    <div class="container">
      <div class="card-deck mb-3 text-center">
        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Your Gallery</h4>
          </div>
          <div class="card-body">
              <button type="button" class="btn btn-lg btn-block btn-primary mb-3" @click="profile()">
                Personalize
              </button>
              <button type="button" class="btn btn-lg btn-block btn-primary mb-3" @click="shoppingCart()">
                Your Shopping Cart
              </button>
              <button type="button" class="btn btn-lg btn-block btn-primary mb-3" @click="gallery()">
                Browse the Gallery
              </button>

          </div>
        </div>
      </div>
	  <a class="btn btn-dark btn-sm" href="/" role="button">Log out</a>
    </div>

  </div>
</template>
<script src='./customerDashboardPage.js'>
</script>

<style>
</style>