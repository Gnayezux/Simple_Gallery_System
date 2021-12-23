import axios from 'axios'
import Router from '../router'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
    baseURL: backendUrl,
    headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

function ArtistDto(email, username, inputPassword, confirmPassword) {
    this.email = email
    this.username = username
    this.inputPassword = inputPassword
    this.confirmPassword = confirmPassword
}

export default {
    name: 'artistRegister',
    data() {
        return {
            artists: [],
            username: '',
            email: '',
            inputPassword: '',
            confirmPassword: '',
            newArtist: '',
            errorArtist: '',
            errorMsg: '',
            showError: false,
            response: []
        }
    },
    methods: {
        register: function (email, username, inputpassword, confirmPassword) {
            this.showError = false
            if (inputpassword != confirmPassword) {
                this.errorMsg = "Passwords do not match!"
                this.showError = true;
            } else {
                AXIOS.post("https://gallerysystem-backend-10.herokuapp.com/artist/"+username+"?email="+email+"&password="+ inputpassword)
                    .then(response => {
                        this.response = response.data
                        console.log(this.response)
                        this.username = username
                        this.email = email
                        this.inputpassword = inputpassword
                        Router.push({
                            path: '/',
                            name: 'Welcome'
                        })
                    })
                    .catch(e => {
                        console.log(e.message)
                        this.errorMsg = "Failed to create account. Please refer to the console for details."
                        this.showError = true;
                    })
            }

        }
    }
}