<template>
  <v-container>
    <BaseCard heading="Spray">
      <v-textarea label="Data" v-model="data"></v-textarea>
      <v-btn color="primary" @click="submit()"> Submit </v-btn>
    </BaseCard>

    <BaseCard heading="Passwords">
      <DataTable
        :data="tableData"
        :tableHeaders="tableHeader"
        :loading="loading"
      ></DataTable>
    </BaseCard>
  </v-container>
</template>


<script>
import repository from "../../store/repository";
export default {
  components: {
    DataTable: () => import("@/views/pages/DataTable.vue"),
  },
  data: () => ({
    data: null,
    tableHeader: [{ text: "Password", value: "password" }],
    tableData: [],
    loading: false,
  }),

  methods: {
    submit() {
      let ipSet = this.data.split(",");
      let data = [];
      ipSet.forEach((ip) => {
        data.push({ password: ip });
      });
      repository.post("spray/", data).then((res) => {
        this.tableData = data;
        this.data = null;
      });
    },
  },

  created() {},
};
</script>