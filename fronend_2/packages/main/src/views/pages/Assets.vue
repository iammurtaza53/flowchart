<template>
  <v-container>
    <BaseCard heading="Assets">
      <v-btn color="primary" @click="download_csv()">CONVERT TO CSV</v-btn>
    </BaseCard>
  </v-container>
</template>
<script>
import repository from "../../store/repository";
export default {
  computed: {},
  methods: {
    download_csv() {
      repository.get("download-final-hosts/").then((res) => {
        console.log("data has been downloaded");
      });
    },
  },
};
</script>