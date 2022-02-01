<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <v-row v-show="elementVisible">
      <v-col cols="12" sm="12" lg="6">
        <ApexBarCharts :key="reRender"></ApexBarCharts>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <ApexPieCharts
          :series="[osCount['windows'], osCount['unix']]"
          :key="reRender"
        ></ApexPieCharts>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import repository from "../../store/repository";
export default {
  name: "ApexCharts",

  data: () => ({
    reRender: 0,
    page: {
      title: "Analytics",
      icon: "mdi-home-analytics",
    },
    elementVisible: false,
    breadcrumbs: [
      {
        text: "Charts",
        disabled: false,
        to: "#",
      },
      {
        text: "Analytics",
        disabled: true,
      },
    ],
    os: null,
    osCount: {
      windows: 0,
      unix: 0,
    },
  }),

  created() {
    setTimeout(() => (this.elementVisible = true), 1000);
    this.get_host_data();
  },
  methods: {
    get_host_data() {
      repository.get("get-final-host-os-data/?scan_id=" + 0).then((res) => {
        Object.values(res.data).forEach((res) => {
          this.os = res.os.split(" ")[0];

          if (this.os === "Windows") {
            this.osCount["windows"] += 1;
          } else this.osCount["unix"] += 1;
        });
        this.reRender++;
      });
    },
  },
  components: {
    ApexBarCharts: () =>
      import("@/views/charts/apexcharts/type-chart/ApexBarCharts.vue"),
    ApexPieCharts: () =>
      import("@/views/charts/apexcharts/type-chart/ApexPieCharts.vue"),
  },
};
</script>

<style>
</style>
 