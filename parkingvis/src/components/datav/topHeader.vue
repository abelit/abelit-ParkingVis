<template>
  <div id="top-header">
    <dv-decoration-8 class="header-left-decoration" />
    <dv-decoration-5 class="header-center-decoration" :dur="5" />
    <!-- <dv-decoration-6 style="width:300px;height:30px; margin-top: 55px" /> -->
    <dv-decoration-8 class="header-right-decoration" :reverse="true" />
    <div class="center-title">贵州睿云智慧停车</div>
    <div class="left-title">
      <span style="font-size: 18px; margin-right: 5px">{{
        weather.lives[0].city
      }}</span>
      <img class="left-title-img" :src="require('../../assets/icons/'+findKey(weatherMap,weather.lives[0].weather)+'.gif')" width="20" height="20" />
      <span style="font-size: 18px; margin-left: 5px; margin-right: 3px" >{{
        weather.lives[0].weather
      }}</span>
      {{ weather.lives[0].temperature }}&degC
      <span style="font-size: 18px; margin-left: 3px">
        {{ weather.lives[0].winddirection }}风</span
      >
      {{ weather.lives[0].windpower
      }}<span style="font-size: 18px;">级</span>
    </div>
    <div class="right-title">{{ timeDisplay }}</div>
  </div>
</template>

<script>
import { getWeather } from "@/api/parking";
import weatherMap from "@/api/weathertable";
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(H)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd HH:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d H:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function(fmt) {
  //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};
export default {
  name: "TopHeader",
  data() {
    return {
      timeDisplay: null,
      weatherMap: weatherMap,
      weather: {
        status: "1",
        count: "1",
        info: "OK",
        infocode: "10000",
        lives: [
          {
            province: "--",
            city: "--",
            adcode: "--",
            weather: "--",
            temperature: "--",
            winddirection: "--",
            windpower: "--",
            humidity: "--",
            reporttime: "2020-12-03 14:25:24"
          }
        ]
      }
    };
  },
  mounted() {
    setInterval(() => {
      this.timeDisplay = new Date().Format("yyyy-MM-dd hh:mm:ss");
    }, 1000);
     getWeather({city: '520100'}).then(res => {
       console.log(res)
      this.weather = res
    })
  },
  created() {
   
  },
  methods: {
    findKey(obj, value, compare = (a, b) => a === b) {
      return Object.keys(obj).find(k => compare(obj[k], value))||'unknown';
    }
  }
};
</script>

<style lang="less">
/* 声明字体*/
@font-face {
  font-family: electronicFont;
  src: url(../../assets/font/DS-DIGIT.TTF);
}
#top-header {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;

  .header-center-decoration {
    width: 40%;
    height: 60px;
    margin-top: 30px;
  }

  .header-left-decoration,
  .header-right-decoration {
    width: 25%;
    height: 60px;
  }

  .center-title {
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
  }
  .right-title {
    position: absolute;
    font-size: 28.5px;
    font-weight: bold;
    right: 11.5%;
    top: 38px;
    font-family: "electronicFont";
  }
  .left-title {
    position: absolute;
    font-size: 28.5px;
    font-weight: bold;
    left: 11.5%;
    top: 38px;
    font-family: "electronicFont";
    display: flex;
    align-items: center;
  }
}
</style>
