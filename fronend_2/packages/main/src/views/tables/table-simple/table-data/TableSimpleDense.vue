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
              <th v-for="header in tableHeaders" :key="header" class="text-left">
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in userData" :key="index">
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
                  @click="store_scanid(item.scan_id)"
                  >SCAN</v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableSimpleDense",
  props: ["userData","tableHeaders"],
  data: () => ({
    headers: ["SCAN ID", "ACTION"],
    // desserts: [
    //   {
    //     name: "Frozen Yogurt",
    //     calories: 159
    //   },
    //   {
    //     name: "Ice cream sandwich",
    //     calories: 237
    //   },
    //   {
    //     name: "Eclair",
    //     calories: 262
    //   },
    //   {
    //     name: "Cupcake",
    //     calories: 305
    //   },
    //   {
    //     name: "Gingerbread",
    //     calories: 356
    //   },
    //   {
    //     name: "Jelly bean",
    //     calories: 375
    //   },
    //   {
    //     name: "Lollipop",
    //     calories: 392
    //   },
    //   {
    //     name: "Honeycomb",
    //     calories: 408
    //   },
    //   {
    //     name: "Donut",
    //     calories: 452
    //   },
    //   {
    //     name: "KitKat",
    //     calories: 518
    //   }
    // ]
  }),
  methods: {
    store_scanid(scan_id) {
      console.log("action has been dispatched");
      this.$store.dispatch("set_scanid", scan_id);
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