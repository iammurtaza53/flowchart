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
              <th class="text-left">User ID</th>
              <th class="text-left">Name</th>
              <th class="text-left">Email</th>
              <th class="text-left">Scan ID</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in userData" :key="item.userId">
              <td>{{ item.userId }}</td>
              <td>{{ item.userName }}</td>
              <td>{{ item.userEmail }}</td>
              <td>{{ item.scanId }}</td>
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
  props: ["userData"],
  data: () => ({
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
};
</script>