<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TableSimpleDense -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <!-- <v-list-item-subtitle class="text-wrap"> USER DATA </v-list-item-subtitle> -->
    <div class="mt-5">
      <v-simple-table dense class="border">
        <template v-slot:default>
          <thead>
            <tr>
              <!-- <th class="text-left">User ID</th>
              <th class="text-left">Name</th>
              <th class="text-left">Email</th> -->
              <!-- <th class="text-left">Scan ID</th>
              <th class="text-left">Actions</th> -->
              <th
                v-for="header in tableHeaders"
                :key="header"
                class="text-left"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <!-- <td>{{ item.userId }}</td>
              <td>{{ item.userName }}</td>
              <td>{{ item.userEmail }}</td> -->
              <td class="display-2">{{ item.scan_id }}</td>
              <td>
                <v-btn
                  color="#2b568f"
                  class="
                    button-shape
                    mt-md-1
                    mb-md-1
                    ml-n2
                    pl-md-4
                    pr-md-4
                    pt-md-1
                    pb-md-1
                    white--text
                  "
                  height="5vh"
                  @click="
                    store_scanid(item.scan_id);
                    show != show;
                  "
                  >SCAN</v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <v-tooltip dark top v-model="show">helloworld</v-tooltip>
  </div>
</template>

<script>
export default {
  name: "TableSimpleDense",
  props: ["data", "tableHeaders"],
  data: () => ({
    show: false,
    headers: ["SCAN ID", "ACTION"],
  }),
  methods: {
    store_scanid(scan_id) {
      localStorage.setItem("scan_id", scan_id);
      this.$router.push({ name: "Analysis Charts" });
      this.$store.dispatch("set_scanid", scan_id);
      this.$store.dispatch("display_message");
    },
  },
};
</script>
<style scoped>
.button-shape {
  border-radius: 75px;
}
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
  background: none;
}
.theme--dark.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
  background: none;
}
</style>