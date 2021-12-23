import axios from 'axios'
import Router from "../router";
import Navbar from './Navbar'
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
    name: 'artistDashboard',
    data() {
        return {
            artists: [],
            email: '',
            username: '',
            errorArtist: '',
            errorMsg: '',
            showError: false,
            response: []
        }
    },
    components: {
        Navbar
    },
    created: function(){
        this.email = this.$route.params.email;
        this.username = this.$route.params.username;

    },
    methods: {
        profile: function (){
            //this.$router.push({name: 'ArtistManageProfile', params: {email: this.email}})
            this.$router.push({
                name: 'ArtistManageProfile',
                params: {email: this.email}
            })
        },
        manageArt: function (){
            //this.$router.push({name: 'ArtistManageProfile', params: {email: this.email}})
            this.$router.push({
                name: 'ArtistManageArt',
                params: {email: this.email}
            })
        },
        uploadArt: function (){
            //this.$router.push({name: 'ArtistManageProfile', params: {email: this.email}})
            this.$router.push({
                name: 'ArtistUploadArt',
                params: {email: this.email}
            })
        }
    }
}