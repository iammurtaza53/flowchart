<template>
  <v-container fluid class="down-top-padding py-0">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <v-row>
      <v-col cols="12">
        helloworl
        <TheSalesCards></TheSalesCards>
      </v-col>
      <v-col cols="12" lg="9" class="d-flex align-stretch">
        <TheSalesOverview2></TheSalesOverview2>
      </v-col>
      <v-col cols="12" sm="12" lg="3" class="d-flex align-stretch">
        <TheVisitSeparation></TheVisitSeparation>
      </v-col>
      <v-col cols="12" sm="12" lg="6" class="d-flex align-stretch">
        <TheMonthTable></TheMonthTable>
      </v-col>
      <v-col cols="12" sm="12" lg="6" class="d-flex align-stretch">
        <TheActivityTimeline></TheActivityTimeline>
      </v-col>
      <v-col cols="12" sm="12" lg="4" class="d-flex align-stretch">
        <TheBusinessCard></TheBusinessCard>
      </v-col>
      <v-col cols="12" sm="12" lg="8" class="d-flex align-stretch">
        <TheWebsiteVisit></TheWebsiteVisit>
      </v-col>
      <v-col cols="12" lg="4">
        <TheFollowerCardA></TheFollowerCardA>
      </v-col>
      <v-col cols="12" lg="4">
        <TheFollowerCardB></TheFollowerCardB>
      </v-col>
      <v-col cols="12" lg="4">
        <TheFollowerCardC></TheFollowerCardC>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <TheTodoList></TheTodoList>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <TheSocialCard></TheSocialCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <TheMyContacts></TheMyContacts>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <TheFeeds></TheFeeds>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <TheRecentComments></TheRecentComments>
      </v-col>
      <v-col cols="12" lg="6">
        <TheRecentChats></TheRecentChats>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Analytical",

  data: () => ({
    page: {
      title: "Analytical",
    },
    breadcrumbs: [
      {
        text: "Dashboard",
        disabled: false,
        to: "/dashboards/minimal",
      },
      {
        text: "Analytical",
        disabled: true,
      },
    ],
  }),
  components: {
    TheSalesCards: () =>
      import("@/views/dashboards/dashboardComponents/sales-cards/SalesCards"),
    TheSalesOverview2: () =>
      import(
        "@/views/dashboards/dashboardComponents/sales-overview2/TheSalesOverview2"
      ),
    TheVisitSeparation: () =>
      import(
        "@/views/dashboards/dashboardComponents/visit-separation/TheVisitSeparation"
      ),
    TheBusinessCard: () =>
      import(
        "@/views/dashboards/dashboardComponents/business-card/TheBusinessCard"
      ),
    TheRecentComments: () =>
      import(
        "@/views/dashboards/dashboardComponents/recent-comments/TheRecentComments"
      ),
    TheTodoList: () =>
      import("@/views/dashboards/dashboardComponents/todo-list/TheTodoList"),
    TheActivityTimeline: () =>
      import(
        "@/views/dashboards/dashboardComponents/activity-timeline/TheActivityTimeline"
      ),
    TheFollowerCardA: () =>
      import(
        "@/views/dashboards/dashboardComponents/follower-card/TheFollowerCardA"
      ),
    TheFollowerCardB: () =>
      import(
        "@/views/dashboards/dashboardComponents/follower-card/TheFollowerCardB"
      ),
    TheFollowerCardC: () =>
      import(
        "@/views/dashboards/dashboardComponents/follower-card/TheFollowerCardC"
      ),
    TheSocialCard: () =>
      import(
        "@/views/dashboards/dashboardComponents/social-card/TheSocialCard"
      ),
    TheMyContacts: () =>
      import(
        "@/views/dashboards/dashboardComponents/my-contacts/TheMyContacts"
      ),
    TheRecentChats: () =>
      import(
        "@/views/dashboards/dashboardComponents/recent-chats/TheRecentChats"
      ),
    TheMonthTable: () =>
      import(
        "@/views/dashboards/dashboardComponents/month-table/TheMonthTable"
      ),
    TheWebsiteVisit: () =>
      import(
        "@/views/dashboards/dashboardComponents/website-visit/TheWebsiteVisit"
      ),
    TheFeeds: () =>
      import("@/views/dashboards/dashboardComponents/feeds/TheFeeds"),
  },
};
</script>