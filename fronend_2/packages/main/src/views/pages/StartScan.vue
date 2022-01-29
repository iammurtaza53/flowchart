<template>
  <v-container>
    <BaseCard heading="SCAN">
      <v-checkbox label="CHECKBOX 1" v-model="checkboxData.checkbox1">
      </v-checkbox>
      <v-checkbox label="CHECKBOX 2" v-model="checkboxData.checkbox2">
      </v-checkbox>
      <v-checkbox label="CHECKBOX 3" v-model="checkboxData.checkbox3">
      </v-checkbox>
      <v-checkbox label="CHECKBOX 4" v-model="checkboxData.checkbox4">
      </v-checkbox>
      <v-checkbox label="CHECKBOX 4" v-model="checkboxData.checkbox5">
      </v-checkbox>

      <v-btn color="primary" @click="send_scan_data()">START SCAN</v-btn>
    </BaseCard>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    checkboxData: {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
    },
  }),

  methods: {
    send_scan_data() {
      var url = "http://localhost:8000/send-scan-data/";

      axios.post(url, this.checkboxData).then((res) => {
        console.log(res.data["message"]);
      });
    },
  },
};
</script>