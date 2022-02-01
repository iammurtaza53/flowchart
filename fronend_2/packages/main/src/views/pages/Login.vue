<template style="background-color: #90caf9">
  <v-sheet style="background-color: #53575b">
    <v-row align="center" justify="center" style="height: 100vh" dense>
      <v-col cols="12" lg="4" md="6">
        <v-card
          min-width="70vh"
          width="70vh"
          min-height="60vh"
          outlined
          flat
          shaped
          elevation="24"
          style="background-color: #1d2228; color: #90caf9"
        >
          <v-card-title class="justify-center pt-md-13 display-4">
            WELCOME !
          </v-card-title>
          <v-card-subtitle class="pt-md-7">
            <v-text-field
              dark
              type="email"
              label="User Email"
              v-model="userAuthentication.email"
              class="pa-md-7 text-green"
              color=" #90caf9"
            >
            </v-text-field>
            <v-text-field
              dark
              type="password"
              label="User Password"
              v-model="userAuthentication.password"
              class="pa-md-7"
            >
            </v-text-field>
          </v-card-subtitle>
          <v-card-actions class="justify-center">
            <v-btn
              @click="authenticate_user()"
              style="
                border-radius: 16px;
                background-color: #127c62;
                color: #ffffff;
              "
              width="20vh"
              height="5vh"
              class="display-2"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    userAuthentication: {
      email: "johndoe@gmail.com",
      password: "iamjohndoe"
    },
  }),
  methods: {
    authenticate_user() {
      axios
        .post(
          "http://localhost:8000/authenticate-user/",
          this.userAuthentication
        )
        .then((res) => {
          if (res.data["status"] === 200) {
            var url = "http://localhost:8000/get-scanids/";
            axios.get(url).then((res) => {
              var that = this;
              res.data["scan-id"].forEach((scanid) => {
                this.userData.push(scanid);
              });
              consoel.log(this.userData);
            });
            console.log(res.data["message"]);
            this.$router.push({ path: "dashboard" });
          } else console.log(res.data["message"]);
        });
    },
  },
};
</script>
<style scoped>
</style>