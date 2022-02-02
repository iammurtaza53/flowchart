<template>
  <v-container fluid class="down-top-padding py-0">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <v-row>
      <v-col cols="12">
        <TheSalesCards></TheSalesCards>
      </v-col>

      <v-col cols="12" sm="12" lg="9">
        <TheSalesOverview></TheSalesOverview>
      </v-col>
      <v-col cols="12" sm="12" lg="3">
        <TheVisitSeparation></TheVisitSeparation>
      </v-col>
      <v-col cols="12" sm="12" lg="6" class="d-flex align-stretch">
        <TheEarningReport></TheEarningReport>
      </v-col>
      <v-col cols="12" sm="12" lg="6" class="d-flex align-stretch">
        <TheRecentComments></TheRecentComments>
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
      <v-col cols="12" lg="6">
        <TheActivityTimeline></TheActivityTimeline>
      </v-col>
      <v-col cols="12" lg="6">
        <TheSocialCard></TheSocialCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Minimal",

  data: () => ({
    page: {
      title: "Minimal",
    },
    breadcrumbs: [
      {
        text: "Dashboard",
        disabled: false,
        to: "/dashboards/minimal",
      },
      {
        text: "Minimal",
        disabled: true,
      },
    ],
  }),
  components: {
    TheSalesOverview: () =>
      import(
        "@/views/dashboards/dashboardComponents/sales-overview/TheSalesOverview"
      ),
    TheVisitSeparation: () =>
      import(
        "@/views/dashboards/dashboardComponents/visit-separation/TheVisitSeparation"
      ),
    TheSalesCards: () =>
      import("@/views/dashboards/dashboardComponents/sales-cards/SalesCards"),
    TheEarningReport: () =>
      import(
        "@/views/dashboards/dashboardComponents/earning-report/TheEarningReport"
      ),
    TheRecentComments: () =>
      import(
        "@/views/dashboards/dashboardComponents/recent-comments/TheRecentComments"
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
    TheActivityTimeline: () =>
      import(
        "@/views/dashboards/dashboardComponents/activity-timeline/TheActivityTimeline"
      ),
    TheSocialCard: () =>
      import(
        "@/views/dashboards/dashboardComponents/social-card/TheSocialCard"
      ),
  },
};
</script>