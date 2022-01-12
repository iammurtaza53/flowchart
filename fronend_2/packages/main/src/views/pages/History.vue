<template>
  <v-container>
    <BaseCard heading="HISTORY">
      <TableSimpleDense :userData="userData"></TableSimpleDense>
    </BaseCard>
  </v-container>
</template>
<script>
export default {
  components: {
    TableSimpleDense: () =>
      import("@/views/tables/table-simple/table-data/TableSimpleDense.vue"),
  },
  data: () => ({
    userData: [
      {
        userId: 1,
        userName: "Murtaza",
        userEmail: "helloworld@flowcharts.com",
        scanId: "abd-001",
      },
    ],
  }),
};
</script>