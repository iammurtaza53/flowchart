<script>
export default {
  SalesoverChart: {
    series: [
      {
        name: "Sales",
        data: [0, 150, 110, 240, 200, 200, 300, 200, 380, 300, 400, 380],
      },
      {
        name: "Expense",
        data: [0, 100, 70, 100, 240, 180, 220, 140, 250, 210, 340, 320],
      },
      {
        name: "Earning",
        data: [0, 50, 30, 60, 180, 120, 180, 80, 190, 150, 240, 240],
      },
    ],
    chartOptions: {
      chart: {
        height: 370,
        type: "area",
        stacked: true,
        fontFamily: "Montserrat,sans-serif",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 3,
        strokeColors: "transparent",
      },
      stroke: {
        curve: "smooth",
        width: "2",
      },
      fill: {
        type: "solid",
        colors: ["#e9edf2", "#398bf7", "#7460ee"],
        opacity: 1,
      },
      colors: ["#e9edf2", "#398bf7", "#7460ee"],
      legend: {
        show: false,
      },
      grid: {
        show: true,
        strokeDashArray: 0,
        borderColor: "rgba(0,0,0,0.1)",
        yaxis: {
          show: false,
        },
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
            colors: "#a1aab2",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#a1aab2",
          },
        },
      },
      tooltip: {
        theme: "dark",
        fillColors: ["#e9edf2", "#398bf7", "#7460ee"],
      },
    },
  },
};
</script>