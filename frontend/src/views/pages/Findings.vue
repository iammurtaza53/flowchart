<template>
  <v-container>
    <BaseCard heading="FINDINGS">
      <UserTable
        :data="tableData"
        :tableHeaders="tableHeaders"
        :loading="loading"
        :click_row="true"
      ></UserTable>
    </BaseCard>
  </v-container>
</template>

<script>
import repository from "../../store/repository";

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
      repository.get("findings/").then((res) => {
        this.tableData = res["findings_data"];
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