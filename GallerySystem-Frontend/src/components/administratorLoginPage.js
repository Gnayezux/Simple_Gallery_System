import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
    baseURL: backendUrl,
    headers: { 'Access-Control-Allow-Origin': frontendUrl }
})



function AdministratorDto(address, email, username, password) {
    this.address = address
    this.email = email
    this.username = username
    this.password = password
}

export default {
    name: 'administratorlogin',
    data() {
        return {
            users: [],
            errorUser: '',
            response: []
        }
    },

    created: function () {
        // Getting persons from backend
        AXIOS.get('/users')
            .then(response => {
                // JSON responses are automatically parsed.
                this.users = response.data
            })
            .catch(e => {
                this.errorUser = e
            })
    },
    methods: {
        authenticateUser: function (userName, password) {
            AXIOS.get('/users')
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.users.push(response.data)
                    this.errorUser = ''
                })
                .catch(e => {
                    var errorMsg = e.response.data.message
                    console.log(errorMsg)
                    this.errorUser = errorMsg
                });
            for (i = 0; i < users.lenght; i++) {
                if (users[i].userName == userName && users[i].password == password) {
                    console.log("authenticated!")
                }
            }
        }


    }
}



