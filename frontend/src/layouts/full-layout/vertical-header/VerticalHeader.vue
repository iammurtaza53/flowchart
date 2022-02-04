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
    <!-- <v-row justify="end">
      <v-col cols="6" class="text-right"> -->
    <v-btn icon @click="resetPasswordDialog = true" class="mr-15">
      Reset Password
    </v-btn>
    <!-- </v-col> -->
    <!-- <v-col cols="6" class="text-right"> -->
    <v-btn icon @click="logout()" class="mr-4"> Logout </v-btn>
    <!-- </v-col>
    </v-row> -->
    <!---User -->

    <v-dialog
      outlined
      v-model="resetPasswordDialog"
      width="50vh"
      heigth="33vh"
      :hide-overlay="false"
    >
      <v-card
        min-width="45vh"
        width="48vh"
        min-height="40vh"
        height="34vh"
        flat
      >
        <v-card-title> RESET PASSWORD </v-card-title>
        <v-row justify="center">
          <v-col cols="12" lg="10" md="10">
            <v-form>
              <v-text-field
                :rules="passwordRules"
                v-model="newPassword"
                class="mt-md-4"
                label="Password"
                placeholder="Enter New Password"
              >
              </v-text-field>
            </v-form>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" lg="6" md="6">
            <v-card-actions>
              <v-btn
                @click="resetPassword()"
                color="primary"
                :disabled="!newPassword"
                >Reset Password</v-btn
              >
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="responseMessage" :timeout="timeout">
      The password has been updated
    </v-snackbar>
  </v-app-bar>
</template>
<script>
// Utilities
import repository from "../../../store/repository";
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
    passwordRules: [
      (v) =>
        (v && v.length >= 5) ||
        "Password must be greater than or equals 5 characters",
    ],
    timeout: 2000,
    responseMessage: null,
    newPassword: null,
    userDetails: {},
    resetPasswordDialog: false,
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
      localStorage.removeItem("user");
      this.$router.push("/");
    },
    resetPassword() {
      // var url = `reset-password/`;
      this.resetPasswordDialog = false;
      var data = {
        username: this.userDetails.username,
        password: this.newPassword,
      };
      repository.patch(`reset-password/`, data).then((res) => {
        this.newPassword = null;
        this.responseMessage = true;
      });
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