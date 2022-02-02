<template>
  <v-card class="info mb-7 w-100">
    <v-card-text class="pa-7">
      <div class="d-flex">
        <div class="stats">
          <h1 class="white--text font-weight-regular">3257+</h1>
          <h6 class="white--text body-1 mt-3">Twitter Followers</h6>
          <v-btn depressed rounded class="mt-4 body-1 text-capitalize">
            Check list
          </v-btn>
        </div>
        <div class="stats-icon text-right ml-auto">
          <i class="fab fa-twitter display-5 white--text"></i>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TheFollowerCardA",
  data: () => ({}),
};
</script>