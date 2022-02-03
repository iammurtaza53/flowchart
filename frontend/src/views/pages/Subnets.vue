<template>
  <v-container>
    <BaseCard heading="Issues">
      <Issues :data="tableData" :loading="loading" :issue="issue"></Issues>
    </BaseCard>
  </v-container>
</template>

<script>
import repository from "../../store/repository";

export default {
  components: {
    Issues: () => import("@/views/pages/Issues.vue"),
  },
  data: () => ({
    tableData: [],
    loading: false,
    issue: "",
  }),

  methods: {
    get_issues(issue) {
      if (issue) {
        this.loading = true;
        this.issue = issue;
        let scan_id = localStorage.getItem("scan_id");
        repository
          .get(
            "get-issues-by-name/?scan_id=" + scan_id + "&issue_name=" + issue
          )
          .then((res) => {
            this.tableData = res["issues"];
            this.loading = false;
          });
      }
    },
  },

  created() {
    this.get_issues(this.$route.params.issue);
  },
};
</script>
<style scoped>
</style>