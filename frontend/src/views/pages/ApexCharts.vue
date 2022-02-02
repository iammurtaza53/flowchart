<template>
  <v-container fluid class="down-top-padding">
    <v-row v-show="elementVisible">
      <v-col cols="12" sm="12" lg="6">
        <ApexBarCharts :series="risk" :key="reRender"></ApexBarCharts>
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
    riskCount: {
      High: 0,
      Medium: 0,
      Low: 0,
      Informational: 0,
    },
    risk: [{ data: [] }],
  }),

  created() {
    setTimeout(() => (this.elementVisible = true), 1000);
    this.get_host_data();
    this.get_severity_data();
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
    get_severity_data() {
      repository.get("get-risk-severity/?scan_id=" + 0).then((res) => {
        res.data.forEach((e) => {
          if (e.risk == "Informational") {
            this.riskCount["Informational"] =
              this.riskCount["Informational"] + 1;
          }
          if (e.risk == "High") {
            this.riskCount["High"] = this.riskCount["High"] + 1;
          }
          if (e.risk == "Medium") {
            this.riskCount["Medium"] = this.riskCount["Medium"] + 1;
          }
          if (e.risk == "Low") {
            this.riskCount["Low"] = this.riskCount["Low"] + 1;
          }
        });

        this.risk[0]["data"] = [
          this.riskCount["Informational"],
          this.riskCount["Low"],
          this.riskCount["Medium"],
          this.riskCount["High"],
        ];

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
 