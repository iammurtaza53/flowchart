<template>
  <v-card flat class="mb-7">
    <div class="blog-image">
      <img
        src="@/assets/images/big/img1.jpg"
        alt="img"
        class="img-fluid w-100 blog-img-height"
      />
    </div>
    <v-card-text class="pa-5">
      <h3 class="subtitle-1 font-weight-regular lh-22">
        Business development new rules for 2020
      </h3>
      <v-chip class="mt-2" small color="info">Technology</v-chip>
      <p class="mt-4 mb-2 subtitle-1">
        Titudin venenatis ipsum aciat. Vestibulum ullamcorper quam. nenatis
        ipsum ac feugiat. Ibulum ullamcorper
      </p>
      <div class="d-flex align-center">
        <div>
          <v-btn
            color="info"
            text
            class="font-weight-light text-capitalize pa-0"
            >Read More</v-btn
          >
        </div>
        <v-spacer></v-spacer>
        <div>
          <div class="d-flex">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <a href="javascript:void(0)" class="link" v-on="on">
                  <v-icon class="subtitle-1">mdi-share-variant</v-icon>
                </a>
              </template>
              <span>Share</span>
            </v-tooltip>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TheBusinessCard",
  data: () => ({}),
  components: {},
};
</script>