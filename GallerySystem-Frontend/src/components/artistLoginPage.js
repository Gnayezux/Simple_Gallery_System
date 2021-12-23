import axios from 'axios'
import Router from '../router'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
    baseURL: backendUrl,
    headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

function ArtistDto(email, password) {
    this.email = email
    this.password = password
}

export default {
    name: 'artistLogin',
    data() {
        return {
            artists: [],
            email: '',
            password: '',
            errorArtist: '',
            errorMsg: '',
            showError: false,
            response: []
        }
    },
    methods: {
        login: function (email, password) {
            this.showError = false

            AXIOS.get("https://gallerysystem-backend-10.herokuapp.com/artist/"+email)
                .then(response => {
                    this.artists = response.data
                    var username = response.data.username
                    if (password == response.data.password) {
                        console.log("success")
                        this.$router.push({
                            name: 'ArtistDashboard',
                            params: {email: email, username: username}
                        })
                    } else {
                        this.errorMsg = "Password does not match with the email."
                        this.showError = true;
                    }
                })
                .catch(e => {
                    console.log(e.message)
                    this.errorMsg = e.message
                    this.showError = true;
                })
        }
    }
}