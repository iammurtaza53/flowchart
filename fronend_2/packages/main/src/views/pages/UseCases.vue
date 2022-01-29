<template>
  <v-container>
    <BaseCard heading="Use Case">
      <v-text-field label="IP" v-model="useCaseData.IP"> </v-text-field>
      <v-select
        :items="items"
        label="Issues"
        v-model="useCaseData.Issue"
      ></v-select>
      <v-btn color="primary" @click="send_useCase_data()">INSERT</v-btn>
    </BaseCard>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    items: [
      "issue 1",
      "issue 2",
      "issue 3",
      "issue 4",
      "issue 5",
      "issue 6",
      "issue 7",
    ],

    useCaseData: {
      IP: null,
      Issue: null,
    },
  }),

  methods: {
    send_useCase_data() {
      var url = this.$store.state.baseUrl + "send-usecase-data/";
      axios.post(url, this.useCaseData).then((res) => {
        console.log(res.data["message"]);
      });
    },
  },
};
</script>
<style scoped>
</style>