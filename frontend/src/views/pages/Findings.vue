<template>
  <v-container>
    <BaseCard heading="FINDINGS">
      <div class="my-2">
        <v-btn color="warning" @click="exportReport()">Export Report</v-btn>
      </div>

      <FindingsTable
        :data="tableData"
        :tableHeaders="tableHeaders"
        :loading="loading"
        :click_row="true"
      ></FindingsTable>
    </BaseCard>
  </v-container>
</template>

<script>
import repository from "../../store/repository";

export default {
  components: {
    FindingsTable: () => import("@/views/pages/FindingsTable.vue"),
  },
  data: () => ({
    tableData: [],
    tableHeaders: [
      { text: "Issuse Name", value: "name" },
      { text: "Risk", value: "risk" },
      { text: "Count", value: "count" },
      { text: "Attack Mitre", value: "attackmitre" },
      { text: "SIA", value: "sia" },
    ],
    loading: false,
  }),

  methods: {
    get_findings_table() {
      this.loading = true;
      let scan_id = localStorage.getItem("scan_id");
      repository.get("findings/?scan_id=" + scan_id).then((res) => {
        this.tableData = res["findings_data"];
        this.loading = false;
      });
    },
    exportReport() {
      repository.get("export-report/").then((res) => {
        console.log(res);
      });
    },
  },

  created() {
    this.get_findings_table();
  },
};
</script>
<style scoped>
</style>