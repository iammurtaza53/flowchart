<template>
  <v-card
    class="text-center text-white"
    style="color: #858585 !important"
    v-bind:class="{ 'rounded-borders': relationship == 'NA' }"
    height="auto"
    :color="cardColor"
    solo
    dense
    width="200"
  >
    <v-card-title
      class="text-justify text-primary"
      style="color: #858585 !important"
    >
      <v-icon class="mr-md-2" color="blue">mdi-hexagon</v-icon>
      {{ nodename }}
    </v-card-title>
    <v-divider></v-divider>
    <v-card-subtitle
      class="text-justify description-font"
      v-html="relationship"
    ></v-card-subtitle>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      text: "This is component A",
    };
  },
  props: ["remove", "node", "nodename", "relationship", "cardColor"],
};
</script>
<style scoped>
.theme--light.v-divider {
  border-color: black !important;
}
.description-font {
  font-size: 18px;
  color: #858585 !important;
}
.rounded-borders {
  border-radius: 40px !important;
}
</style>