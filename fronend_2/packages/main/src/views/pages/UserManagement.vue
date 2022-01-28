<template>
  <v-container>
    <BaseCard heading="USER MANAGEMENT">
      <UserTable
        :userData="userData"
        :tableHeaders="headers"
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
    userData: [],
    headers: [
      { text: "FIRST NAME", value: "user_firstname" },
      { text: "LAST NAME", value: "user_lastname" },
      { text: "EMAIL", value: "email" },
    ],
    loading: true,
  }),
  computed: {},
  methods: {

    get_all_users() {
      var url = "http://localhost:8000/get-all-registered-users/";
      axios.get(url).then((res) => {
        var data = res.data.data;
        data.forEach((user) => {
          this.userData.push(user);
        });
        this.loading = false;
      });
    },
  },

  created() {
    this.get_all_users();
  },
};
</script>