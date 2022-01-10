<template >
  <v-app class="bg">
    <v-app-bar color="teal" dark>
      <v-app-bar-title dense outlined> FLOWCHART </v-app-bar-title>
    </v-app-bar>
    <v-container>
      <flowy class="q-mx-auto" :nodes="nodes"></flowy>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import DemoNode from "../src/components/DemoNode.vue";
import DemoBlock from "../src/components/DemoBlock.vue";
import { VueFlowy, FlowChart } from "vue-flowy";
import Vue from "vue";
import FlowyPlugin from "@hipsjs/flowy-vue";
import "@hipsjs/flowy-vue/dist/lib/flowy-vue.css";
// Vue.component("demo-node", DemoNode);
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
    // display() {
    //   var data = [
    //     {
    //       id: 1,
    //       flowid: 1,
    //       nodename: "node A",
    //       relationship: "relationship to B",
    //     },
    //     {
    //       id: 2,
    //       flowid: 1,
    //       nodename: "node B",
    //       relationship: "NA",
    //     },
    //     {
    //       id: 3,
    //       flowid: 2,
    //       nodename: "node A",
    //       relationship: "relationship to B",
    //     },
    //     {
    //       id: 4,
    //       flowid: 2,
    //       nodename: "node B",
    //       relationship: "relationship to C",
    //     },
    //     {
    //       id: 5,
    //       flowid: 2,
    //       nodename: "node C",
    //       relationship: "relationship to D",
    //     },
    //     {
    //       id: 6,
    //       flowid: 2,
    //       nodename: "node D",
    //       relationship: "NA",
    //     },
    //     {
    //       id: 7,
    //       flowid: 3,
    //       nodename: "node A",
    //       relationship: "relationship to B",
    //     },
    //     {
    //       id: 8,
    //       flowid: 3,
    //       nodename: "node B",
    //       relationship: "relationship to C",
    //     },
    //     {
    //       id: 9,
    //       flowid: 3,
    //       nodename: "node C",
    //       relationship: "NA",
    //     },
    //   ];
    //   data.forEach((field) => {
    //     var parentNode = String(field.flowid);
    //     if (!this.flowcharts[parentNode]) {
    //       this.flowcharts[parentNode] = {};
    //       this.flowcharts[parentNode]["id"] = field["id"].toString();
    //       this.flowcharts[parentNode]["parentId"] = -1;
    //       this.flowcharts[parentNode]["nodeComponent"] = "demo-node";
    //       this.flowcharts[parentNode]["data"] = {};
    //       this.flowcharts[parentNode]["data"]["nodename"] = field["nodename"];
    //       this.flowcharts[parentNode]["data"]["relationship"] =
    //         field["relationship"];
    //       this.flowcharts[parentNode]["data"]["cardColor"] = "#f2f2f2";

    //       this.nodes.push(this.flowcharts[parentNode]);
    //     } else {
    //       this.flowcharts["childNode"] = {};
    //       this.flowcharts["childNode"]["id"] = field["id"].toString();
    //       this.flowcharts["childNode"]["parentId"] = (
    //         field["id"] - 1
    //       ).toString();
    //       this.flowcharts["childNode"]["nodeComponent"] = "demo-node";
    //       this.flowcharts["childNode"]["data"] = {};
    //       this.flowcharts["childNode"]["data"]["nodename"] = field["nodename"];
    //       this.flowcharts["childNode"]["data"]["relationship"] =
    //         field["relationship"];
    //       this.flowcharts["childNode"]["data"]["cardColor"] = "#f2f2f2";
    //       this.nodes.push(this.flowcharts["childNode"]);
    //     }
    //   });
   
    // },

    get_flow_data() {
      axios.get("http://localhost:8000/flows").then((res) => {
        var data = res.data;
        data.forEach((field, colorIndex) => {
          var parentNode = String(field.flowid);

          if (!this.flowcharts[parentNode]) {
            this.flowcharts[parentNode] = {};
            this.flowcharts[parentNode]["id"] = field["id"].toString();
            this.flowcharts[parentNode]["parentId"] = -1;
            this.flowcharts[parentNode]["nodeComponent"] = "demo-node";
            this.flowcharts[parentNode]["data"] = {};
            this.flowcharts[parentNode]["data"]["nodename"] =
              field["nodename"].toUpperCase();
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
              field["nodename"].toUpperCase();
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
    // this.display();
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
