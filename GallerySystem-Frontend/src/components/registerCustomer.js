import axios from 'axios'
import Router from '../router'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
    baseURL: backendUrl,
    headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

function CustomerDto(email, username, inputpassword, confirmPassword, address) {
    this.email = email
    this.username = username
    this.inputpassword = inputpassword
    this.confirmPassword = confirmPassword
    this.address = address
}

export default {
    name: 'customerRegister',
    data() {
        return {
            customers: [],
            username: '',
            email: '',
            inputpassword: '',
            confirmPassword: '',
            address: '',
            newCustomer: '',
            errorCustomer: '',
            cartID: '',
            errorMsg: '',
            showError: false,
            response: []
        }
    },
    methods: {
        register: function (email, username, inputpassword, confirmPassword, address) {
            this.showError = false
            if (inputpassword != confirmPassword) {
                this.errorMsg = "Passwords do not match!"
                this.showError = true;
            } else {
                AXIOS.post("https://gallerysystem-backend-10.herokuapp.com/customer/" + username + "?email=" + email + "&address=" + address + "&password=" + inputpassword)
                    .then(response => {
                        this.response.push(response.data)
                        this.username = username
                        this.email = email
                        this.inputpassword = inputpassword
                        this.address = address

                        AXIOS.post("https://gallerysystem-backend-10.herokuapp.com/create-shoppingCart/" + email)
                            .then(response => {
                                this.response.push(response.data)
                                this.cartID = response.data.cartID
                            })
                            .catch(e => {
                                this.errorMsg = e.message
                                this.showError = true;
                            })

                        Router.push({
                            path: '/',
                            name: 'Welcome'
                        })
                    })
                    .catch(e => {
                        this.errorMsg = e.message
                        this.showError = true;
                    })
            }

        },
        createShoppingCart: function (email) {

        }
    }
}