<template>
  <v-container>
    <BaseCard heading="Critical Assets">
      <v-textarea label="IP" v-model="ip"></v-textarea>
      <v-btn color="primary" @click="post_criticalassets_data()">
        INSERT IPs
      </v-btn>
    </BaseCard>

    <BaseCard>
      <IpTable
        :userData="tableData"
        :tableHeaders="tableHeader"
        :loading="loading"
      ></IpTable>
    </BaseCard>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  components: {
    IpTable: () => import("@/views/UserManagementComponents/Userstable.vue"),
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
      var url = this.$store.state.baseUrl + "critical-assets/";
      axios.post(url, data).then((res) => {
        console.log(res.data["message"]);
        this.ip = null;
        this.get_criticalassets_data();
      });
    },

    get_criticalassets_data() {
      this.loading=true
      var url = this.$store.state.baseUrl + "critical-assets/";
      axios.get(url).then((res) => {
        this.tableData = res.data["ip_set"];
        this.loading = false;
      });
    },
  },

  created() {
    this.get_criticalassets_data();
  },
};
</script>