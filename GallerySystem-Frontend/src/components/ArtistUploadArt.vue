<template>
  <div>
    <Navbar></Navbar>
    <div class="text-center">
      <form class="form-upload">
        <div v-if="showError">
          <div id="alert" class="alert alert-warning" role="alert">
            {{ errorMsg }}
          </div>
        </div>
        <h1 class="h3 mb-3 font-weight-bold">Upload your artpieces</h1>
        <label for="name" class="sr-only">Art Name</label>
        <input
          type="text"
          id="name"
          class="form-control"
          placeholder="Name of the art"
          required
          v-model="name"
        />
        <label for="artist" class="sr-only">Artist</label>
        <input
          type="email"
          id="artistEmail"
          class="form-control"
          placeholder="Artist of the art"
          description="Unknown if the email is unknown"
          required
          v-model="artistEmail"
        />
        <label for="quantity" class="sr-only">Quantity</label>
        <input
          type="number"
          id="quantity"
          class="form-control"
          placeholder="Quantity of the art"
          required
          v-model="quantity"
        />
        <label for="price" class="sr-only">Price</label>
        <input
          type="number"
          id="price"
          class="form-control"
          placeholder="Price"
          required
          v-model="price"
        />
        <label for="discountPercentage" class="sr-only">Discount</label>
        <input
          type="number"
          id="discountPercentage"
          class="form-control"
          placeholder="Discount Percentage"
          required
          v-model="discountPercentage"
        />
        <label for="commissionPercentage" class="sr-only">Commission</label>
        <input
          type="number"
          id="commissionPercentage"
          class="form-control"
          placeholder="Commission Percentage"
          required
          v-model="commissionPercentage"
        />

        <b-form-file
          id="file-default"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>

        <label for="description"></label>
        <textarea
          class="form-control"
          id="description"
          rows="3"
          placeholder="Description of the art piece"
          v-model="description"
        ></textarea>

        <button class="btn btn-dark" type="submit" @click="uploadArt(name, quantity, price, discountPercentage, commissionPercentage, description, artistEmail)">
          Upload the artpiece
        </button>
        <button
            type="submit"
            class="btn btn-dark"
            @click="cancel(email)"
          >
            Cancel
          </button>
      </form>
    </div>
  </div>
</template>

<script src="./artistUploadArtPage.js">
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
.form-upload input[type="text"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.form-upload input[type="number"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.form-upload input[type="email"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.form-upload textarea {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.btn {
  margin-top: 20px;
}
</style>