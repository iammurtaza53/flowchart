<template>
  <v-container>
    <BaseCard heading="USER MANAGEMENT">
      <DataTable :data="users" :tableHeaders="headers" :loading="loading">
      </DataTable>
    </BaseCard>
  </v-container>
</template>

<script>
import repository from "../../store/repository";
export default {
  components: {
    DataTable: () => import("@/views/pages/UserManagementTable.vue"),
  },
  data: () => ({
    users: [],
    headers: [
      { text: "FIRST NAME", value: "first_name" },
      { text: "LAST NAME", value: "last_name" },
      { text: "EMAIL", value: "email" },
      { text: "ACTION", value: "" },
    ],
    loading: true,
  }),
  computed: {},
  methods: {
    
    get_all_users() {
      repository.get("users/").then((res) => {
        this.users = res.data;
        this.loading = false;
      });
    },



  },

  created() {
    this.get_all_users();
  },
};
</script>