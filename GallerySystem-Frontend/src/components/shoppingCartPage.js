import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})
import Cart from './Cart'
export default {
  name: 'ShoppingCart',
  data() {
    return {
      title: 'cart',
      artInfo: {
        name: '',
        price: '',
        description: '',
        artID: ''
      },
      backendData: [],
      shoppingCartItem: [],
      si: [],
      artList: [
        {
          name: 'Mona Lisa',
          price: '20',
          description: 'Freshly Stolen right from the Louvre',
          artID: '1919810'
        },
        {
          name: 'San Giovanni Battista',
          price: '35',
          description: 'Yes I know its unrealistic',
          artID: '114514'
        }
      ]
    }
  },
  components: {
    Cart
  },
  created: function () {
    AXIOS.get('/SelectedItem')
      .then(response => {
        // JSON responses are automatically parsed.
        this.si = response.data
      })
      .catch(e => {
        this.errorSi = e
      })
    for (let i = 0; i < this.si.length; i++) {
      let artInfo = {
        name: this.si[i].artPiece.artName,
        price: this.si[i].artPiece.price,
        description: this.si[i].artPiece.description,
        artID: this.si[i].artPiece.artID
      }
      if (artInfo.name != '' && artInfo.price != NaN) {
        this.backendData.push(artInfo);
      } else {
        continue;
      }
    }
    if (this.backendData.length != 0) {
      this.artList.push(this.backendData);
    } else {
      if (this.si == '') {
        alert('You have not selected any art piece! Please go browse and select some XDDD')
      } else {
        alert('An unexpected error happened when trying to fetch your selected art pieces,\nplease contact an Administrator')
      }
    }

  },
  methods: {
    getListofArtPieces() {
      AXIOS.get('/SelectedItem')
        .then(response => {
          // JSON responses are automatically parsed.
          this.si = response.data
        })
        .catch(e => {
          this.errorUser = e
        })
      for (let i = 0; i < this.si.length; i++) {
        let artInfo = {
          name: this.si[i].artPiece.artName,
          price: this.si[i].artPiece.price,
          description: this.si[i].artPiece.description,
          artID: this.si[i].artPiece.artID
        }
        if (artInfo.name != '' && artInfo.price != NaN) {
          this.backendData.push(artInfo);
        } else {
          continue;
        }

      }
    },
    addArtInfoToList() {
      if (this.backendData.length != 0) {
        this.artList.push(this.backendData);
      } else {
        if (this.si == '') {
          alert('You have not selected any art piece! Please go browse and select some XDDD')
        } else {
          alert('An unexpected error happened when trying to fetch your selected art pieces,\nplease contact an Administrator')
        }
      }
    },
    addArtToCart(index) {
      const item = this.artList[index]
      const HasShop = this.shoppingCartItem.find(SHitem => SHitem.name === item.name)
      if (HasShop) {
        HasShop.number += 1
      } else {
        this.shoppingCartItem.push({
          ...item,
          number: 1,
          isActive: true
        })
      }
    },
    remove(val) {
      this.shoppingCartItem.splice(val, 1)
    },
    get: function () {
      //this.axios.post('http://localhost:8080/customer/shit',"address='address&email='shitmail&password='lol'").then((response) => {console.log(response); alert(response.data);}, function(){alert('NOOOOOO!');});
      this.axios.get('https://gallerysystem-backend-10.herokuapp.com/customers').then((response) => { console.log(response); alert(response.data); }, function () { alert('NOOOOOO!'); });
    }
  }
}