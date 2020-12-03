<template>
  <div id="data-view">
    <dv-full-screen-container
      v-if="loading"
      style="display:flex; display: -webkit-flex;justify-content:center;align-items:center"
    >
      <!-- <dv-decoration-7 style="height:60px;margin-top: -60px;margin-bottom: 30px"><span style="font-size:48px; font-weight: bold;filter:Shadow()">欢迎使用睿云智慧停车云平台</span></dv-decoration-7> -->
      <dv-decoration-11
        style="width:680px;height:120px;margin-top: -80px;margin-bottom: 30px"
        ><span style="font-size:48px; font-weight: bold;"
          >欢迎使用睿云智慧停车云平台</span
        ></dv-decoration-11
      >

      <dv-decoration-9 style="width:360px;height:360px;"
        ><span style="font-size: 48px">{{ progress }}%</span></dv-decoration-9
      >
    </dv-full-screen-container>
    <dv-full-screen-container v-else>
      <top-header />

      <div class="main-content">
        <digital-flop />

        <div class="block-left-right-content">
          <!-- <ranking-board /> -->
          <div class="block-bottom-left-content">
            <div class="detail-left-top-content">
              <park-usage />
            </div>
            <div class="detail-left-bottom-content">
              <real-traffic />
            </div>
          </div>
          <div class="block-bottom-mid-content">
            <div class="detail-mid-top-content">
              <park-map />
            </div>
            <div class="detail-mid-bottom-content">
              <park-period />
            </div>
          </div>
          <div class="block-bottom-right-content">
            <div class="detail-right-top-content">
              <rose-chart />

              <!-- <water-level-chart /> -->

              <!-- <scroll-board /> -->
            </div>
            <div class="detail-right-bottom-content">
              <scroll-board />
            </div>
            <!-- <cards /> -->
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import topHeader from "./topHeader";
import digitalFlop from "./digitalFlop";
import rankingBoard from "./rankingBoard";
import roseChart from "./roseChart";
import waterLevelChart from "./waterLevelChart";
import scrollBoard from "./scrollBoard";
import cards from "./cards";
import realTraffic from "./realTraffic";
import parkUsage from "./parkUsage";
import parkPeriod from './parkPeriod.vue';
import parkMap from './parkMap.vue';

export default {
  name: "DataView",
  components: {
    topHeader,
    digitalFlop,
    rankingBoard,
    roseChart,
    waterLevelChart,
    scrollBoard,
    cards,
    realTraffic,
    parkUsage,
    parkPeriod,
    parkMap
  },
  data() {
    return {
      loading: true,
      progress: 0
    };
  },
  methods: {},
  mounted() {
    setInterval(() => {
      if (this.progress >= 100) {
        return;
      }
      this.progress = this.progress + 10;
    }, 200);
    setTimeout(() => {
      this.loading = false;
    }, 2100);
  }
};
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url("./img/bg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .block-left-right-content {
    flex: 1;
    display: flex;
    margin-top: 10px;
  }

  .block-bottom-mid-content {
    flex: 4;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: rgba(6, 30, 93, 0.5)
    // padding-left: 20px;
    // margin-left:20px;
  }
  .block-bottom-left-content {
    flex: 2;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-right: 10px;
  }
  .block-bottom-right-content {
    flex: 2;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 10px;
  }

  .detail-right-top-content {
    height: 40%;
    display: flex;
    // flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 10px;
  }
  .detail-right-bottom-content {
    height: 60%;
    display: flex;
    // flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 10px;
  }
  .detail-left-top-content {
    height: 40%;
    display: flex;
    // flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 10px;
  }

  .detail-left-bottom-content {
    height: 60%;
    display: flex;
    // flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 10px;
  }
  .detail-mid-top-content {
    height: 70%;
    display: flex;
    // flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 10px;
  }
  .detail-mid-bottom-content {
    height: 30%;
    display: flex;
    // flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 10px;
  }
}
</style>
