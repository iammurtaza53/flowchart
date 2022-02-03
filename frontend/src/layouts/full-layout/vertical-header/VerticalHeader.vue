<template>
  <v-app-bar
    app
    clipped-left
    clipped-right
    :color="navbarColor"
    :dark="navbarColor !== 'white'"
  >
    <v-toolbar-title class="align-center d-flex">
      <span> Flowchart </span>
    </v-toolbar-title>
    <!---/Toggle sidebar part -->
    <div>
      <v-app-bar-nav-icon
        @click="
          $vuetify.breakpoint.smAndDown
            ? setSidebarDrawer(!Sidebar_drawer)
            : $emit('input', !value)
        "
      />
    </div>
    <!-- showw scan id  -->
    <!-- <span class="justify display-2" v-if="$store.state.displayMessage">{{
      $store.state.displayMessage
    }}</span> -->
    <!-- show scan id -->
    <v-spacer />

    <v-spacer />
    <!---right part -->

    <!---User -->
    <v-btn icon class="mr-1 d-sm-block" @click="logout()"> Logout </v-btn>

    <!---User -->
  </v-app-bar>
</template>
<script>
// Utilities
import { mapState, mapMutations } from "vuex";
export default {
  name: "VerticalHeader",

  components: {},

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    userDetails: {},

    userprofile: [{ title: "Logout", to: "/" }],
  }),

  computed: {
    ...mapState(["navbarColor", "Sidebar_drawer"]),
  },

  methods: {
    ...mapMutations({
      setSidebarDrawer: "SET_SIDEBAR_DRAWER",
    }),
    set_userDetail() {
      this.userDetails = JSON.parse(localStorage.getItem("user"));
    },
    logout() {
      this.$router.push("/");
    },
  },

  created() {
    this.set_userDetail();
  },
};
</script>

<style lang="scss">
.v-application .theme--dark.white .theme--dark.v-btn.v-btn--icon {
  color: $font-color !important;
}

.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined),
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: $box-shadow;
}

.v-btn--icon.v-size--default .v-icon {
  width: 20px;
  font-size: 20px;
}

.hidelogo {
  display: none;
}

.searchinput {
  position: absolute;
  width: 100%;
  margin: 0;
  left: 0;
  z-index: 10;
  padding: 0 15px;
}

.descpart {
  max-width: 220px;
}
</style>