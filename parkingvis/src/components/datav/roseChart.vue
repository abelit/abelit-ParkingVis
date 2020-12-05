<template>
  <div id="rose-chart">
    <div class="rose-chart-title">车场分布</div>
    <div class="chart-main-content">总共<span>{{parkingNum}}</span>个车场</div>
    <dv-charts :option="option" />
  </div>
</template>

<script>
export default {
  name: "RoseChart",
  data() {
    return {
      parkingNum: null||'_',
      option: {}
    };
  },
  methods: {
    createData() {
      const { randomExtend } = this;

      this.option = {
        series: [
          {
            type: 'pie',
            data: [
              { name: '贵阳', value: 60 },
              { name: '遵义', value: 50 },
              { name: '六盘水', value: 37 },
              { name: '毕节', value: 20 },
              { name: '铜仁', value: 18 },
              { name: '其他', value: 22 }
            ],
            radius: ['45%', '65%'],
            insideLabel: {
              show: false
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            outsideLabel: {
              labelLineEndLength: 10,
              formatter: '{percent}%\n{name}',
              style: {
                fontSize: 14,
                fill: '#fff'
              }
            }
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b']
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
    this.parkingNum = 253;

    createData();

    setInterval(createData, 30000);
  }
};
</script>

<style lang="less">
#rose-chart {
  width: 100%;
  height: 100%;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, 0.5);
  box-sizing: border-box;

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
