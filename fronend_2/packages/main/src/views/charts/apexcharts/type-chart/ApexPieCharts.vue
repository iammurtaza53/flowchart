<template>
  <v-card class="mb-7">
    <v-toolbar flat>
      <v-toolbar-title>Windows vs Unix</v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <div class="mt-4 pa-4">
      <vue-apex-charts
        type="pie"
        height="350"
        :options="apexChartData.pieChart.chartOptions"
        :series="series"
      ></vue-apex-charts>
    </div>
  </v-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../ApexChartsData.js";

export default {
  name: "ApexPieCharts",
  props: {
    series: null,
  },
  data: () => ({
    piechart: false,
    apexChartData: apexChartData,
  }),

  components: {
    VueApexCharts,
  },
};
</script>


