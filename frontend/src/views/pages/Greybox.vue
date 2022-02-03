<template>
  <v-container>
    <BaseCard heading="Greybox">
      <v-text-field label="Username" v-model="data.username"></v-text-field>
      <v-text-field
        label="Password"
        type="password"
        v-model="data.password"
      ></v-text-field>
      <v-btn color="primary" @click="submit()"> Save </v-btn>
    </BaseCard>
  </v-container>
</template>


<script>
import repository from "../../store/repository";
export default {
  data: () => ({
    data: {
      username: "",
      password: "",
    },
  }),

  methods: {
    submit() {
      repository.post("greybox/", this.data).then((res) => {
        this.data = { username: "" };
      });
    },
    getLastUsername() {
      repository.get("greybox").then((res) => {
        this.data["username"] = res["data"]["username"];
        this.data["password"] = res["data"]["password"];
      });
    },
  },

  created() {
    this.getLastUsername();
  },
};
</script>