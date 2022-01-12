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
      <v-card>
        <v-card-text class="pa-5">
          <div class="d-flex align-center">
            <span class="lstick"></span>
            <img
              class="img-fluid"
              :src="require(`@/assets/images/icon/${revenuecard.rimg}`)"
            />

            <div class="ml-4 mr-1">
              <h5 class="subtitle-1 grey--text">
                {{ revenuecard.title }}
              </h5>
              <!-- <h2 class="grey--text text--darken-4 font-weight-regular"> -->
              <h2 class="font-weight-regular">
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
  name: "TheSalesCards",
  data: () => ({
    revenuecards: [
      {
        title: "Total Income",
        rimg: "income.png",
        number: "953,000",
      },
      {
        title: "Total Expense",
        rimg: "expense.png",
        number: "236,000",
      },
      {
        title: "Total Assets",
        rimg: "assets.png",
        number: "987,563",
      },
      {
        title: "Total Staff",
        rimg: "staff.png",
        number: "987,563",
      },
    ],
  }),
  components: {},
};
</script>