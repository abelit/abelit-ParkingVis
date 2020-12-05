<template>
  <div id="digital-flop">
    <div
      class="digital-flop-item"
      v-for="item in digitalFlopData"
      :key="item.title"
    >
      <div
        :class="
          item.name == 'parknum' || item.name == 'parked'
            ? 'digital-flop-title-emphasis'
            : 'digital-flop-title'
        "
      >
        {{ item.title }}
      </div>
      <dv-decoration-3
        v-if="item.name == 'parknum' || item.name == 'parked'"
        style="width:50%;height:10px;"
      />
      <div class="digital-flop">
        <dv-digital-flop
          :config="item.number"
          style="width:100px;height:50px;"
        />
        <div class="unit">{{ item.unit }}</div>
      </div>
    </div>

    <dv-decoration-10 />
  </div>
</template>

<script>
export default {
  name: "DigitalFlop",
  data() {
    return {
      digitalFlopData: []
    };
  },
  methods: {
    createData() {
      const { randomExtend } = this;

      this.digitalFlopData = [
        {
          name: "carpark",
          title: "平台车场",
          number: {
            number: [randomExtend(253, 253)],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#40faee",
              fontWeight: "bold"
            }
          },
          unit: "个"
        },
        {
          name: "exceptpark",
          title: "异常车场",
          number: {
            number: [randomExtend(3, 5)],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#f46827",
              fontWeight: "bold"
            }
          },
          unit: "个"
        },
        {
          name: "districtpark",
          title: "覆盖县区",
          number: {
            number: [randomExtend(55, 55)],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#4d99fc",
              fontWeight: "bold"
            }
          },
          unit: "个"
        },
        {
          name: "parknum",
          title: "总车位",
          number: {
            number: [randomExtend(30000, 32000)],
            content: "{nt}",
            textAlign: "center",
            style: {
              fill: "#40faee",
              fontWeight: "bold",
              fontFamily: "electronicFont",
              fontSize: "36"
            }
          }
          // unit: "个"
        },
        {
          name: "parked",
          title: "已停车",
          number: {
            number: [randomExtend(20000, 30000)],
            content: "{nt}",
            textAlign: "center",
            style: {
              fill: "#4d99fc",
              fontWeight: "bold",
              fontFamily: "electronicFont",
              fontSize: "36"
            }
          }
          // unit: "个"
        },
        {
          name: "out",
          title: "累计出场",
          number: {
            number: [randomExtend(155556, 157556)],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#40faee",
              fontWeight: "bold"
            }
          },
          unit: "次"
        },
        {
          name: "in",
          title: "累计进场",
          number: {
            number: [randomExtend(157556, 158556)],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#4d99fc",
              fontWeight: "bold"
            }
          },
          unit: "次"
        },
        {
          name: "parkload",
          title: "车位平均压力",
          number: {
            number: [randomExtend(50, 70)],
            content: "{nt}",
            textAlign: "right",
            style: {
              fill: "#f46827",
              fontWeight: "bold"
            }
          },
          unit: "%"
        }
      ];
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
    createData();
    // setInterval(createData, 30000);
  },
  created() {
    const { createData } = this;

    createData();
  }
};
</script>

<style lang="less">
/* 声明字体*/
@font-face {
  font-family: "electronicFont";
  src: url(../../assets/font/DS-DIGIT.TTF);
}
#digital-flop {
  position: relative;
  height: 15%;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(6, 30, 93, 0.5);

  .dv-decoration-10 {
    position: absolute;
    width: 95%;
    left: 2.5%;
    height: 5px;
    bottom: 0px;
  }

  .digital-flop-item {
    width: 13%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 3px solid rgb(6, 30, 93);
    border-right: 3px solid rgb(6, 30, 93);
  }

  .digital-flop-title {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .digital-flop-title-emphasis {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .digital-flop {
    display: flex;
  }
  .item-number {
    font-family: electronicFont;
  }
  .unit {
    margin-left: 10px;
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    padding-bottom: 13px;
  }
}
</style>
