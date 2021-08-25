<template>
  <div class="col-10 custom-pt">
    <div class="d-flex flex-column">
      <div
        class="search-box d-flex align-items-center justify-content-center p-3"
      >
        <h1 class="font-chomsky">Today's Forecast</h1>
      </div>
      <div class="bg-light mw-100 item-height p-2 overflow-auto">
        <div
          class="d-flex flex-column align-items-center justify-content-center p-3"
        >
          <vue-weather api-key="6c357608ec4e287bb98a49f643530b4b" units="uk" />
          <div class="align-self-start">
            <h3 class=" border-bottom">Detail</h3>
            <b-table fixed striped hover :items="items"></b-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueWeather from 'vue-weather-widget';
import { mapState } from 'vuex';
export default {
  name: 'Weather',
  components: {
    VueWeather,
  },
  data() {
    return {
      items: [],
    };
  },
  computed: {
    ...mapState(['weather']),
  },
  watch: {
    weather(newWeather) {
      if (newWeather.weather) {
        this.items = [
          { Item: 'Weather', Value: newWeather.weather[0].main },
          {
            Item: 'Description',
            Value: newWeather.weather[0].description,
          },
          {
            Item: 'Temperature',
            Value: (newWeather.main.temp - 273.15).toFixed(1) + '°C',
          },
          {
            Item: 'Max Temp',
            Value: (newWeather.main.temp_max - 273.15).toFixed(1) + '°C',
          },
          {
            Item: 'Min Temp',
            Value: (newWeather.main.temp_min - 273.15).toFixed(1) + '°C',
          },
          {
            Item: 'Wind Speed',
            Value: newWeather.wind.speed * 3.6 + ' KM/h',
          },
          {
            Item: 'Sunrise',
            Value: this.sunrise(newWeather.sys.sunrise),
          },
          { Item: 'Sunset', Value: this.sunset(newWeather.sys.sunset) },
        ];
      }
    },
  },
  methods: {
    sunrise(time) {
      let unix_timestamp = time;
      // Create a new JavaScript Date object based on the timestamp
      // multiplied by 1000 so that the argument is in milliseconds, not seconds.
      var date = new Date(unix_timestamp * 1000);
      // Hours part from the timestamp
      var hours = date.getHours();
      // Minutes part from the timestamp
      var minutes = '0' + date.getMinutes();
      // Seconds part from the timestamp
      var seconds = '0' + date.getSeconds();

      // Will display time in 10:30:23 format
      return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    },
    sunset(time) {
      let unix_timestamp = time;
      // Create a new JavaScript Date object based on the timestamp
      // multiplied by 1000 so that the argument is in milliseconds, not seconds.
      var date = new Date(unix_timestamp * 1000);
      // Hours part from the timestamp
      var hours = date.getHours();
      // Minutes part from the timestamp
      var minutes = '0' + date.getMinutes();
      // Seconds part from the timestamp
      var seconds = '0' + date.getSeconds();

      // Will display time in 10:30:23 format
      return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    },
    fetchWeather() {
      this.$store.dispatch('fetchWeather');
    },
  },
  created() {
    this.fetchWeather();
  },
};
</script>

<style></style>
