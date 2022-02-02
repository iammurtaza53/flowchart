<template>
  <v-container>
    <BaseCard heading="Admininstration">
      <v-text-field label="Admininstration" v-model="data"> </v-text-field>
      <v-btn color="primary" @click="send_useCase_data()">Submit</v-btn>
    </BaseCard>
  </v-container>
</template>

<script>
import repository from "../../store/repository";
export default {
  data: () => ({
    data: null,
  }),

  methods: {
    send_useCase_data() {
      repository.post("administration/", { data: this.data }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
<style scoped>
</style>