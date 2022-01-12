<template>
  <v-card class="mb-7 w-100 fbcolor">
    <v-card-text class="pa-7">
      <div class="d-flex">
        <div class="stats">
          <h1 class="white--text font-weight-regular">6509+</h1>
          <h6 class="white--text body-1 mt-3">Facebook Likes</h6>
          <v-btn depressed rounded class="mt-4 body-1 text-capitalize">
            Check list
          </v-btn>
        </div>
        <div class="stats-icon text-right ml-auto">
          <i class="fab fa-facebook-f display-5 white--text"></i>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TheFollowerCardB",
  data: () => ({}),
};
</script>

<style>
  .theme--light.v-card.fbcolor, .theme--dark.v-card.fbcolor{
    background-color: #5158d8!important;
  }
</style>