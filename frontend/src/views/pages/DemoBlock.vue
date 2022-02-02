
<!--<template>
  <v-card
    flat
    bordered
    class="q-px-md q-py-sm row items-center justify-between"
  >
    <div class="text-subtitle1">{{ title }}</div>
     <flowy-drag-handle>
        <v-btn color="grey-7" size="sm" class="q-ml-md" round flat icon="drag_handle" />
      </flowy-drag-handle> 
  </v-card>
</template> -->
<script>
export default {
  data() {
    return {
      text: "This is component A",
    };
  },
  props: ["remove", "node", "title", "description"],
};
</script>
<template>
 