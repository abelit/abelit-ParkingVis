<template>
  <div class="left-chart-1">
    <div class="lc1-header">车位占用率</div>
    <!-- <div class="lc1-details">设备运行总数<span>430</span></div> -->
    <dv-capsule-chart class="lc1-chart" :config="config" />
  </div>
</template>

<script>
export default {
  name: "LeftChart1",
  data() {
    return {
      config: {
        data: [
          {
            name: "贵阳",
            value: 88
          },
          {
            name: "遵义",
            value: 72
          },
          {
            name: "六盘水",
            value: 60
          },
          {
            name: "铜仁",
            value: 55
          },
          {
            name: "毕节",
            value: 63
          },
          {
            name: "黔东南",
            value: 50
          },
          {
            name: "黔西南",
            value: 46
          },
          {
            name: "其他",
            value: 30
          },
          {
            value: 100,
            colors: ["#ffffff",""]
          }
        ],
        colors: ["#00baff", "#3de7c9", "#fff", "#ffc530", "#469f4b"],
        unit: "%"
      }
    };
  }
};
</script>

<style lang="less">
.left-chart-1 {
  width: 100%;
  height: 100%;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, 0.5);
   border-bottom: 2px solid rgba(1, 153, 209, 0.5);
  box-sizing: border-box;
  //   flex-grow: 0;
    padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  .lc1-header {
    height: 50px;
    font-weight: bold;
    text-indent: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  //   .lc1-details {
  //     height: 100px;
  //     font-size: 16px;
  //     display: flex;
  //     align-items: center;
  //     text-indent: 20px;
  //     span {
  //       color: #096dd9;
  //       font-weight: bold;
  //       font-size: 35px;
  //       margin-left: 20px;
  //     }
  //   }
  .lc1-chart {
    flex: 1;
  }
}
</style>
