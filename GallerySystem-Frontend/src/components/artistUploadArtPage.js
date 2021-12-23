import axios from 'axios'
import Navbar from './Navbar'
import Router from '../router'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
    baseURL: backendUrl,
    headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

function ArtPieceDto(name, quantity, price, discountPercentage, commissionPercentage, description, artist) {
    this.name = name
    this.quantity = quantity
    this.price = price
    this.discountPercentage = discountPercentage
    this.commissionPercentage = commissionPercentage
    this.description = description
    this.artist = artist
}

export default {
    name: 'artistRegister',
    data() {
        return {
            artpieces: [],
            name: '',
            quantity: '',
            price: '',
            discountPercentage: '',
            commissionPercentage: '',
            description: '',
            artist: '',
            errorArtpiece: '',
            errorMsg: '',
            showError: false,
            response: []
        }
    },
    components: {
        Navbar
    },
    methods: {
        uploadArt: function (name, quantity, price, discountPercentage, commissionPercentage, description, artistEmail) {
            this.showError = false

            AXIOS.post("https://gallerysystem-backend-10.herokuapp.com/artpiece/"+name+"?quantity="+quantity+"&price="+price+"&discountPercentage="+discountPercentage+"&commissionPercentage="+commissionPercentage + "&description=" + description+"&artistEmail="+artistEmail)
                .then(response => {
                    this.artpieces.push(response.data)
                    if (!response.data.artID || response.data.artID == "") {
                        this.errorMsg = "Failed to create the art piece. Please try again."
                        this.showError = true
                    } else {
                        this.$router.go(-1)
                    }
                })
                .catch(e => {
                    console.log(e.message)
                    this.errorMsg = e.message
                    this.showError = true
                })

        },
        cancel: function(){
            this.$router.go(-1)
        }
    }
}