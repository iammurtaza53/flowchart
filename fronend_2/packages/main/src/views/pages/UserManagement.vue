<template>
  <v-container>
    <BaseCard heading="USER MANAGEMENT">
      <UserTable :userData="userData" :tableHeaders="headers"></UserTable>
    </BaseCard>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  components: {
    UserTable: () => import("@/views/UserManagementComponents/UserTable.vue"),
  },
  data: () => ({
    userData: [],
    headers: ["FIRST NAME", "LAST NAME", "EMAIL"],
  }),
  computed: {},
  methods: {
    get_all_users() {
      var url = "http://localhost:8000/get-all-registered-users/";
      axios.get(url).then((res) => {
        // var that = this;
        var data = res.data.data;
        // console.log(data);
        data.forEach((user) => {
          this.userData.push(user);
        });
      });
    },
  },

  created() {
    this.get_all_users();
  },
};
</script>