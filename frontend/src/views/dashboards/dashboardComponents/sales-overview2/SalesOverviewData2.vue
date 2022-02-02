<script>
export default {
  SalesoverChart: {
    series: [
      {
        name: "Earnings ($)",
        data: [0, 150, 110, 240, 200, 200, 300, 200, 380, 300, 400, 380],
      },
    ],
    chartOptions: {
      colors: ["#1e88e5"],
      chart: {
        fontFamily: "Montserrat,sans-serif",
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: false,
        },
      },
      grid: {
        borderColor: "rgba(0, 0, 0, .1)",
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 4,
        strokeColors: "transparent",
      },
      legend: {
        show: false,
      },
      xaxis: {
        type: "category",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: {
          style: {
            cssClass: "grey--text lighten-2--text fill-color",
          },
        },
      },
      yaxis: {
        show: true,
        labels: {
          style: {
            cssClass: "grey--text lighten-2--text fill-color",
          },
        },
      },
      stroke: {
        curve: "straight",
        width: 3,
      },
      tooltip: {
        theme: "dark",
      },
    },
  },
};
</script>