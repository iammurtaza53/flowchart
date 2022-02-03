<template>
  <v-card>
    <v-card-title>REGISTER USER </v-card-title>
    <v-spacer></v-spacer>
    <v-container width="5vh">
      <v-row align="center" justify="center" dense>
        <v-col cols="12" lg="6" md="6">
          <v-form ref="userData">
            <v-text-field
              label="First Name"
              :rules="[
                (validate) => !!validate || 'Please fill the required field',
              ]"
              outlined
              solo
              v-model="userData.firstName"
            ></v-text-field>
            <v-text-field
              label="Last Name"
              :rules="[
                (validate) => !!validate || 'Please fill the required field',
              ]"
              outlined
              solo
              v-model="userData.lastName"
            ></v-text-field>
            <v-text-field
              type="password"
              :rules="[
                (validate) => !!validate || 'Please fill the required field',
                (validate) =>
                  (validate && validate.length >= 8) ||
                  'Password length should be greater then 8 characters',
              ]"
              label="Password"
              outlined
              solo
              v-model="userData.password"
            ></v-text-field>
            <v-text-field
              type="email"
              :rules="[
                (validate) => !!validate || 'E-mail is required',
                (validate) =>
                  /.+@.+\..+/.test(validate) || 'E-mail must be valid',
              ]"
              label="Email"
              outlined
              solo
              v-model="userData.email"
            ></v-text-field>
            <v-row align="center" justify="center" dense>
              <v-col cols="12" lg="6" md="6">
                <v-card-actions>
                  <v-btn
                    :disabled="submitted"
                    class="float-sm-end white--text"
                    color="#127c62"
                    @click="register()"
                    >Add User</v-btn
                  >
                </v-card-actions>
              </v-col></v-row
            >
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import repository from "../../store/repository";
export default {
  data() {
    return {
      userData: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        submitted: false,
      },
    };
  },
  methods: {
    register() {
      if (this.$refs.userData.validate()) {
        this.submitted = true;
        repository.post("register/", this.userData).then((res) => {
          if (res["status"] == 200) {
            this.userData = {};
            this.$refs.userData.resetValidation();
          } else {
            console.log(res["message"]);
          }
          this.submitted = false;
        });
        this.$refs.userData.resetValidation();
      }
    },
  },
};
</script>

<style scoped>
.v-text-field {
  min-width: 0px;
  width: 70%;
  border-radius: 10px;
}
.v-text-field--outlined >>> fieldset {
  border-color: #1d2228;
  border-radius: 10px;
}
.text-input-blue .v-text-field__slot input {
  color: #00f !important;
}
.theme--dark.v-text-field--outlined >>> fieldset {
  border-color: #398bf7;
}
</style>