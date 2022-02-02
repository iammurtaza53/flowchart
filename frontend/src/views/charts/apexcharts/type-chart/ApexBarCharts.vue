<template>
  <v-card class="mb-7">
    <v-toolbar flat>
      <v-toolbar-title>Issuse Analysis</v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <div class="mt-4 pa-4">
      <div>
        <vue-apex-charts
          type="bar"
          height="350"
          :options="apexChartData.barChart.chartOptions"
          :series="series"
        ></vue-apex-charts>
      </div>
    </div>
  </v-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../ApexChartsData.js";

export default {
  name: "ApexBarCharts",
  props: {
    series: [],
  },
  data: () => ({
    barchart: false,
    apexChartData: apexChartData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>


