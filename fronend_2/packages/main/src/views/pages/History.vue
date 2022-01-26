<template>
  <v-container>
    <BaseCard heading="HISTORY">
      <TableSimpleDense :userData="userData"></TableSimpleDense>
    </BaseCard>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  components: {
    TableSimpleDense: () =>
      import("@/views/tables/table-simple/table-data/TableSimpleDense.vue"),
  },
  data: () => ({
    userData: [],
  }),
  computed: {},
  methods: {
    get_scan_ids() {
      var url = "http://localhost:8000/get-scanids/";
      axios.get(url).then((res) => {
        res.data["scan-id"].forEach((scanid) => {
          this.userData.push(scanid);
        });
      });
    },
  },
  created() {
    this.get_scan_ids();
  },
};
</script>