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
    <BaseCard v-if="responseIP" heading="IP">{{ responseIP }} </BaseCard>
  </v-container>
</template>

<script>
import repository from "../../store/repository";
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
    responseIP: null,
    useCaseData: {
      IP: null,
      Issue: null,
    },
  }),

  methods: {
    send_useCase_data() {
      repository.post("send-usecase-data/", this.useCaseData).then((res) => {
        this.responseIP = res["IP"];
      });
    },
  },
};
</script>
<style scoped>
</style>