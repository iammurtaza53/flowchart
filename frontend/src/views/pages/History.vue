<template>
  <v-container>
    <BaseCard heading="HISTORY">
      <TableSimpleDense
        :data="scans"
        :tableHeaders="headers"
      ></TableSimpleDense>
    </BaseCard>
  </v-container>
</template>

<script>
import repository from "../../store/repository";
export default {
  components: {
    TableSimpleDense: () =>
      import("@/views/tables/table-simple/table-data/TableSimpleDense.vue"),
  },
  data: () => ({
    scans: [],
    headers: ["SCAN ID", "ACTION"],
  }),
  computed: {},
  methods: {
    get_scan_ids() {
      repository.get("scans/").then((res) => {
        this.scans = res["scans"];
      });
    },
  },
  created() {
    this.get_scan_ids();
  },
};
</script>