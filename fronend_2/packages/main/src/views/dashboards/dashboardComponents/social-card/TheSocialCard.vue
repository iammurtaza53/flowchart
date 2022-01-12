<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5 text-center">
      <div class="pro-img my-7">
        <img
          src="@/assets/images/users/4.jpg"
          width="128"
          class="rounded-circle elevation-5"
          alt="user"
        />
      </div>
      <h4 class="mb-0 font-weight-medium">Mark J. Freeman</h4>
      <h6 class="blue-grey--text text--lighten-2 font-weight-regular mt-2">
        Web Designer
      </h6>
      <div class="d-flex justify-center mt-4">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <a href="javascript:void(0)" class="link mx-2 body-1" v-on="on">
              <i class="fab fa-twitter blue-grey--text text--lighten-2"></i>
            </a>
          </template>
          <span>Twitter</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <a href="javascript:void(0)" class="link mx-2 body-1" v-on="on">
              <i
                class="fab fa-facebook-square blue-grey--text text--lighten-2"
              ></i>
            </a>
          </template>
          <span>Facebook</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <a href="javascript:void(0)" class="link mx-2 body-1" v-on="on">
              <i
                class="fab fa-google-plus-g blue-grey--text text--lighten-2"
              ></i>
            </a>
          </template>
          <span>Google Plus</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <a href="javascript:void(0)" class="link mx-2 body-1" v-on="on">
              <i class="fab fa-youtube blue-grey--text text--lighten-2"></i>
            </a>
          </template>
          <span>Youtube</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <a href="javascript:void(0)" class="link mx-2 body-1" v-on="on">
              <i class="fab fa-instagram blue-grey--text text--lighten-2"></i>
            </a>
          </template>
          <span>Instagram</span>
        </v-tooltip>
      </div>
    </v-card-text>
    <div class="text-center blue-grey lighten-5 mt-4">
      <v-row>
        <v-col cols="6" sm="6" class="pa-5 border-right">
          <h4 class="mb-0 dark--text font-weight-medium">35000</h4>
          <small class="body-2 dark--text">Followers</small>
        </v-col>
        <v-col cols="6" sm="6" class="pa-5">
          <h4 class="mb-0 dark--text font-weight-medium">180</h4>
          <small class="body-2 dark--text">Following</small>
        </v-col>
      </v-row>
    </div>
    <v-card-text class="pa-5 text-center">
      <v-btn
        depressed
        color="success"
        rounded
        x-large
        class="text-capitalize px-7"
      >
        Follow Me
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TheSocialCard",
  data: () => ({}),
};
</script>