import axios from 'axios'
import Navbar from './Navbar'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
    baseURL: backendUrl,
    headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

function ArtPieceDto(name, artist, quantity, price, discountPercentage, commissionPercentage, description) {
    this.name = name
    this.quantity = quantity
    this.price = price
    this.discountPercentage = discountPercentage
    this.commissionPercentage = commissionPercentage
    this.description = description
    this.artist = artist
}

export default {
    name: 'artManage',
    data() {
        return {
            items: [{ name: 'Mona Lisa', artist: 'Leonardo da Vinci', quantity: 1, price: 10000000, discountPercentage: 0, commissionPercentage: 10, description: 'The Mona Lisa is the earliest Italian portrait to focus so closely on the sitter in a half-length portrait.' }]
        }
    },
    components: {
        Navbar
    },
    created: function () {
        this.showError = false
        AXIOS.get("https://gallerysystem-backend-10.herokuapp.com/artpieces")
            .then(response => {
                this.errorMsg = "success"
                this.showError = true
                const a1 = new ArtPieceDto(response.data.artPieceName, response.data.artPieceArtist, response.data.quantity, response.data.price, response.data.discountPercentage, response.data.commissionPercentage, respon.data.description)
                this.items.push(response.data)
            })
            .catch(e => {
                console.log(e.message)
                this.errorMsg = "Unable to display the artpieces."
                this.showError = true
            })
    },
    methods: {
        back: function () {
            this.$router.go(-1)

        }
    }

}