<template>
  <v-card flat class="mb-7 w-100">
    <v-card-text class="pa-5 pb-0">
      <div class="d-md-flex align-start">
        <span class="lstick"></span>
        <h3 class="title font-weight-regular">Sales Overview</h3>
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
    <div class="info">
      <v-row no-gutters>
        <v-col cols="12" sm="4" md="4" lg="3">
          <div class="pa-4 info">
            <h6 class="white--text font-weight-regular mb-1">Total Sales</h6>
            <h3 class="white--text font-weight-regular mb-0">$10,345</h3>
          </div>
        </v-col>
        <v-col cols="12" sm="4" md="4" lg="3">
          <div class="pa-4 info">
            <h6 class="white--text font-weight-regular mb-1">This Month</h6>
            <h3 class="white--text font-weight-regular mb-0">$7,589</h3>
          </div>
        </v-col>
        <v-col cols="12" sm="4" md="4" lg="3">
          <div class="pa-4 info">
            <h6 class="white--text font-weight-regular mb-1">This Week</h6>
            <h3 class="white--text font-weight-regular mb-0">$1,476</h3>
          </div>
        </v-col>
      </v-row>
    </div>

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
  </v-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import SalesoverChart from "./SalesOverviewData2";

export default {
  name: "TheSalesOverview2",
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