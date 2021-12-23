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
    name: 'personalize',
    data() {
        return {
            items: [],
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
        var email = this.$route.params.email;
        AXIOS.get("https://gallerysystem-backend-10.herokuapp.com/customer/" + email)
        .then(response => {
            this.items.push(response.data)
        })
        .catch(e => {
            this.showError = true
            this.errorMsg = e.message
        })
    },
    methods: {
        search: function (email) {
            this.showError = false
            AXIOS.get("https://gallerysystem-backend-10.herokuapp.com/customer/" + email)
                .then(response => {
                    this.items.push(response.data)
                })
                .catch(e => {
                    console.log(e.message)
                    this.errorMsg = "Failed to load the user profile."
                    this.showError = true;
                })
        },
        back: function(){
            this.$router.go(-1)
            
        }
    }
}