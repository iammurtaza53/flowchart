<template>
  <v-container>
    <BaseCard heading="FINDINGS">
      <UserTable
        :userData="tableData"
        :tableHeaders="tableHeaders"
        :loading="loading"
      ></UserTable>
    </BaseCard>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  components: {
    UserTable: () => import("@/views/UserManagementComponents/Userstable.vue"),
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
      var url = "http://localhost:8000/get-findings-data/";
      axios.get(url).then((res) => {
        this.tableData = res.data["findings_data"];
        this.loading = false;
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