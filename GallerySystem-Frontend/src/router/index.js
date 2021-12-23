import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'

import CustomerRegister from '@/components/CustomerRegister'
import CustomerLogin from '@/components/CustomerLogin'
import CustomerDashboard from '@/components/CustomerDashboard'
import Gallery from '@/components/Gallery'
import ShoppingCart from '@/components/ShoppingCart'
import CustomerPersonalize from '@/components/CustomerPersonalize'

import ArtistRegister from '@/components/ArtistRegister'
import ArtistLogin from '@/components/ArtistLogin'
import ArtistDashboard from '@/components/ArtistDashboard'
import ArtistUploadArt from '@/components/ArtistUploadArt'
import ArtistManageArt from '@/components/ArtistManageArt'
import ArtistManageProfile from '@/components/ArtistManageProfile'
import AdministratorRegister from '@/components/AdministratorRegister'
import AdministratorLogin from '@/components/AdministratorLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },


    {
      path: '/customer-register',
      name: 'CustomerRegister',
      component: CustomerRegister
    },
    {
      path: '/customer-login',
      name: 'CustomerLogin',
      component: CustomerLogin
    },
    {
      path: '/customer-dashboard/:email',
      name: 'CustomerDashboard',
      component: CustomerDashboard
    },
    {
      path: '/customer-personalize/:email',
      name: 'CustomerPersonalize',
      component: CustomerPersonalize
    },
    {
      path: '/gallery/:email',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/shopping-cart/:email',
      name: 'ShoppingCart',
      component: ShoppingCart
    },


    {
      path: '/artist-register',
      name: 'ArtistRegister',
      component: ArtistRegister
    },
    {
      path: '/artist-login',
      name: 'ArtistLogin',
      component: ArtistLogin
    },
    {
      path: '/artist-dashboard/:email/:username',
      name: 'ArtistDashboard',
      component: ArtistDashboard
    },
    {
      path: '/artist-manage-profile/:email',
      name: 'ArtistManageProfile',
      component: ArtistManageProfile
    },
    {
      path: '/artist-upload-artpiece/:email',
      name: 'ArtistUploadArt',
      component: ArtistUploadArt
    },
    {
      path: '/artist-manage-artpiece/:email',
      name: 'ArtistManageArt',
      component: ArtistManageArt
    }
  ]
})
