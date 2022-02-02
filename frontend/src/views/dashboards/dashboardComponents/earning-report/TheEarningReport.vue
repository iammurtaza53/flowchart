<template>
  <v-card flat class="mb-7 w-100">
    <v-card-text class="pa-5">
      <div class="">
        <span class="lstick"></span>
        <h3 class="title font-weight-regular">Earning Report</h3>
        <h6
          class="blue-grey--text text-no-wrap text--lighten-2 font-weight-regular subtitle-1"
        >
          Emplyee earning report
        </h6>
      </div>
    </v-card-text>
    <div class="pa-5 blue-grey lighten-5 d-md-flex align-center">
      <div>
        <h3 class="title font-weight-regular">July 2020</h3>
        <h6 class="text-no-wrap font-weight-regular subtitle-1">
          Total Earning
        </h6>
      </div>
      <v-spacer></v-spacer>
      <div class="ml-auto">
        <h2 class="success--text font-weight-regular">$5470</h2>
      </div>
    </div>
    <v-card-text class="pa-5">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="font-weight-medium subtitle-1">Name</th>
              <th class="font-weight-medium subtitle-1">Priority</th>
              <th class="font-weight-medium subtitle-1">Earnings</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in monthtable"
              :key="item.leadname"
              :class="item.activestate"
              class="month-item"
            >
              <td class="py-3">
                <div class="d-flex align-center">
                  <img
                    :src="require('@/assets/images/users' + item.img)"
                    alt="user"
                    class="rounded-circle"
                    width="45"
                  />
                  <div class="mx-4">
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
                <v-chip class="ma-2" :class="item.statuscolor" small label>{{
                  item.statustext
                }}</v-chip>
              </td>
              <td>
                <h5 class="font-weight-light subtitle-2">{{ item.money }}</h5>
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
  name: "TheEarningReport",
  data: () => ({
    select: { state: "January", abbr: "FL" },
    items: [
      { state: "January", abbr: "FL" },
      { state: "February", abbr: "GA" },
      { state: "March", abbr: "NE" },
      { state: "April", abbr: "CA" },
    ],
    monthtable: [
      {
        img: "/1.jpg",
        activestate: "",
        leadname: "Sunil Joshi",
        leademail: "Web Designer",
        statuscolor: "success",
        statustext: "Low",
        money: "$3.9K",
      },
      {
        img: "/2.jpg",
        activestate: "",
        leadname: "Andrew",
        leademail: "Project Manager",
        statuscolor: "info",
        statustext: "Medium",
        money: "$23.9K",
      },
      {
        img: "/3.jpg",
        activestate: "",
        leadname: "Bhavesh patel",
        leademail: "Developer",
        statuscolor: "deep-purple accent-2 white--text",
        statustext: "High",
        money: "$12.9K",
      },
      {
        img: "/4.jpg",
        activestate: "",
        leadname: "Nirav Joshi",
        leademail: "Frontend Eng",
        statuscolor: "error",
        statustext: "Low",
        money: "$10.9K",
      },
      {
        img: "/5.jpg",
        activestate: "",
        leadname: "Micheal Doe",
        leademail: "Content Writer",
        statuscolor: "warning",
        statustext: "High",
        money: "$12.9K",
      },
      {
        img: "/6.jpg",
        activestate: "",
        leadname: "Johnathan",
        leademail: "Graphic",
        statuscolor: "info",
        statustext: "High",
        money: "$2.6K",
      },
    ],
  }),
  components: {},
};
</script>