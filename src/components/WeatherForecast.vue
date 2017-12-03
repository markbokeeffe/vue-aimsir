<template>
  <div>
    <p>Upcoming Weather Forecast For {{this.city}}</p>
    <div class="forcastContainer">
      <div v-for="item in forecastData">
        <span>{{item.dt_txt | formatDate}}</span>
      </div>

    </div>
  </div>
</template>

<script>
  require('axios');



  export default{
    name: 'WeatherForecast',
    data () {
      return{
        msg: "This is the weather forecast.",
        url: 'http://api.openweathermap.org/data/2.5/forecast?q=',
        apiKey: 'a55b5d5fad5250100a1d340d13117a67',
        city: '',
        country: '',
        forecastData: null
      }
    },
    created: function(){
      this.getForecast();
    },
    methods: {
      getForecast : function(){
        axios.get(this.url+'Dublin,IE&APPID='+this.apiKey)
        .then(
          response => {
            this.forecastData = response.data.list;
            this.city = response.data.city.name;
            this.country = response.data.city.country;
          }
        )
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import './src/assets/main.scss'
</style>
