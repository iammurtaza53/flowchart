<template>
  <v-card>
    <v-card-title> USER MANAGEMENT </v-card-title>
    <v-spacer></v-spacer>
    <v-container width="5vh">
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
            (validate) => /.+@.+\..+/.test(validate) || 'E-mail must be valid',
          ]"
          label="Email"
          outlined
          solo
          v-model="userData.email"
        ></v-text-field>
        <v-card-actions>
          <v-btn
            class="float-sm-end white--text"
            color="#127c62"
            @click="user_data()"
            >Add User</v-btn
          >
        </v-card-actions>
      </v-form>
    </v-container>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      userData: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
      },
      emptyField: false,
    };
  },
  methods: {
    user_data() {
      Object.values(this.userData).forEach((field) => {
        if (field === null) 
        this.emptyField = true;
      });
      if (this.emptyField) {
        this.$refs.userData.validate();
      } else {

        let url = "http://localhost:8000/register-user-data/";   
        axios.post(url, this.userData).then((res) => {
        
        if (res["status"] == 200) 
        console.log(res['message']);
        
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
}
.v-text-field--outlined >>> fieldset {
  border-color: #1d2228;
}
</style>