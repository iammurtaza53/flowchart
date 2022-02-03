<template>
  <v-container id="login" class="fill-height justify-center" tag="section" dark>
    <v-sheet>
      <v-row justify="center">
        <v-col md="12">
          <v-card class="elevation-4" width="500">
            <div class="pa-7 pa-sm-12">
              <img src="../../assets/images/logo-light-icon.png" />
              <h2 class="font-weight-bold mt-4 blue-grey--text text--darken-2">
                Sign in
              </h2>
              <h6 v-if="response" class="subtitle-1 red--text display-2">
                *{{ response }}
              </h6>

              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="userAuthentication.email"
                  :rules="emailRules"
                  label="E-mail"
                  class="mt-4"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="userAuthentication.password"
                  :rules="passwordRules"
                  label="Password"
                  outlined
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>

                <v-btn
                  :disabled="!valid || submitted"
                  color="info"
                  block
                  class="mr-4"
                  @click="authenticate_user()"
                  >Sign In</v-btn
                >
              </v-form>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
import repository from "../../store/repository";
export default {
  name: "BoxedLogin",

  data: () => ({
    userAuthentication: {
      email: "test@gmail.com",
      password: "12345678",
    },
    showPassword: false,
    valid: true,
    submitted: false,
    response: null,
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length >= 5) ||
        "Password must be greater than or equals 5 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    authenticate_user() {
      this.response = null;
      if (this.$refs.form.validate(true)) {
        this.submitted = true;
        repository.post("login/", this.userAuthentication).then((res) => {
          if (res["status"] == 200) {
            repository.get("scans/").then((resp) => {
              if (resp["scans"]) {
                localStorage.setItem("scan_id", resp["scans"][0].scan_id);
                this.$store.dispatch("set_scanid", resp["scans"][0].scan_id);
              }

              localStorage.setItem("user", JSON.stringify(res["user"]));
              this.$router.push({ path: "/user/charts" });
            });
          } else {
            this.submitted = false;
            this.response = res["message"];
          }
        });
      }
    },
  },
};
</script>
