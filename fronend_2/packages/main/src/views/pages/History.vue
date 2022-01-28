<template>
  <v-container>
    <BaseCard heading="HISTORY">
      <v-btn color="primary" @click="scan()"> SCAN IDs</v-btn>
      <TableSimpleDense
        :userData="userData"
        :tableHeaders="headers"
      ></TableSimpleDense>
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
    headers: ["SCAN ID", "ACTION"],
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
    scan() {
      var url = "http://localhost:8000/scan/";
      axios.get(url).then((res) => {
        console.log(res.data["message"]);
        //   res.data["scan"].forEach((messgae) => {
        // console.log(messgae)
        //   });
      });
    },
  },
  created() {
    this.get_scan_ids();
  },
};
</script>