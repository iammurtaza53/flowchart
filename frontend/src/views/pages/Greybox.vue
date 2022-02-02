<template>
  <v-container>
    <BaseCard heading="Greybox">
      <v-text-field label="Username" v-model="data.username"></v-text-field>
      <v-text-field label="Password" v-model="data.password"></v-text-field>
      <v-btn color="primary" @click="submit()"> Submit </v-btn>
    </BaseCard>
  </v-container>
</template>


<script>
import repository from "../../store/repository";
export default {
  data: () => ({
    data: {},
  }),

  methods: {
    submit() {
      repository.post("greybox/", this.data).then((res) => {
        this.data = {};
        console.log(res);
      });
    },
  },

  created() {},
};
</script>