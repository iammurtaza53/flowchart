<template>
  <v-container fluid class="down-top-padding py-0">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <TheSalesCards></TheSalesCards>
      </v-col>
      <v-col cols="12" lg="6">
        <TheYearlyEarning></TheYearlyEarning>
      </v-col>
      <v-col cols="12" lg="6">
        <TheMonthlyEarning></TheMonthlyEarning>
      </v-col>
      <v-col cols="12" lg="8">
        <TheTotalVisits></TheTotalVisits>
      </v-col>
      <v-col cols="12" sm="12" lg="4">
        <TheBrowserStats></TheBrowserStats>
      </v-col>
      <v-col cols="12" sm="12" lg="6" class="d-flex align-stretch">
        <TheMonthTable></TheMonthTable>
      </v-col>
      <v-col cols="12" sm="12" lg="6" class="d-flex align-stretch">
        <TheActivityTimeline></TheActivityTimeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Modern",
  data: () => ({
    page: {
      title: "Modern",
    },
    breadcrumbs: [
      {
        text: "Dashboard",
        disabled: false,
        to: "/dashboards/minimal",
      },
      {
        text: "Modern",
        disabled: true,
      },
    ],
  }),
  components: {
    TheSalesCards: () =>
      import("@/views/dashboards/dashboardComponents/sales-cards/SalesCards"),
    TheYearlyEarning: () =>
      import(
        "@/views/dashboards/dashboardComponents/yearly-earning/TheYearlyEarning"
      ),
    TheMonthlyEarning: () =>
      import(
        "@/views/dashboards/dashboardComponents/monthly-earning/TheMonthlyEarning"
      ),
    TheTotalVisits: () =>
      import(
        "@/views/dashboards/dashboardComponents/total-visits/TheTotalVisits"
      ),
    TheBrowserStats: () =>
      import(
        "@/views/dashboards/dashboardComponents/browser-stats/TheBrowserStats"
      ),
    TheActivityTimeline: () =>
      import(
        "@/views/dashboards/dashboardComponents/activity-timeline/TheActivityTimeline"
      ),
    TheMonthTable: () =>
      import(
        "@/views/dashboards/dashboardComponents/month-table/TheMonthTable"
      ),
  },
};
</script>