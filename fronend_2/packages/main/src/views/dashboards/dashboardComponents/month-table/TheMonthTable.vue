<template>
  <v-card flat class="mb-7 w-100">
    <v-card-text class="pa-5">
      <div class="d-sm-flex align-start">
        <span class="lstick"></span>
        <h3 class="title font-weight-regular">Projects of the Month</h3>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <div style="width: 150px">
            <v-select
              class="pt-0 mt-0"
              v-model="select"
              :items="items"
              item-text="state"
              item-value="abbr"
              label="Select"
              persistent-hint
              return-object
              single-line
            ></v-select>
          </div>
        </div>
      </div>
      <v-simple-table class="month-table mt-5">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="font-weight-medium subtitle-1">Assigned</th>
              <th class="font-weight-medium subtitle-1">Name</th>
              <th class="font-weight-medium subtitle-1">Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in monthtable"
              :key="item.leadname"
              :class="item.activestate"
              class="month-item"
            >
              <td class="py-3 px-2">
                <div class="d-flex align-center">
                  <img
                    :src="require('@/assets/images/users' + item.img)"
                    alt="user"
                    class="rounded-circle"
                    width="45"
                  />
                  <div class="ml-3">
                    <h4 class="font-weight-medium text-no-wrap subtitle-1">
                      {{ item.leadname }}
                    </h4>
                    <h6
                      class="blue-grey--text text-no-wrap text--lighten-2 font-weight-regular subtitle-2"
                    >
                      {{ item.leademail }}
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <h5 class="font-weight-light text-no-wrap subtitle-2 body-1">
                  {{ item.projectname }}
                </h5>
              </td>
              <td>
                <v-chip class="ma-2" :class="item.statuscolor" small>{{
                  item.statustext
                }}</v-chip>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TheMonthTable",
  data: () => ({
    select: { state: "January 2020", abbr: "FL" },
    items: [
      { state: "January 2020", abbr: "FL" },
      { state: "February 2020", abbr: "GA" },
      { state: "March 2020", abbr: "NE" },
      { state: "April 2020", abbr: "CA" },
    ],
    monthtable: [
      {
        img: "/1.jpg",
        activestate: "",
        leadname: "Sunil Joshi",
        leademail: "Web Designer",
        projectname: "Elite Admin",
        statuscolor: "success",
        statustext: "Low",
      },
      {
        img: "/2.jpg",
        activestate: "active",
        leadname: "Andrew",
        leademail: "Project Manager",
        projectname: "Real Homes",
        statuscolor: "info",
        statustext: "Medium",
      },
      {
        img: "/3.jpg",
        activestate: "",
        leadname: "Bhavesh patel",
        leademail: "Developer",
        projectname: "MedicalPro Theme",
        statuscolor: "deep-purple accent-2 white--text",
        statustext: "High",
      },
      {
        img: "/4.jpg",
        activestate: "",
        leadname: "Nirav Joshi",
        leademail: "Frontend Eng",
        projectname: "Elite Admin",
        statuscolor: "error",
        statustext: "Low",
      },
      {
        img: "/5.jpg",
        activestate: "",
        leadname: "Micheal Doe",
        leademail: "Content Writer",
        projectname: "Helping Hands",
        statuscolor: "warning",
        statustext: "High",
      },
    ],
  }),
  components: {},
};
</script>