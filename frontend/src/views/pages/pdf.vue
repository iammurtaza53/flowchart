<template>
  <v-container>
    <BaseCard heading="FINDINGS">
      <div class="my-2">
        <v-btn color="warning" @click="exportReport()">Save PDF</v-btn>
      </div>

      <PDFTable
        id="print"
        :data="tableData"
        :tableHeaders="tableHeaders"
        :loading="loading"
      ></PDFTable>
    </BaseCard>
  </v-container>
</template>

<script>
import repository from "../../store/repository";

export default {
  components: {
    PDFTable: () => import("@/views/pages/pdfTable.vue"),
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
      const options = {
        styles: [
          "https://cdnjs.cloudflare.com/ajax/libs/vuetify/2.6.4/vuetify.min.js",
          "https://cdnjs.cloudflare.com/ajax/libs/vuetify/3.0.0-beta.0/vuetify.css",
          "https://cdnjs.cloudflare.com/ajax/libs/vuetify/2.6.4/vuetify.css",
        ],
      };
      this.$htmlToPaper("print", options);
    },
  },

  created() {
    this.get_findings_table();
  },
};
</script>
<style scoped>
</style>