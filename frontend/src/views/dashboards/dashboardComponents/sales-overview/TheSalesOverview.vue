<template>
  <v-card flat class="mb-7">
    <v-card-text class="pa-5">
      <div class="d-sm-flex align-center">
        <div>
          <h3 class="title font-weight-regular">
            <span class="lstick"></span>Sales Overview
          </h3>
          <h6 class="subtitle-2 font-weight-light">Year 2020</h6>
        </div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <div class="d-md-flex align-center">
            <div class="d-flex justify-center align-center px-2 mt-2 mt-md-0">
              <span class="d-flex align-start">
                <span class="overline">
                  <i
                    class="deep-purple--text text--lighten-1 fa fa-circle mx-2 mt-3"
                  ></i>
                </span>
                <div>
                  <span class="headline d-block">10368</span>
                  <span class="subtitle-1 grey--text">Earning</span>
                </div>
              </span>
            </div>
            <div class="d-flex justify-center align-center px-2 mt-2 mt-md-0">
              <span class="d-flex align-start">
                <span class="overline">
                  <i
                    class="info--text text--accent-2 fa fa-circle mx-2 mt-3"
                  ></i>
                </span>
                <div>
                  <span class="headline d-block">12659</span>
                  <span class="subtitle-1 grey--text">Expense</span>
                </div>
              </span>
            </div>
            <div class="d-flex justify-center align-center px-2 mt-2 mt-md-0">
              <span class="d-flex align-start">
                <span class="overline">
                  <i
                    class="blue-grey--text text--lighten-1 fa fa-circle mx-2 mt-3"
                  ></i>
                </span>
                <div>
                  <span class="headline d-block">15478</span>
                  <span class="subtitle-1 grey--text">Sales</span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div v-show="elementVisible" class="mt-2">
        <vue-apex-charts
          type="area"
          height="372px"
          :options="SalesoverChart.SalesoverChart.chartOptions"
          :series="SalesoverChart.SalesoverChart.series"
        ></vue-apex-charts>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import SalesoverChart from "./SalesOverviewData";

export default {
  name: "TheSalesOverview",
  data: () => ({
    title: "TheSalesOverview",
    SalesoverChart: SalesoverChart,
    elementVisible: false,
  }),
  created() {
    setTimeout(() => (this.elementVisible = true), 10);
  },
  components: {
    VueApexCharts,
  },
};
</script>
