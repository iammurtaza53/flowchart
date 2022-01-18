<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <v-row v-show="elementVisible">
      <v-col cols="12" sm="12" lg="6">
        <ApexBarCharts></ApexBarCharts>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <ApexPieCharts></ApexPieCharts>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "ApexCharts",

  data: () => ({
    page: {
      title: "ApexCharts",
    },
    elementVisible: false,
    breadcrumbs: [
      {
        text: "Charts",
        disabled: false,
        to: "#",
      },
      {
        text: "ApexCharts",
        disabled: true,
      },
    ],
  }),

  created() {
    setTimeout(() => (this.elementVisible = true), 1000);
    this.get_host_data();
  },
  methods: {
    get_host_data() {
      axios.get("http://localhost:8000/get-final-host-data/").then((res) => {
        console.log(res);
      });
    },
  },
  components: {
    ApexBarCharts: () => import("./type-chart/ApexBarCharts"),
    ApexPieCharts: () => import("./type-chart/ApexPieCharts"),
  },
};
</script>

<style>
</style>
