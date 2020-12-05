<template>
  <div id="rose-chart">
    <div class="rose-chart-title">各州市实时车流量</div>
    <!-- <div class="rose-chart-label">
      出场数 进场数
    </div> -->
    <div class="rose-chart-body">
      <dv-charts :option="option" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RoseChart",
  data() {
    return {
      option: {}
    };
  },
  methods: {
    createData() {
      const { randomExtend } = this;

      this.option = {
        title: {
          // text: ""
        },
        legend: {
          data: ["进场车量", "出场车量"],
          top: 15,
          right: 50,
          textStyle: {
              fill: "#ffffff"
            }
        },
        xAxis: {
          data: ["贵阳", "遵义", "六盘水", "铜仁", "黔东南", "黔西南", "其他"],
          axisLabel: {
            style: {
              fill: "#ffffff"
            }
          }
        },
        yAxis: {
          data: "value",
          axisLabel: {
            formatter: "{value}",
             style: {
              fill: "#ffffff"
            }
          }
        },
        series: [
          {
            name: "进场车量",
            data: [12000, 9230, 8900, 3100, 4500, 5020, 3985],
            type: "bar"
          },
          {
            name: "出场车量",
            data: [9983, 7960, 7800, 2702, 4356, 4100, 3162],
            type: "bar"
          }
        ],
        color: ["#00baff", "#3de7c9", "#fff", "#ffc530", "#469f4b"]
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

<style lang="less" scoped>
#rose-chart {
  width: 100%;
  height: 100%;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, 0.5);
  border-bottom: 2px solid rgba(1, 153, 209, 0.5);
  box-sizing: border-box;
   align-items: center;
   justify-items: center;

  .rose-chart-title {
    height: 50px;
    font-weight: bold;
    text-indent: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
  }

  .rose-chart-body {
    height: calc(100% - 50px);
    // display: flex;
    // align-items: center;
  }
  .dv-charts-container {
    display: relative;
    height: 100% !important;
  }
}
</style>
