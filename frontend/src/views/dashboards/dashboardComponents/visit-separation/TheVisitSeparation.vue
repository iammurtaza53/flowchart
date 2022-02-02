<template>
  <v-card flat class="mb-7 w-100">
    <v-card-text class="pa-5">
      <div class="d-md-flex align-items-center">
        <div>
          <h3 class="title font-weight-regular">
            <span class="lstick"></span>Visit Separation
          </h3>
        </div>
      </div>
      <div v-show="elementVisible" class="pb-4 mt-4">
        <vue-apex-charts
          type="donut"
          height="190"
          :options="apexChartData.donutChart.chartOptions"
          :series="apexChartData.donutChart.series"
        ></vue-apex-charts>
      </div>
      <div class="d-flex align-center border-bottom py-3">
        <span class="subtitle-1 font-weight-light">Mobile</span>
        <div class="ml-auto">
          <span class="font-weight-medium">38.5%</span>
        </div>
      </div>
      <div class="d-flex align-center border-bottom py-3">
        <span class="subtitle-1 font-weight-light">Tablet</span>
        <div class="ml-auto">
          <span class="font-weight-medium">30.8%</span>
        </div>
      </div>
      <div class="d-flex align-center border-bottom py-3">
        <span class="subtitle-1 font-weight-light">Desktop</span>
        <div class="ml-auto">
          <span class="font-weight-medium">7.7%</span>
        </div>
      </div>
      <div class="d-flex align-center py-3">
        <span class="subtitle-1 font-weight-light">Other</span>
        <div class="ml-auto">
          <span class="font-weight-medium">23.1% </span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../../../charts/apexcharts/ApexChartsData";

export default {
  name: "TheVisitSeparation",
  data: () => ({
    title: "TheVisitSeparation",
    apexChartData: apexChartData,
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