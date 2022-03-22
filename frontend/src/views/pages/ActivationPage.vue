<template>
  <v-container>
    <BaseCard heading="ACTIVATION">
      <v-radio-group v-model="activationChoice">
        <v-row>
          <v-col cols="4">
            <v-radio label="Online" value="online"></v-radio>
          </v-col>
          <v-col cols="4" v-if="activationChoice === 'online'">
            <v-text-field></v-text-field>
          </v-col>
          <v-col cols="4" v-if="activationChoice === 'online'"
            ><v-btn>submit</v-btn></v-col
          >
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-radio label="Offline" value="offline"></v-radio>
          </v-col>
          <!-- <v-col cols="4" v-if="activationChoice === 'offline'"> -->
          <v-col cols="3" v-if="activationChoice === 'offline'">
            <v-file-input
              v-model="file"
              small-chips
              truncate-length="15"
            ></v-file-input>
          </v-col>
          <v-col cols="3">
            <v-btn @click="upload_file" v-if="activationChoice === 'offline'"
              >Upload</v-btn
            >
          </v-col>
          <v-col cols="3" v-if="activationChoice === 'offline'"
            ><v-btn>Submit</v-btn></v-col
          >
          <!-- </v-col> -->
        </v-row>
      </v-radio-group>
    </BaseCard>
  </v-container>
</template>

<script>
import repository from "../../store/repository";
export default {
  components: {},
  data: () => ({
    activationChoice: null,
    file: null,
  }),
  computed: {},
  methods: {
    upload_file() {
      repository.uploadMediaFiles("post-files/", this.file).then((res) => {
        console.log(res.message);
        // console.log(res.data["message"]);
      });
    },
  },
  created() {},
};
</script>