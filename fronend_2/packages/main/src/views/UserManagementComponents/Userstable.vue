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
          :items="userData"
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
  props: ["tableHeaders", "userData", "loading"],
  data: () => ({
    search: "",
  }),
};
</script>