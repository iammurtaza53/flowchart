<template>
  <v-card flat class="mb-7 w-100">
    <v-card-text class="pa-5">
      <div class="d-sm-flex align-center">
        <div>
          <span class="lstick"></span>
          <h3 class="title font-weight-regular">Website Visit</h3>
        </div>
        <v-spacer></v-spacer>
        <div class="ml-auto mt-3 mt-sm-0">
          <div class="d-flex align-center text-truncate text-nowrap">
            <div class="d-flex align-center px-2">
              <span class="success--text">
                <span class="overline">
                  <i class="fa fa-circle mx-2"></i>
                </span>
                <span class="font-weight-regular subtitle-1">Site A view</span>
              </span>
            </div>
            <div class="d-flex align-center px-2">
              <span class="info--text">
                <span class="overline">
                  <i class="fa fa-circle mx-2"></i>
                </span>
                <span class="font-weight-regular subtitle-1">Site B view</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center d-flex justify-center mt-4 mb-3">
        <v-btn depressed class="rounded-0"> Pageviews </v-btn>
        <v-btn depressed class="rounded-0"> REFERRALS </v-btn>
      </div>
      <div
        style="max-height: 350px"
        class="mt-5 mt-md-0"
        v-show="elementVisible"
      >
        <vue-apex-charts
          type="area"
          height="350"
          :options="apexChartData.lineAreaChartSpline.chartOptions"
          :series="apexChartData.lineAreaChartSpline.series"
        ></vue-apex-charts>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../../../charts/apexcharts/ApexChartsData";

export default {
  name: "TheWebsiteVisit",
  data: () => ({
    elementVisible: false,
    apexChartData: apexChartData,
  }),
  created() {
    setTimeout(() => (this.elementVisible = true), 10);
  },
  components: {
    VueApexCharts,
  },
};
</script>