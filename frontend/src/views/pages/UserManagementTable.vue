<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- DatatablesSearch -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <div class="mt-4">
      <v-card>
        <!-- search bar -->
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <!-- search bar  -->
        <v-data-table
          :headers="tableHeaders"
          :items="tableData"
          :search="search"
          class="border"
          :loading="loading"
          loading-text="FETCHING DATA"
        >
          <template v-slot:body="{ items }">
            <tbody>
              <tr v-for="(item, index) in items" :key="index">
                <td>{{ item.first_name }}</td>
                <td>{{ item.last_name }}</td>
                <td>{{ item.email }}</td>
                <td>
                  <v-btn color="primary" @click="delete_user(item.username)"
                    >Delete</v-btn
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>
<script>
import repository from "../../store/repository";
export default {
  name: "AllUser",
  props: ["tableHeaders", "data", "loading"],
  data: () => ({
    search: "",
    render: 0,
    users: [],
  }),
  methods: {
    delete_user(username) {
      repository.delete(`delete-user/?username=${username}`).then((res) => {
        console.log(res.status);
        this.get_all_users();
      });
    },
    get_all_users() {
      repository.get("users/").then((res) => {
        console.log(res.data);
        this.users = res.data;
        this.render++;
      });
    },
  },
  computed: {
    tableData: function () {
      if (this.render === 0) return this.data;
      else {
        return this.users;
      }
    },
  },
};
</script>