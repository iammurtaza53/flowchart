<template>
  <v-card flat class="mb-7">
    <v-card-text class="pa-5 pb-0">
      <div class="d-md-flex align-start">
        <span class="lstick"></span>
        <h3 class="title font-weight-regular">Yearly Earning</h3>
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
    </v-card-text>

    <v-card-text class="pa-5">
      <div v-show="elementVisible">
        <vue-apex-charts
          type="line"
          height="284px"
          :options="SalesoverChart.SalesoverChart.chartOptions"
          :series="SalesoverChart.SalesoverChart.series"
        ></vue-apex-charts>
      </div>
    </v-card-text>
    <div>
      <v-row no-gutters>
        <v-col cols="12" md="4" lg="4">
          <div class="pa-4 text-center">
            <h6 class="subtitle-1 font-weight-regular mb-1">Total Sales</h6>
            <h3 class="subtitle-1 font-weight-regular mb-0">$10,345</h3>
          </div>
        </v-col>
        <v-col cols="12" md="4" lg="4">
          <div class="pa-4 text-center">
            <h6 class="subtitle-1 font-weight-regular mb-1">This Month</h6>
            <h3 class="subtitle-1 font-weight-regular mb-0">$7,589</h3>
          </div>
        </v-col>
        <v-col cols="12" md="4" lg="4">
          <div class="pa-4 text-center">
            <h6 class="subtitle-1 font-weight-regular mb-1">This Week</h6>
            <h3 class="subtitle-1 font-weight-regular mb-0">$1,476</h3>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import SalesoverChart from "./TheYearlyEarningData";

export default {
  name: "TheYearlyEarning",
  data: () => ({
    SalesoverChart: SalesoverChart,
    elementVisible: false,
    select: { state: "January 2020", abbr: "FL" },
    items: [
      { state: "January 2020", abbr: "FL" },
      { state: "February 2020", abbr: "GA" },
      { state: "March 2020", abbr: "NE" },
      { state: "April 2020", abbr: "CA" },
    ],
  }),
  created() {
    setTimeout(() => (this.elementVisible = true), 10);
  },
  components: {
    VueApexCharts,
  },
};
</script>