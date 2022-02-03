<template >
  <v-app v-if="nodes" class="bg">
    <v-container>
      <div v-if="nodes">
        <flowy class="q-mx-auto" :nodes="nodes"></flowy>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import repository from "../../store/repository";
import DemoNode from "../pages/DemoNode.vue";
import DemoBlock from "../pages/DemoBlock.vue";
import { VueFlowy } from "vue-flowy";
import Vue from "vue";
import FlowyPlugin from "@hipsjs/flowy-vue";
import "@hipsjs/flowy-vue/dist/lib/flowy-vue.css";

Vue.component("demo-block", DemoBlock);
Vue.component("demo-node", DemoNode);
Vue.use(FlowyPlugin);

export default {
  name: "App",
  components: {
    VueFlowy,
    DemoNode,
    DemoBlock,
  },

  data: () => ({
    reRender: 0,
    flowcharts: {},
    nodes: [],
  }),
  methods: {
    get_flow_data() {
      let scan_id = localStorage.getItem("scan_id");
      repository.get("flowchart/?scan_id=" + scan_id).then((res) => {
        let obj = res.data;
        obj.forEach((field) => {
          var parentNode = String(field.pathid);

          if (!this.flowcharts[parentNode]) {
            this.flowcharts[parentNode] = {};
            this.flowcharts[parentNode]["id"] = field["id"].toString();
            this.flowcharts[parentNode]["parentId"] = -1;
            this.flowcharts[parentNode]["nodeComponent"] = "demo-node";
            this.flowcharts[parentNode]["data"] = {};
            this.flowcharts[parentNode]["data"]["nodename"] =
              field["domain"].toUpperCase();
            this.flowcharts[parentNode]["data"]["relationship"] =
              field["relationship"];
            this.flowcharts[parentNode]["data"]["cardColor"] = "#f2f2f2";

            this.nodes.push(this.flowcharts[parentNode]);
          } else {
            this.flowcharts["childNode"] = {};
            this.flowcharts["childNode"]["id"] = field["id"].toString();
            this.flowcharts["childNode"]["parentId"] = (
              field["id"] - 1
            ).toString();
            this.flowcharts["childNode"]["nodeComponent"] = "demo-node";
            this.flowcharts["childNode"]["data"] = {};
            this.flowcharts["childNode"]["data"]["nodename"] =
              field["domain"].toUpperCase();
            this.flowcharts["childNode"]["data"]["relationship"] =
              field["relationship"];
            this.flowcharts["childNode"]["data"]["cardColor"] = "#f2f2f2";

            this.nodes.push(this.flowcharts["childNode"]);
          }
        });
        this.reRender++;
      });
    },
  },

  created() {
    this.get_flow_data();
  },
};
</script>

<style scoped>
/*creating polka dots background */
.bg {
  background-image: radial-gradient(#dbd5d5ed 20%, transparent 20%) !important;
  background-color: white !important;
  background-position: 0 0, 50px 50px !important;
  background-size: 11px 11px !important;
}
</style>
