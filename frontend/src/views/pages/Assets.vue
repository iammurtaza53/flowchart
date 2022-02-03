<template>
  <v-container>
    <BaseCard heading="Assets">
      <v-btn color="primary" @click="download_csv()">CONVERT TO CSV</v-btn>
    </BaseCard>

    <BaseCard>
      <DataTable
        :data="tableData"
        :tableHeaders="tableHeader"
        :loading="loading"
      ></DataTable>
    </BaseCard>

    <v-snackbar v-model="snackbar" timeout="4000">
      File has been Downloaded Successfully
      <v-btn color="info" text @click="snackbar = false"> Close </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import repository from "../../store/repository";
export default {
  components: {
    DataTable: () => import("@/views/pages/DataTable.vue"),
  },
  data: () => ({
    tableHeader: [
      { text: "Host", value: "host" },
      { text: "Hostname", value: "hostname" },
      { text: "OS", value: "os" },
      { text: "Subnet", value: "subnet" },
      { text: "Compromised", value: "compromised" },
    ],
    tableData: [],
    loading: false,
    snackbar: false,
  }),
  methods: {
    download_csv() {
      let scan_id = localStorage.getItem("scan_id");
      repository.downloadReport("download/?scan_id=" + scan_id).then((res) => {
        this.snackbar = true;
      });
    },
    generate_table() {
      let scan_id = localStorage.getItem("scan_id");
      this.loading = true;
      repository.get("get-final-hosts/?scan_id=" + scan_id).then((res) => {
        this.loading = false;
        this.tableData = res.data;
      });
    },
  },
  created() {
    this.generate_table();
  },
};
</script>