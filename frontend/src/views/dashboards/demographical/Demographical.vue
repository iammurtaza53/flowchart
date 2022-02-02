<template>
  <v-container fluid class="down-top-padding py-0">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" class="py-0">
        <TheColorSalesCards></TheColorSalesCards>
      </v-col>
      <v-col cols="12" lg="6" sm="12" class="d-flex align-stretch">
        <TheSalesOverview2></TheSalesOverview2>
      </v-col>
      <v-col cols="12" lg="3" sm="12" class="d-flex align-stretch">
        <TheBusinessCard></TheBusinessCard>
      </v-col>
      <v-col cols="12" lg="3" sm="12" class="d-flex align-stretch">
        <TheVisitSeparation></TheVisitSeparation>
      </v-col>
      <v-col cols="12" lg="4" sm="12" class="d-flex align-stretch">
        <div class="w-100">
          <TheFollowerCardA></TheFollowerCardA>
          <TheFollowerCardB></TheFollowerCardB>
          <TheFollowerCardC></TheFollowerCardC>
        </div>
      </v-col>
      <v-col cols="12" lg="8" sm="12" class="d-flex align-stretch">
        <TheWebsiteVisit></TheWebsiteVisit>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <TheMonthTable></TheMonthTable>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <TheActivityTimeline></TheActivityTimeline>
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
  name: "Demographical",

  data: () => ({
    page: {
      title: "Demographical",
    },
    breadcrumbs: [
      {
        text: "Dashboard",
        disabled: false,
        to: "/dashboards/minimal",
      },
      {
        text: "Demographical",
        disabled: true,
      },
    ],
  }),
  components: {
    TheColorSalesCards: () =>
      import(
        "@/views/dashboards/dashboardComponents/color-sales-cards/TheColorSalesCards"
      ),
    TheSalesOverview2: () =>
      import(
        "@/views/dashboards/dashboardComponents/sales-overview2/TheSalesOverview2"
      ),
    TheRecentComments: () =>
      import(
        "@/views/dashboards/dashboardComponents/recent-comments/TheRecentComments"
      ),
    TheVisitSeparation: () =>
      import(
        "@/views/dashboards/dashboardComponents/visit-separation/TheVisitSeparation"
      ),
    TheBusinessCard: () =>
      import(
        "@/views/dashboards/dashboardComponents/business-card/TheBusinessCard"
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
    TheWebsiteVisit: () =>
      import(
        "@/views/dashboards/dashboardComponents/website-visit/TheWebsiteVisit"
      ),
    TheMonthTable: () =>
      import(
        "@/views/dashboards/dashboardComponents/month-table/TheMonthTable"
      ),
    TheActivityTimeline: () =>
      import(
        "@/views/dashboards/dashboardComponents/activity-timeline/TheActivityTimeline"
      ),
    TheRecentChats: () =>
      import(
        "@/views/dashboards/dashboardComponents/recent-chats/TheRecentChats"
      ),
  },
};
</script>