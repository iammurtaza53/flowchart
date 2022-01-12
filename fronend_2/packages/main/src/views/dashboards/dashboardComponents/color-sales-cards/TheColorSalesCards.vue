<template>
  <v-row>
    <v-col
      cols="12"
      lg="3"
      sm="6"
      v-for="revenuecard in revenuecards"
      :revenuecard="revenuecard"
      :key="revenuecard.revenuecardtitle"
      class="py-0 mb-7"
    >
      <v-card :class="revenuecard.bgcolor" class="rounded-0">
        <v-card-text class="px-5 py-6">
          <div class="d-flex align-center">
            <img
              class="img-fluid"
              :src="require(`@/assets/images/icon/${revenuecard.rimg}`)"
            />

            <div class="ml-4 mr-1">
              <h5 class="subtitle-1 white--text">
                {{ revenuecard.title }}
              </h5>
              <h2 class="white--text font-weight-regular">
                {{ revenuecard.number }}
              </h2>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TheColorSalesCards",
  data: () => ({
    revenuecards: [
      {
        bgcolor: "info",
        title: "Total Income",
        rimg: "income-w.png",
        number: "953,000",
      },
      {
        bgcolor: "success",
        title: "Total Expense",
        rimg: "expense-w.png",
        number: "236,000",
      },
      {
        bgcolor: "deep-purple accent2",
        title: "Total Assets",
        rimg: "assets-w.png",
        number: "987,563",
      },
      {
        bgcolor: "red lighten-1",
        title: "Total Staff",
        rimg: "staff-w.png",
        number: "987,563",
      },
    ],
  }),
  components: {},
};
</script>