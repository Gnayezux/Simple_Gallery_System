import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
    baseURL: backendUrl,
    headers: { 'Access-Control-Allow-Origin': frontendUrl }
})
export default {
    name: 'cart',
    props: ['shoppingCartItem'],
    data () {
      return {
          email: ''
  
      }
    },
    methods: {
      minus (index) {
        const number = this.shoppingCartItem[index].number
        if (number > 1) {
          this.shoppingCartItem[index].number -= 1
        } else {
          if (window.confirm('Are you sure you want to delete this art piece from your cart?')) {
            this.$emit('removeItem', index)
          }
        }
      },
      add (index) {
        this.shoppingCartItem[index].number += 1
      },
      deleteAll(index) {
        if (window.confirm('Are you sure you want to delete this art piece from your cart?')) {
            this.$emit('removeItem', index)
          }
      },
      saveShoppingCart() {
        for(let i=0;i<this.shoppingCartItem.length;i++){
            const artPieceID = this.shoppingCartItem[i].artID
            const customerEmail = this.email
          AXIOS.put("/shoppingCart/"+customerEmail,'?scId='+artPieceID);
        }  
        
          
      }
    },
    computed: {
      isActive () {
        return this.shoppingCartItem.filter(item => item.isActive).length
      },
      allSHitemList () {
        return this.shoppingCartItem.length
      },
      allPrice () {
        let num = 0
        this.shoppingCartItem.forEach(item => {
          if (item.isActive) {
            num += item.price * item.number
          }
        })
        return num
      }
    }
  }