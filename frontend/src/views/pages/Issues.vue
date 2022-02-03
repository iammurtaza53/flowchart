<template>
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
          v-if="issue != 'issue7'"
          :headers="issueHeaders"
          :items="data"
          :search="search"
          class="border"
          :loading="loading"
          loading-text="FETCHING USERS"
        >
        </v-data-table>
        <v-data-table
          v-else
          :headers="issue7Headers"
          :items="data"
          :search="search"
          class="border"
          :loading="loading"
          loading-text="FETCHING USERS"
        >
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllUser",
  props: ["data", "loading", "issue"],
  data: () => ({
    search: "",
    issue7Headers: [
      { text: "Host", value: "host" },
      { text: "User", value: "user" },
      { text: "Password", value: "password" },
    ],
    issueHeaders: [{ text: "Host", value: "host" }],
  }),
  methods: {
    clicked_row(row) {
      this.$router.push({
        name: "Subnets",
        params: { issue: row.name },
      });
    },
  },
};
</script>