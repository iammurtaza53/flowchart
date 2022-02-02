<template>
  <v-card flat class="mb-7">
    <v-card-text class="pa-5">
      <div class="d-md-flex align-items-center">
        <div>
          <span class="lstick"></span>
          <h3 class="title font-weight-regular">My Contacts</h3>
        </div>
        <div class="ml-auto">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <a
                href="javascript:void(0)"
                class="link"
                dark
                v-bind="attrs"
                v-on="on"
              >
                <i class="fas fa-ellipsis-v"></i>
              </a>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>

      <v-list class="mt-4">
        <v-list-item v-for="(item, i) in messages" :key="i" @click="href">
          <v-list-item-title>
            <div class="d-flex align-center py-3">
              <div class="mr-3">
                <v-badge
                  bordered
                  top
                  :color="item.avatarstatus"
                  dot
                  offset-x="10"
                  offset-y="10"
                >
                  <v-avatar>
                    <img
                      :src="
                        'https://www.wrappixel.com/demos/admin-templates/materialpro-bootstrap-latest/material-pro/src/assets/images/users/' +
                        item.avatar +
                        '.jpg'
                      "
                      :alt="item.title"
                    />
                  </v-avatar>
                </v-badge>
              </div>
              <div class="mx-3">
                <h5 class="font-weight-medium">{{ item.title }}</h5>
                <span
                  class="text--secondary descpart d-block truncate-text subtitle-2"
                  >{{ item.desc }}</span
                >
              </div>
            </div>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TheMyContacts",
  data: () => ({
    items: [{ title: "Edit" }, { title: "Update" }, { title: "Add" }],
    messages: [
      {
        title: "Pavan Kumar",
        avatar: "1",
        avatarstatus: "success",
        desc: "info@wrappixel.com",
      },
      {
        title: "Sonu Nigam",
        avatar: "2",
        avatarstatus: "error",
        desc: "pamela1987@gmail.com",
      },
      {
        title: "Arijit singh",
        avatar: "3",
        avatarstatus: "warning",
        desc: "cruise1298.fiplip@gmail.com",
      },
      {
        title: "Pavan Kumar",
        avatar: "4",
        avatarstatus: "success",
        desc: "kat@gmail.com",
      },
      {
        title: "Pavan Kumar",
        avatar: "5",
        avatarstatus: "success",
        desc: "info@wrappixel.com",
      },
      {
        title: "Sonu Nigam",
        avatar: "6",
        avatarstatus: "error",
        desc: "pamela1987@gmail.com",
      },
    ],
    href() {
      return undefined;
    },
  }),
  components: {},
};
</script>