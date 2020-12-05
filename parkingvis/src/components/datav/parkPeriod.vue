<template>
  <dv-border-box-11
    id="park-period-chart"
    title="昨日车位压力分时图"
    :color="['#0199d180']"
  >
    <dv-charts :option="option" />
  </dv-border-box-11>
</template>

<script>
export default {
  name: "RoseChart",
  data() {
    return {
      parkingNum: null || "_",
      option: {}
    };
  },
  methods: {
    createData() {
      const { randomExtend } = this;

      this.option = {
        title: {
          // text: ''
        },
        xAxis: {
          data: [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00"
          ],
          axisLabel: {
            style: {
              fill: "#ffffff"
            }
          }
        },
        yAxis: {
          data: "value",
          axisLabel: {
            style: {
              fill: "#ffffff"
            }
          }
        },
        series: [
          {
            data: [
              13500,
              15800,
              13985,
              15200,
              5200,
              5230,
              4900,
              4100,
              5500,
              4200,
              3985,
              6200,
              12230,
              12985,
              11200,
              10230,
              6900,
              8900,
              9100,
              6230,
              5900,
              10100,
              9500,
              9200
            ],
            type: "line",
            lineArea: {
              show: true,
              gradient: ["rgba(55, 162, 218, 0.6)", "rgba(55, 162, 218, 0)"]
            },
            smooth: true,
            lineStyle: {
              // stroke: 'rgba(251, 114, 147, 1)',
              lineDash: [3, 3]
            }
          }
        ]
      };
    },
    randomExtend(minNum, maxNum) {
      if (arguments.length === 1) {
        return parseInt(Math.random() * minNum + 1, 10);
      } else {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      }
    }
  },
  mounted() {
    const { createData } = this;
    this.parkingNum = 500;

    createData();

    setInterval(createData, 30000);
  }
};
</script>

<style lang="less">
#park-period-chart {
  width: 100%;
  height: 95%;
  margin: 20px 0px 10px 0px;
}
#rose-chart {
  width: 100%;
  height: 100%;
  //   background-color: rgba(6, 30, 93, 0.5);
  //   border-top: 2px solid rgba(1, 153, 209, 0.5);
  //   box-sizing: border-box;

  .rose-chart-title {
    height: 50px;
    font-weight: bold;
    text-indent: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
  }

  .dv-charts-container {
    height: calc(~"100% - 100px");
  }

  .chart-main-content {
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;

    span {
      font-size: 35px;
      font-weight: bold;
      color: #58a1ff;
      margin: 0 5px;
      margin-bottom: -5px;
    }
  }
}
</style>
