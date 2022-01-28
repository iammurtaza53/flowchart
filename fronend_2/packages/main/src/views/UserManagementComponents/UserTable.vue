<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TableSimpleDense -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <!-- <v-list-item-subtitle class="text-wrap"> USER DATA </v-list-item-subtitle> -->
    <div class="mt-5">
      <v-simple-table dense class="border">
        <template v-slot:default>
          <thead>
            <tr>
              <th
                v-for="header in tableHeaders"
                :key="header"
                class="text-left"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in userData" :key="index">
              <td class="display-2">{{ user.user_firstname }}</td>
              <td class="display-2">{{ user.user_lastname }}</td>
              <td class="display-2">{{ user.email }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserTabe",
  props: ["userData", "tableHeaders"],
  data: () => ({}),
  methods: {},
};
</script>
<style scoped>
</style>