<template>
  <v-container>
    <BaseCard heading="Assets">
      <v-btn color="primary" @click="download_csv()">CONVERT TO CSV</v-btn>
    </BaseCard>
    <v-snackbar v-model="snackbar" timeout="4000">
      File has been Downloaded in you backend directory
      <v-btn color="info" text @click="snackbar = false"> Close </v-btn>
    </v-snackbar>
  </v-container>
</template>
<script>
import repository from "../../store/repository";
export default {
  computed: {},
  data: () => ({
    snackbar: false,
  }),
  methods: {
    download_csv() {
      repository.get("download/").then((res) => {
        console.log("data has been downloaded");
        this.snackbar = true;
      });
    },
  },
};
</script>