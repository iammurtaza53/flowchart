<template>
  <v-card flat class="mb-7 w-100">
    <v-card-text class="pa-5">
      <span class="lstick"></span>
      <h3 class="title font-weight-regular">Recent Comments</h3>
    </v-card-text>
    <v-card-text class="pa-0">
      <div class="d-md-flex align-items-center">
        <div v-bar class="vs-scrollable w-100" style="height: 622px">
          <div>
            <div
              class="comment-widgets position-relative"
              v-for="comment in comments"
              :comment="comment"
              :key="comment.commenttitle"
            >
              <!-- Comment Row -->
              <div
                class="d-flex flex-row comment-row mt-0 pa-3"
                :class="[comment.activeClass]"
              >
                <div class="pa-2">
                  <img
                    :src="require('@/assets/images/users' + comment.img)"
                    alt="user"
                    width="50"
                    class="rounded-circle"
                  />
                </div>
                <div class="comment-text w-100 pa-3">
                  <h3 class="font-weight-regular title">
                    {{ comment.username }}
                  </h3>
                  <span class="d-block mb-3 body-1 font-weight-regular">{{
                    comment.desc
                  }}</span>
                  <div class="comment-footer d-sm-flex align-center">
                    <v-chip class="" :class="[comment.badgebg]" small label>{{
                      comment.status
                    }}</v-chip>
                    <span class="action-icons">
                      <a href="javascript:void(0)" class="pl-2 align-middle">
                        <i class="ti-pencil-alt"></i>
                      </a>
                      <a href="javascript:void(0)" class="pl-2 align-middle">
                        <i class="ti-check"></i>
                      </a>
                      <a
                        href="javascript:void(0)"
                        class="pl-2 align-middle text-danger"
                      >
                        <i class="ti-heart"></i>
                      </a>
                    </span>
                    <v-spacer></v-spacer>
                    <div class="ml-auto mt-3 mt-sm-0">
                      <span class="subtitle-2 body-1 mr-2">{{
                        comment.date
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TheRecentComments",
  props: {
    comment: Object,
  },
  data: () => ({
    comments: [
      {
        img: "/1.jpg",
        activeClass: "",
        username: "James Anderson",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
        date: "April 14, 2020",
        badgebg: "blue lighten-4 blue--text text--darken-1",
        status: "Pending",
      },
      {
        img: "/2.jpg",
        activeClass: "active",
        username: "Michael Jorden",
        desc:
          "Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.",
        date: "April 14, 2020",
        badgebg: "green lighten-4 green--text text--darken-1",
        status: "Approved",
      },
      {
        img: "/3.jpg",
        activeClass: "",
        username: "Johnathan Doeting",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
        date: "April 14, 2020",
        badgebg: "red lighten-4 red--text text--darken-1",
        status: "Rejected",
      },
      {
        img: "/4.jpg",
        activeClass: "",
        username: "James Anderson",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
        date: "April 14, 2020",
        badgebg: "blue lighten-4 blue--text text--darken-1",
        status: "Pending",
      },
      {
        img: "/5.jpg",
        activeClass: "",
        username: "Nirav joshi",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
        date: "August 14, 2020",
        badgebg: "amber lighten-4 amber--text text--darken-1",
        status: "Pending",
      },
    ],
  }),
};
</script>