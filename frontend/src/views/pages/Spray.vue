<template>
  <v-container>
    <BaseCard heading="Spray">
      <v-textarea label="Data" v-model="data"></v-textarea>
      <v-btn color="primary" @click="submit()"> Submit </v-btn>
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
    submit() {
      let data = this.data.split(",");
      repository.post("spray/", { data }).then((res) => {
        this.data = null;
        console.log(res);
      });
    },
  },

  created() {},
};
</script>