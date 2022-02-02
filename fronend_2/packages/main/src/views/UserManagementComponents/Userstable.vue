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
          :items="data"
          :search="search"
          class="border"
          :loading="loading"
          loading-text="FETCHING USERS"
        >
          <template v-slot:body="{ items }" v-if="click_row">
            <tbody>
              <tr
                v-for="(item, index) in items"
                :key="index"
                @click="clicked_row(item)"
              >
                <td>{{ item.name }}</td>
                <td>{{ item.risk }}</td>
                <td>{{ item.count }}</td>
                <td>{{ item.attackmitre }}</td>
                <td>{{ item.sia }}</td>
              </tr>
            </tbody>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllUser",
  props: ["tableHeaders", "data", "loading", "click_row"],
  data: () => ({
    search: "",
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