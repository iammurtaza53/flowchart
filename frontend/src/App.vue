<template>
  <v-app
    id="adminpro"
    :class="`${
      !$vuetify.breakpoint.smAndDown ? 'full-sidebar' : 'mini-sidebar'
    }`"
  >
    <router-view />
  </v-app>
</template>

<script>
import repository from "./store/repository";
export default {
  name: "App",

  components: {},
  data: () => ({
    loggedUser: null,
  }),
  methods: {
    check_user() {
      this.loggedUser = JSON.parse(localStorage.getItem("user"));
      if (this.loggedUser) {
        repository
          .get(`check-user/?username=${this.loggedUser["username"]}`)
          .then((res) => {
            if (res.status === 500) {
              localStorage.removeItem("user");
              this.$router.push("/");
            }
          });
      }
    },
  },
  beforeMount() {
    this.check_user();
  },
};
</script>
