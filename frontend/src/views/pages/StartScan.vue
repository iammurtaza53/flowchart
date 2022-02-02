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

    <BaseCard heading="Progress" v-if="progress.percentage != 0">
      <div class="mt-4 text-center">
        <v-progress-circular
          :rotate="90"
          :size="100"
          :width="15"
          :value="progress.percentage"
          color="success"
        >
          {{ progress.percentage }}
        </v-progress-circular>
        <br />
        <br />
        {{ progress.description }}
      </div>
    </BaseCard>
  </v-container>
</template>

<script>
import repository from "../../store/repository";
export default {
  data: () => ({
    checkboxData: {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
    },
    progress: {
      percentage: 0,
      description: "",
    },
    interval: null,
  }),

  methods: {
    send_scan_data() {
      repository.post("scan/", this.checkboxData).then((res) => {
        console.log(res["message"]);
        this.startTime();
      });
    },
    getProgress() {
      repository.get("progress/").then((res) => {
        this.progress = res["data"][0];
        if (this.progress["percentage"] >= 100) {
          this.progress.description = "Scan has been Completed";
          clearInterval(this.interval);
          setTimeout(() => {
            this.progress = {
              percentage: 0,
              description: "",
            };
          }, 5000);
        }
      });
    },

    startTime() {
      this.interval = setInterval(() => {
        this.getProgress();
      }, 2000);
    },
  },
};
</script>