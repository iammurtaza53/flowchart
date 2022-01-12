<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5">
      <div class="d-md-flex align-start">
        <span class="lstick"></span>
        <h3 class="title font-weight-regular">Total Visits</h3>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <div style="width: 150px">
            <v-select
              class="pt-0 mt-0"
              v-model="select"
              :items="items"
              item-text="state"
              item-value="abbr"
              label="Select"
              persistent-hint
              return-object
              single-line
            ></v-select>
          </div>
        </div>
      </div>
      <div>
        <App
          :countryData="countryData"
          defaultCountryFillColor="rgb(201, 214, 222)"
          highColor="rgb(201, 214, 222)"
          lowColor="rgb(201, 214, 222)"
          countryStrokeColor="transparent"
          class="total-visits"
        />
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import TotalvisitsMap from "./TotalvisitsMap";
import App from "vue-world-map";

export default {
  name: "TheTotalVisits",
  data: () => ({
    select: { state: "January 2020", abbr: "FL" },
    items: [
      { state: "January 2020", abbr: "FL" },
      { state: "February 2020", abbr: "GA" },
      { state: "March 2020", abbr: "NE" },
      { state: "April 2020", abbr: "CA" },
    ],
    countryData: {
      US: 100,
      IN: 200,
    },
  }),
  components: {
    App,
    // eslint-disable-next-line vue/no-unused-components
    TotalvisitsMap,
  },
};
</script>