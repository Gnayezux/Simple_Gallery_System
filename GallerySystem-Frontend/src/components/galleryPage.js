import axios from 'axios'
import Navbar from './Navbar'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
    baseURL: backendUrl,
    headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

export default {
    name: 'gallery',
    data() {
        return {
            //fields: ['artPieceName', 'price', 'discountPercentage', 'artPieceArtist', 'artPieceDescription'],
            items:[],
            items: [{ artPieceName: 'Mona Lisa', price: 1000000000, artID:57, discountPercentage: 0, artPieceArtist: 'Leonardo da Vinci', artPieceDescription: 'The Mona Lisa is the earliest Italian portrait to focus so closely on the sitter in a half-length portrait.'}],
            email: '',
            errorMsg: '',
            showError: false,
            response: []
        }
    },
    components: {
        Navbar
    },
    created: function (){
        var i=0;
        AXIOS.get("https://gallerysystem-backend-10.herokuapp.com//artpieces")
        .then(response => {

            for (i=0; i<response.data.length; i++){
                this.items.push(response.data[i])
            }        
        })
        .catch(e => {
            this.showError = true
            this.errorMsg = e.message
        })
    },
    methods: {
        addToShoppingCart: function(artID) {
            var quantity = 1;
            AXIOS.post("https://gallerysystem-backend-10.herokuapp.com/SelectedItem/"+artID+"?quantity="+quantity)
            .then(response => {
                if(artID != null){
                    this.showError = true
                    this.errorMsg = "Add to your cart successfully!"
                }
            })
            .catch(e => {
                this.showError = true
                this.errorMsg = e.message
            })
        },
        back: function(){
            this.$router.go(-1)
        }
    }
}