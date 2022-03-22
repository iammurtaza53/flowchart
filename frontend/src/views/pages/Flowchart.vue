<template>
  <div>
    <!-- <header>
      <h2>Drawflow</h2>
      <div class="github-link">
        <a href="https://github.com/jerosoler/Drawflow" target="_blank"
          ><i class="fab fa-github fa-3x"></i
        ></a>
      </div>
      <div class="them-edit-link">
        <a
          href="https://jerosoler.github.io/drawflow-theme-generator/"
          target="_blank"
          >🎨</a
        >
      </div>
    </header> -->
    <div class="wrapper">
      <!-- <div class="col">
        <div
          class="drag-drawflow"
          draggable="true"
          ondragstart="drag(event)"
          data-node="facebook"
        >
          <i class="fab fa-facebook"></i><span> Facebook</span>
        </div>
        <div
          class="drag-drawflow"
          draggable="true"
          ondragstart="drag(event)"
          data-node="slack"
        >
          <i class="fab fa-slack"></i><span> Slack recive message</span>
        </div>
        <div
          class="drag-drawflow"
          draggable="true"
          ondragstart="drag(event)"
          data-node="github"
        >
          <i class="fab fa-github"></i><span> Github Star</span>
        </div>
        <div
          class="drag-drawflow"
          draggable="true"
          ondragstart="drag(event)"
          data-node="telegram"
        >
          <i class="fab fa-telegram"></i><span> Telegram send message</span>
        </div>
        <div
          class="drag-drawflow"
          draggable="true"
          ondragstart="drag(event)"
          data-node="aws"
        >
          <i class="fab fa-aws"></i><span> AWS</span>
        </div>
        <div
          class="drag-drawflow"
          draggable="true"
          ondragstart="drag(event)"
          data-node="log"
        >
          <i class="fas fa-file-signature"></i><span> File Log</span>
        </div>
        <div
          class="drag-drawflow"
          draggable="true"
          ondragstart="drag(event)"
          data-node="google"
        >
          <i class="fab fa-google-drive"></i><span> Google Drive save</span>
        </div>
        <div
          class="drag-drawflow"
          draggable="true"
          ondragstart="drag(event)"
          data-node="email"
        >
          <i class="fas fa-at"></i><span> Email send</span>
        </div>
        <div
          class="drag-drawflow"
          draggable="true"
          ondragstart="drag(event)"
          data-node="template"
        >
          <i class="fas fa-code"></i><span> Template</span>
        </div>
        <div
          class="drag-drawflow"
          draggable="true"
          ondragstart="drag(event)"
          data-node="multiple"
        >
          <i class="fas fa-code-branch"></i
          ><span> Multiple inputs/outputs</span>
        </div>
        <div
          class="drag-drawflow"
          draggable="true"
          ondragstart="drag(event)"
          data-node="personalized"
        >
          <i class="fas fa-fill"></i><span> Personalized</span>
        </div>
        <div
          class="drag-drawflow"
          draggable="true"
          ondragstart="drag(event)"
          data-node="dbclick"
        >
          <i class="fas fa-mouse"></i><span> DBClick!</span>
        </div>
      </div>
      <div class="col-right">
        <div class="menu">
          <ul>
            <li
              onclick="editor.changeModule('Home'); changeModule(event);"
              class="selected"
            >
              Home
            </li>
            <li onclick="editor.changeModule('Other'); changeModule(event);">
              Other Module
            </li>
          </ul>
        </div> -->
      <div
        id="drawflow"
        ondrop="drop(event)"
        ondragover="allowDrop(event)"
      ></div>
    </div>
  </div>
  <!-- </div> -->

  <!-- </div> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Drawflow from "drawflow";
import axios from "axios";
// import { send_data } from "./test.js";
// import styleDrawflow from "drawflow/dist/drawflow.min.css";
import Vue from "vue";
// document
//   .getElementsByClassName("nodes")
//   .addEventListener("click", send_data, false);
export default {
  name: "App",
  data: () => ({
    editor: null,
    nodes: {},
    links: {},
    // nodes: {
    //   1: { id: 1, name: "Node 1", relationship: "test" },
    //   2: { id: 2, name: "Node 2", relationship: "test" },
    //   3: { id: 3, name: "Node 3", relationship: "test" },
    //   4: { id: 4, name: "Node 4", relationship: "test" },
    //   5: { id: 5, name: "Node 5", relationship: "test" },
    //   6: { id: 6, name: "Node 6", relationship: "test" },
    //   7: { id: 7, name: "Node 7", relationship: "test" },
    // },
    // links: {
    //   1: { id: 1, to: 2 },
    //   2: { from: [1, 3], id: 2, to: 4 },
    //   3: { id: 3, to: 2 },
    //   4: { from: 2, id: 4 },
    //   5: { from: 7, id: 5, to: 6 },
    //   6: { from: 7, id: 6, to: 4 },
    //   7: { id: 7, to: 4 },
    // },
    // test: null,
    url: `http://localhost:8000/flowchart/`,
    nodeID: 1,
    nodeClicked: false,
  }),
  components: {
    // HelloWorld,
    // Drawflow,
    // styleDrawflow,
  },
  methods: {
    get_data() {
      var iterator = 0;
      axios.get(`${this.url}get-nodes/`).then((res) => {
        for (
          iterator = 0;
          iterator < res.data["node_data"].length;
          iterator++
        ) {
          this.nodes[iterator] = res.data["node_data"][iterator];
          this.links[iterator] = res.data["link_data"][iterator];
        }
        this.test();
      });
    },
    draw_flow(dataset) {
      let that = this;
      var id = document.getElementById("drawflow");
      this.editor = new Drawflow(id, Vue);
      this.editor.drawflow = { drawflow: { Home: { data: dataset } } };
      this.editor.start();

      this.editor.on("nodeSelected", function (id) {
        that.nodeID = id;
        that.nodeClicked = true;
        that.test1();
      });
    },

    test1() {
      Object.values(this.nodes).forEach((details) => {
        if (details["id"] == this.nodeID) {
          let url = `${this.url}test/?node_name=${details["name"]}&relationship=${details["relationship"]}`;
          axios.get(url).then((res) => {
            console.log(res.data.message);
          });
        }
      });
    },

    test() {
      // send_data();
      var dataset = {};
      var links = this.links;
      var nodes = this.nodes;
      // var cNodeVAlign = 0;
      var pNodeVAlign = 0;
      var pNodeHAlign = 50;
      var horizontalAlignment = 100;
      Object.values(nodes).forEach((node) => {
        // debugger;

        //structuring data
        var componentID = node["id"];
        dataset[componentID] = {};
        dataset[componentID]["id"] = node["id"];
        dataset[componentID]["name"] = node["node_name"];
        dataset[componentID]["class"] = node["node_name"];
        dataset[componentID]["typenode"] = false;
        dataset[componentID]["data"] = {};
        dataset[componentID][
          "html"
        ] = `<div class="title-box">${node["node_name"]}</div><div class="box">${node["relationship"]}</div>`;

        dataset[componentID]["inputs"] = {};
        dataset[componentID]["outputs"] = {};

        //finding the link for the specific id
        var edges = Object.values(links).filter((x) => x.id === node["id"]);

        //checking for parent
        if ("from" in edges[0]) {
          dataset[componentID]["inputs"]["input_1"] = {};
          dataset[componentID]["pos_x"] = horizontalAlignment += 100;
          dataset[componentID]["pos_y"] = pNodeVAlign += 60;

          let inputData = [];
          // check for more than 1 inputs
          if (Array.isArray(edges[0]["from"])) {
            // dataset[componentID]["pos_x"] = horizontalAlignment += 100;
            // dataset[componentID]["pos_y"] = pNodeVAlign += 60;
            // iterating over each input
            edges[0]["from"].forEach((inputNodeID) => {
              var nodeData = {};
              nodeData["node"] = inputNodeID;
              nodeData["input"] = "output_1";
              inputData.push(nodeData);
            });
          } else {
            // dataset[componentID]["pos_x"] = horizontalAlignment += 100;
            // dataset[componentID]["pos_y"] = pNodeVAlign += 60;
            var nodeData = {};
            //structuring data in a particular format
            nodeData["node"] = edges[0]["from"];
            nodeData["input"] = "output_1";
            inputData.push(nodeData);
          }
          dataset[componentID]["inputs"]["input_1"]["connections"] = inputData;
        }
        // horizontalAlignment = 50;
        console.log(horizontalAlignment);
        // checking for child
        if ("to" in edges[0]) {
          dataset[componentID]["pos_x"] = pNodeHAlign + 100;
          dataset[componentID]["pos_y"] = pNodeVAlign += 40;
          dataset[componentID]["outputs"]["output_1"] = {};
          let outputData = [];
          if (Array.isArray(edges[0]["to"]))
            edges[0]["to"].forEach((outputID) => {
              var nodeData = {};
              nodeData["node"] = outputID;
              nodeData["output"] = "input_1";
              outputData.push(nodeData);
            });
          else {
            // dataset[componentID]["pos_x"] = pNodeHAlign + 100;
            // dataset[componentID]["pos_y"] = pNodeVAlign += 40;
            nodeData = {};
            nodeData["node"] = edges[0]["to"];
            nodeData["output"] = "input_1";
            outputData.push(nodeData);
          }
          dataset[componentID]["outputs"]["output_1"]["connections"] =
            outputData;
        }
      });

      console.log(dataset);
      this.draw_flow(dataset);
    },
  },
  mounted() {
    this.get_data();
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
:root {
  --border-color: #cacaca;
  --background-color: #ffffff;

  --background-box-title: #f7f7f7;
}

html,
body {
  margin: 0px;
  padding: 0px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
}

header {
  height: 66px;
  border-bottom: 1px solid var(--border-color);
  padding-left: 20px;
}
header h2 {
  margin: 0px;
  line-height: 66px;
}
header a {
  color: black;
}
.them-edit-link {
  position: absolute;
  top: 10px;
  right: 100px;
  color: black;
  font-size: 40px;
}
.them-edit-link a {
  text-decoration: none;
}
/* 
.github-link {
  position: absolute;
  top: 10px;
  right: 20px;
  color: black;
} */

.wrapper {
  width: 100%;
  height: calc(100vh - 67px);
  display: flex;
}

.col {
  overflow: auto;
  width: 300px;
  height: 100%;
  border-right: 1px solid var(--border-color);
}

.drag-drawflow {
  line-height: 50px;
  border-bottom: 1px solid var(--border-color);
  padding-left: 20px;
  cursor: move;
  user-select: none;
}
.menu {
  position: absolute;
  height: 40px;
  display: block;
  background: white;
  width: 100%;
}
.menu ul {
  padding: 0px;
  margin: 0px;
  line-height: 40px;
}

.menu ul li {
  display: inline-block;
  margin-left: 10px;
  border-right: 1px solid var(--border-color);
  padding-right: 10px;
  line-height: 40px;
  cursor: pointer;
}

.menu ul li.selected {
  font-weight: bold;
}

.btn-export {
  float: right;
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  font-weight: bold;
  border: 1px solid #0e5ba3;
  background: #4ea9ff;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  z-index: 5;
}

.btn-clear {
  float: right;
  position: absolute;
  top: 10px;
  right: 85px;
  color: white;
  font-weight: bold;
  border: 1px solid #96015b;
  background: #e3195a;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  z-index: 5;
}
.swal-wide {
  width: 80% !important;
}

.btn-lock {
  float: right;
  position: absolute;
  bottom: 10px;
  right: 140px;
  display: flex;
  font-size: 24px;
  color: white;
  padding: 5px 10px;
  background: #555555;
  border-radius: 4px;
  border-right: 1px solid var(--border-color);
  z-index: 5;
  cursor: pointer;
}

.bar-zoom {
  float: right;
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  font-size: 24px;
  color: white;
  padding: 5px 10px;
  background: #555555;
  border-radius: 4px;
  border-right: 1px solid var(--border-color);
  z-index: 5;
}
.bar-zoom svg {
  cursor: pointer;
  padding-left: 10px;
}
.bar-zoom svg:nth-child(1) {
  padding-left: 0px;
}

#drawflow {
  position: relative;
  width: calc(100vw - 301px);
  height: calc(100% - 50px);
  top: 40px;
  background: var(--background-color);
  background-size: 25px 25px;
  background-image: linear-gradient(to right, #f1f1f1 1px, transparent 1px),
    linear-gradient(to bottom, #f1f1f1 1px, transparent 1px);
}

@media only screen and (max-width: 768px) {
  .col {
    width: 50px;
  }
  .col .drag-drawflow span {
    display: none;
  }
  #drawflow {
    width: calc(100vw - 51px);
  }
}

/* Editing Drawflow */

.drawflow .drawflow-node {
  background: #ffffff !important;
  border: 1px solid var(--border-color);
  -webkit-box-shadow: 0 2px 15px 2px var(--border-color);
  box-shadow: 0 2px 15px 2px var(--border-color);
  padding: 0px;
  width: 200px;
}

.drawflow .drawflow-node.selected {
  background: white;
  border: 1px solid #4ea9ff;
  -webkit-box-shadow: 0 2px 20px 2px #4ea9ff;
  box-shadow: 0 2px 20px 2px #4ea9ff;
}

.drawflow .drawflow-node.selected .title-box {
  color: black;
  /*border-bottom: 1px solid #4ea9ff;*/
}

.drawflow .connection .main-path {
  stroke: #4ea9ff;
  stroke-width: 3px;
}

.drawflow .drawflow-node .input,
.drawflow .drawflow-node .output {
  height: 15px;
  width: 15px;
  border: 2px solid var(--border-color);
}

.drawflow .drawflow-node .input:hover,
.drawflow .drawflow-node .output:hover {
  background: #ffffff;
}

.drawflow .drawflow-node .output {
  right: 10px;
}

.drawflow .drawflow-node .input {
  left: -10px;
  background: white;
}

.drawflow > .drawflow-delete {
  border: 2px solid #43b993;
  background: white;
  color: #43b993;
  -webkit-box-shadow: 0 2px 20px 2px #43b993;
  box-shadow: 0 2px 20px 2px #43b993;
}

.drawflow-delete {
  border: 2px solid #4ea9ff;
  background: white;
  color: #4ea9ff;
  -webkit-box-shadow: 0 2px 20px 2px #4ea9ff;
  box-shadow: 0 2px 20px 2px #4ea9ff;
}

.drawflow-node .title-box {
  height: 50px;
  line-height: 50px;
  width: 198px;
  /* margin-top: -14px; */
  /* margin-left: -14px; */
  margin-right: 13px;
  background: var(--background-box-title);
  border-bottom: 1px solid #f7f7f7;
  border-radius: 4px 4px 0px 0px;
  padding-left: 10px;
  font-weight: 20;
}
.drawflow .title-box svg {
  position: initial;
}
.drawflow-node .box {
  padding: 10px 20px 20px 20px;
  font-size: 14px;
  color: black;
}
.drawflow-node .box p {
  margin-top: 5px;
  margin-bottom: 5px;
}

.drawflow-node.welcome {
  width: 250px;
}

.drawflow-node.slack .title-box {
  border-radius: 4px;
}

.drawflow-node input,
.drawflow-node select,
.drawflow-node textarea {
  border-radius: 4px;
  border: 1px solid var(--border-color);
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  width: 158px;
  color: #555555;
}

.drawflow-node textarea {
  height: 100px;
}

.drawflow-node.personalized {
  background: red;
  height: 200px;
  text-align: center;
  color: white;
}
.drawflow-node.personalized .input {
  background: yellow;
}
.drawflow-node.personalized .output {
  background: green;
}

.drawflow-node.personalized.selected {
  background: white;
}

.drawflow .connection .point {
  stroke: var(--border-color);
  stroke-width: 2;
  fill: white;
  transform: translate(-9999px, -9999px);
}

.drawflow .connection .point.selected,
.drawflow .connection .point:hover {
  fill: #ffffff;
}

/* Modal */
.modal {
  display: none;
  position: fixed;
  z-index: 7;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 400px; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.modal .close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
}
.drawflow .drawflow_content_node {
  width: 100% !important;
}

@media only screen and (max-width: 768px) {
  .modal-content {
    width: 80%;
  }
}
</style>
