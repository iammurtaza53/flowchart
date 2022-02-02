<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5">
      <span class="lstick"></span>
      <h3 class="font-weight-regular title">Feeds</h3>
      <div class="d-flex align-center pb-2 mt-5">
        <div>
          <v-btn
            class="mr-2 elevation-0 blue lighten-4 blue--text text--darken-1 body-1"
            fab
            dark
            small
          >
            <i class="far fa-bell"></i>
          </v-btn>
        </div>
        <div class="mx-2 subtitle-1">You have 4 pending tasks.</div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <span class="subtitle-2">Just Now</span>
        </div>
      </div>
      <div class="d-flex align-center py-2">
        <div>
          <v-btn
            class="mr-2 elevation-0 green lighten-4 green--text text--darken-1 body-1"
            fab
            dark
            small
          >
            <i class="ti-server"></i>
          </v-btn>
        </div>
        <div class="mx-2 subtitle-1">Server #1 overloaded</div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <span class="subtitle-2">2 Hours ago</span>
        </div>
      </div>
      <div class="d-flex align-center py-2">
        <div>
          <v-btn
            class="mr-2 elevation-0 amber lighten-4 amber--text text--darken-1 body-1"
            fab
            dark
            small
          >
            <i class="ti-shopping-cart"></i>
          </v-btn>
        </div>
        <div class="mx-2 subtitle-1">New order received.</div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <span class="subtitle-2">31 May </span>
        </div>
      </div>
      <div class="d-flex align-center py-2">
        <div>
          <v-btn
            class="mr-2 elevation-0 red lighten-4 red--text text--darken-1 body-1"
            fab
            dark
            small
          >
            <i class="ti-user"></i>
          </v-btn>
        </div>
        <div class="mx-2 subtitle-1">New user registered.</div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <span class="subtitle-2">30 May </span>
        </div>
      </div>
      <div class="d-flex align-center py-2">
        <div>
          <v-btn
            class="mr-2 elevation-0 indigo lighten-4 indigo--text text--darken-1 body-1"
            fab
            dark
            small
          >
            <i class="ti-user"></i>
          </v-btn>
        </div>
        <div class="mx-2 subtitle-1">New Version just arrived.</div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <span class="subtitle-2">27 May </span>
        </div>
      </div>
      <div class="d-flex align-center py-2">
        <div>
          <v-btn
            class="mr-2 elevation-0 deep-purple lighten-4 deep-purple--text text--darken-1 body-1"
            fab
            dark
            small
          >
            <i class="far fa-bell"></i>
          </v-btn>
        </div>
        <div class="mx-2 subtitle-1">You have 4 pending tasks.</div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <span class="subtitle-2">09 July </span>
        </div>
      </div>
      <div class="d-flex align-center py-2">
        <div>
          <v-btn
            class="mr-2 elevation-0 green lighten-4 green--text text--darken-1 body-1"
            fab
            dark
            small
          >
            <i class="far fa-bell"></i>
          </v-btn>
        </div>
        <div class="mx-2 subtitle-1">New Version just arrived.</div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <span class="subtitle-2">16 Aug </span>
        </div>
      </div>
      <div class="d-flex align-center py-2">
        <div>
          <v-btn
            class="mr-2 elevation-0 dark lighten-4 dark--text text--darken-1 body-1"
            fab
            dark
            small
          >
            <i class="far fa-bell"></i>
          </v-btn>
        </div>
        <div class="mx-2 subtitle-1">You have 4 pending tasks.</div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <span class="subtitle-2">01 June </span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TheFeeds",
  data: () => ({}),
};
</script>