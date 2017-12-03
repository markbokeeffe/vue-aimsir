import Vue from 'vue'
import Router from 'vue-router'
import WeatherForecast from '@/components/WeatherForecast'
import Settings from '@/components/settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WeatherForecast',
      component: WeatherForecast
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
