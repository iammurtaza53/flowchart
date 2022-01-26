<template>
  <v-container id="login" class="fill-height justify-center" tag="section" dark>
    <v-row justify="center">
      <v-col lg="11" sm="8" xl="7">
        <v-card class="elevation-4">
          <v-row>
            <v-col
              lg="7"
              class="info d-none d-md-flex align-center justify-center"
            >
              <div class="d-none d-sm-block">
                <div class="d-flex align-center pa-10">
                  <div>
                    <h2 class="display-1 white--text font-weight-medium">
                      Elegant Design with unlimited features, built with love
                    </h2>
                    <h6
                      class="
                        subtitle-1
                        mt-4
                        white--text
                        op-5
                        font-weight-regular
                      "
                    >
                      Wrappixel helps developers to build organized and
                      well-coded admin dashboards full of beautiful and feature
                      rich modules.
                    </h6>
                    <v-btn
                      class="mt-4 text-capitalize"
                      x-large
                      outlined
                      color="white"
                      >Learn More</v-btn
                    >
                  </div>
                </div>
              </div>
            </v-col>
            <v-col lg="5">
              <div class="pa-7 pa-sm-12">
                <img src="@/assets/images/logo-icon.png" />
                <h2
                  class="font-weight-bold mt-4 blue-grey--text text--darken-2"
                >
                  Sign in
                </h2>
                <h6 class="subtitle-1">
                  Don't have an account?
                  <a href="#/pages/boxedregister" class>Sign Up</a>
                </h6>

                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="userAuthentication.email"
                    :rules="emailRules"
                    label="E-mail"
                    class="mt-4"
                    required
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="userAuthentication.password"
                    :rules="passwordRules"
                    label="Password"
                    required
                    outlined
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>

                  <div class="d-block d-sm-flex align-center mb-4 mb-sm-0">
                    <v-checkbox v-model="checkbox" label="Remember me?">
                    </v-checkbox>
                    <div class="ml-auto">
                      <a href="javascript:void(0)" class="link">Forgot pwd?</a>
                    </div>
                  </div>
                  <v-btn
                    :disabled="!valid"
                    color="info"
                    block
                    class="mr-4"
                    @click="authenticate_user()"
                    >Sign In</v-btn
                  >
                </v-form>
                <div class="text-center mt-6">
                  <v-chip pill class="mr-2">
                    <v-avatar left>
                      <v-btn color="blue lighten-1" class="white--text">
                        <v-icon>mdi-twitter</v-icon>
                      </v-btn> </v-avatar
                    >Twitter
                  </v-chip>
                  <v-chip pill>
                    <v-avatar left>
                      <v-btn color="teal lighten-2" class="white--text">
                        <v-icon>mdi-github</v-icon>
                      </v-btn> </v-avatar
                    >Github
                  </v-chip>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "BoxedLogin",

  data: () => ({
    userAuthentication: {
      email: "johndoe@gmail.com",
      password: "iamjohndoe",
    },
    showPassword: false,
    valid: true,

    // show1: false,
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length <= 10) || "Password must be less than 10 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    checkbox: false,
  }),
  computed: {},
  methods: {
    authenticate_user() {
      this.$refs.form.validate();
      if (this.$refs.form.validate(true)) {
        axios
          .post(
            "http://localhost:8000/authenticate-user/",
            this.userAuthentication
          )
          .then((res) => {
            if (res.data["status"] === 200) { 
              console.log(res.data["message"]);
              localStorage.setItem("user", this.userAuthentication.email);
              this.$router.push({ path: "/charts/apexcharts" });
            } else console.log(res.data["message"]);
          });
      }
    },
  },
};
</script>
