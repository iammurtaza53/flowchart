<template>
  <v-container>
    <BaseCard heading="Critical Assets">
      <v-textarea label="IP" v-model="ip"></v-textarea>
      <v-btn color="primary" @click="post_criticalassets_data()">
        INSERT IPs
      </v-btn>
    </BaseCard>

    <BaseCard>
      <DataTable
        :data="tableData"
        :tableHeaders="tableHeader"
        :loading="loading"
      ></DataTable>
    </BaseCard>
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
      { text: "ID", value: "ip_id" },
      { text: "IP", value: "ip" },
    ],
    tableData: [],
    loading: false,
    ip: null,
  }),

  methods: {
    post_criticalassets_data() {
      var ipSet = this.ip.split(",");
      var data = [];
      ipSet.forEach((IP) => {
        data.push({ ip: IP });
      });
      repository.post("critical-assets/", data).then((res) => {
        this.ip = null;
        this.get_critical_assets_data();
      });
    },

    get_critical_assets_data() {
      this.loading = true;
      repository.get("critical-assets/").then((res) => {
        this.tableData = res["ip_set"];
        this.loading = false;
      });
    },
  },

  created() {
    this.get_critical_assets_data();
  },
};
</script>