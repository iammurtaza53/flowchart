<template>
  <v-card flat class="mb-7 w-100">
    <v-card-text class="pa-5">
      <span class="lstick"></span>
      <h3 class="title font-weight-regular">Activity</h3>
      <div class="activity-box mt-10 vs-scrollable" v-bar style="height: 400px">
        <div class="card-body">
          <!-- Activity item-->
          <div class="activity-item">
            <div class="round m-r-20">
              <img
                src="@/assets/images/users/2.jpg"
                class="rounded-circle"
                alt="user"
                width="50"
              />
            </div>
            <div class="ml-3">
              <h5 class="font-weight-medium dark--text">
                Mark Freeman
                <span class="blue-grey--text text--lighten-2 body-1"
                  >| &nbsp; 6:30 PM</span
                >
              </h5>
              <h6
                class="blue-grey--text text--lighten-2 font-weight-regular subtitle-2"
              >
                uploaded this file
              </h6>
              <table class="table vm border-0 mt-3">
                <tr>
                  <td class="m-r-10 border-0">
                    <img src="@/assets/images/icon/zip.png" alt="user" />
                  </td>
                  <td class="border-0">
                    <h5 class="subtitle-1 ml-2 font-weight-medium">
                      Homepage.zip
                    </h5>
                    <h6 class="subtitle-1 ml-2">54 MB</h6>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <!-- Activity item-->
          <!-- Activity item-->
          <div class="activity-item">
            <div class="round m-r-20">
              <img
                src="@/assets/images/users/3.jpg"
                class="rounded-circle"
                alt="user"
                width="50"
              />
            </div>
            <div class="ml-3">
              <h5 class="font-weight-medium dark--text">
                Emma Smith
                <span class="blue-grey--text text--lighten-2 body-1"
                  >| &nbsp; 6:30 PM</span
                >
              </h5>
              <h6
                class="blue-grey--text text--lighten-2 font-weight-regular subtitle-2 mb-3"
              >
                joined projectname, and invited
                <a href="javascript:void(0)"
                  >@maxcage, @maxcage, @maxcage, @maxcage, @maxcage,+3</a
                >
              </h6>
              <span class="image-list">
                <a href="javascript:void(0)"
                  ><img
                    src="@/assets/images/users/1.jpg"
                    class="rounded-circle"
                    alt="user"
                    width="50"
                /></a>
                <a href="javascript:void(0)"
                  ><img
                    src="@/assets/images/users/2.jpg"
                    class="rounded-circle"
                    alt="user"
                    width="50"
                /></a>
                <a href="javascript:void(0)">
                  <v-btn class="elevation-0" fab dark color="amber"> C </v-btn>
                </a>
                <a href="javascript:void(0)">
                  <v-btn class="elevation-0" fab dark color="error"> D </v-btn>
                </a>
                <a href="javascript:void(0)"> +3 </a>
              </span>
            </div>
          </div>
          <!-- Activity item-->
          <!-- Activity item-->
          <div class="activity-item">
            <div class="round m-r-20">
              <img
                src="@/assets/images/users/4.jpg"
                class="rounded-circle"
                alt="user"
                width="50"
              />
            </div>
            <div class="ml-3">
              <h5 class="font-weight-medium dark--text">
                David R. Jones
                <span class="blue-grey--text text--lighten-2 body-1"
                  >| &nbsp; 9:30 PM, July 13th</span
                >
              </h5>
              <h6
                class="blue-grey--text text--lighten-2 font-weight-regular mb-3 subtitle-2"
              >
                uploaded this file
              </h6>
              <span>
                <a href="javascript:void(0)" class="mr-2"
                  ><img
                    src="@/assets/images/big/img1.jpg"
                    alt="user"
                    width="60"
                /></a>
                <a href="javascript:void(0)" class="mr-2"
                  ><img
                    src="@/assets/images/big/img2.jpg"
                    alt="user"
                    width="60"
                /></a>
              </span>
            </div>
          </div>
          <!-- Activity item-->
          <!-- Activity item-->
          <div class="activity-item">
            <div class="round m-r-20">
              <img
                src="@/assets/images/users/2.jpg"
                class="rounded-circle"
                alt="user"
                width="50"
              />
            </div>
            <div class="ml-3">
              <h5 class="font-weight-medium dark--text">
                David R. Jones
                <span class="blue-grey--text text--lighten-2 body-1"
                  >| &nbsp; 6:30 PM</span
                >
              </h5>
              <h6
                class="blue-grey--text text--lighten-2 font-weight-regular subtitle-2"
              >
                Commented on<a href="javascript:void(0)">Test Project</a>
              </h6>
              <p class="mb-0 subtitle-1 mt-2">
                It has survived not only five centuries, but also the leap into
                unchanged.
              </p>
            </div>
          </div>
          <!-- Activity item-->
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TheActivityTimeline",
  data: () => ({}),
  components: {},
};
</script>