<template>
  <div id="park-map" :key="mapDepth">
    <div class="park-map-label">
      <button
        :class="
          mapDepth == 2 ? 'park-map-label-btn-active' : 'park-map-label-btn'
        "
        @click="changeMap(2)"
      >
        州市
      </button>
      <button
        :class="
          mapDepth == 3 ? 'park-map-label-btn-active' : 'park-map-label-btn'
        "
        @click="changeMap(3)"
      >
        县区
      </button>
    </div>
  </div>
</template>

<script>
import { Scene } from "@antv/l7";
import { ProvinceLayer } from "@antv/l7-district";
import { Mapbox } from "@antv/l7-maps";
const colors = ["#B8E1FF", "#7DAAFF", "#3D76DD", "#0047A5", "#001D70"];
export default {
  data() {
    return {
      mapDepth: 3,
      mapData: {
        "520100": {
          province: "贵州省",
          county: "贵阳市",
          carpark: 10,
          park: 3000,
          parked: 300
        },
        "520101": {
          province: "贵州省",
          county: "贵阳市辖区",
          carpark: 10,
          park: 3000,
          parked: 300
        },
        "520102": {
          province: "贵州省",
          county: "南明区",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520112": {
          province: "贵州省",
          county: "乌当区",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520111": {
          province: "贵州省",
          county: "花溪区",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520113": {
          province: "贵州省",
          county: "白云区",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520115": {
          province: "贵州省",
          county: "观山湖区",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520103": {
          province: "贵州省",
          county: "云岩区",
          carpark: 10,
          park: 200,
          parked: 300
        },
        "520122": {
          province: "贵州省",
          county: "息烽县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520121": {
          province: "贵州省",
          county: "开阳县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520123": {
          province: "贵州省",
          county: "修文县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520628": {
          province: "贵州省",
          county: "松桃苗族自治县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520627": {
          province: "贵州省",
          county: "沿河土家族自治县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520622": {
          province: "贵州省",
          county: "玉屏侗族自治县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520621": {
          province: "贵州省",
          county: "江口县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520527": {
          province: "贵州省",
          county: "赫章县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520522": {
          province: "贵州省",
          county: "黔西县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520521": {
          province: "贵州省",
          county: "大方县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520524": {
          province: "贵州省",
          county: "织金县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520523": {
          province: "贵州省",
          county: "金沙县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520526": {
          province: "贵州省",
          county: "威宁彝族回族苗族自治县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520525": {
          province: "贵州省",
          county: "纳雍县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520201": {
          province: "贵州省",
          county: "钟山区",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520203": {
          province: "贵州省",
          county: "六枝特区",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520221": {
          province: "贵州省",
          county: "水城县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520181": {
          province: "贵州省",
          county: "清镇市",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520300": {
          province: "贵州省",
          county: "遵义市",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520328": {
          province: "贵州省",
          county: "湄潭县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520327": {
          province: "贵州省",
          county: "凤冈县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520330": {
          province: "贵州省",
          county: "习水县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520329": {
          province: "贵州省",
          county: "余庆县",
          carpark: 10,
          park: 55,
          parked: 300
        },
        "520382": {
          province: "贵州省",
          county: "仁怀市",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520381": {
          province: "贵州省",
          county: "赤水市",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520281": {
          province: "贵州省",
          county: "盘州市",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520304": {
          province: "贵州省",
          county: "播州区",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520303": {
          province: "贵州省",
          county: "汇川区",
          carpark: 10,
          park: 1000,
          parked: 300
        },
        "520302": {
          province: "贵州省",
          county: "红花岗区",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520322": {
          province: "贵州省",
          county: "桐梓县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520324": {
          province: "贵州省",
          county: "正安县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520323": {
          province: "贵州省",
          county: "绥阳县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520326": {
          province: "贵州省",
          county: "务川仡佬族苗族自治县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520325": {
          province: "贵州省",
          county: "道真仡佬族苗族自治县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520502": {
          province: "贵州省",
          county: "七星关区",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520402": {
          province: "贵州省",
          county: "西秀区",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520403": {
          province: "贵州省",
          county: "平坝区",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520422": {
          province: "贵州省",
          county: "普定县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520424": {
          province: "贵州省",
          county: "关岭布依族苗族自治县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520423": {
          province: "贵州省",
          county: "镇宁布依族苗族自治县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520425": {
          province: "贵州省",
          county: "紫云苗族布依族自治县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520602": {
          province: "贵州省",
          county: "碧江区",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520603": {
          province: "贵州省",
          county: "万山区",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520624": {
          province: "贵州省",
          county: "思南县",
          carpark: 10,
          park: 650,
          parked: 300
        },
        "520623": {
          province: "贵州省",
          county: "石阡县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520626": {
          province: "贵州省",
          county: "德江县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "520625": {
          province: "贵州省",
          county: "印江土家族苗族自治县",
          carpark: 10,
          park: 550,
          parked: 300
        },
        "522323": {
          province: "贵州省",
          county: "普安县",
          carpark: 10,
          park: 800,
          parked: 300
        },
        "520200": {
          province: "贵州省",
          county: "六盘水市",
          carpark: 10,
          park: 800,
          parked: 300
        },
        "522400": {
          province: "贵州省",
          county: "毕节市",
          carpark: 10,
          park: 800,
          parked: 300
        },
        "520500": {
          province: "贵州省",
          county: "毕节市",
          carpark: 10,
          park: 800,
          parked: 300
        },
        "520600": {
          province: "贵州省",
          county: "铜仁地区",
          carpark: 10,
          park: 800,
          parked: 300
        },
        "522700": {
          province: "贵州省",
          county: "黔南州",
          carpark: 10,
          park: 800,
          parked: 300
        },
        "522300": {
          province: "贵州省",
          county: "黔西南州",
          carpark: 10,
          park: 800,
          parked: 300
        },
        "520400": {
          province: "贵州省",
          county: "安顺市",
          carpark: 10,
          park: 800,
          parked: 300
        },
         "522600": {
          province: "贵州省",
          county: "黔东南州",
          carpark: 10,
          park: 800,
          parked: 300
        }
      }
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    changeMap(param) {
      if (param != this.mapDepth) {
        this.mapDepth = param;
        this.$nextTick(() => {
          this.initMap();
        });
      }
    },
    initMap() {
      //   const response = await fetch(
      //     "https://gw.alipayobjects.com/os/bmw-prod/149b599d-21ef-4c24-812c-20deaee90e20.json"
      //   );
      //   const provinceData = await response.json();
      const provinceData = this.mapData;
      const data = Object.keys(provinceData).map(key => {
        return {
          code: key,
          name: provinceData[key]["county"],
          carpark: provinceData[key]["carpark"],
          park: provinceData[key]["park"],
          parked: provinceData[key]["parked"]
        };
      });

      const scene = new Scene({
        id: "park-map",
        map: new Mapbox({
          center: [106.7091771, 26.62990674],
          pitch: 0,
          style: "blank",
          zoom: 0,
          minZoom: 0,
          maxZoom: 10
        })
      });

      scene.on("loaded", () => {
        new ProvinceLayer(scene, {
          data,
          joinBy: ["adcode", "code"],
          adcode: ["520000"],
          depth: this.mapDepth,
          autoFit: true,
          label: {
            field: "NAME_CHN",
            textAllowOverlap: false
          },
          fill: {
            color: {
              field: "park",
              values: colors
            }
          },
          popup: {
            enable: true,
            Html: props => {
              return `<div><h4><span style="color: black">${props.NAME_CHN}:</span></h4><p><span  style="color: black">停车场数量: ${props.carpark}</span></p><p><span  style="color: black">车位数量: ${props.park}</span></p><p><span  style="color: black">使用数量: ${props.parked}</span></p></div>`;
            }
          },
          bubble: {
            enable: true,
            color: "orange",
            size: 8
          }
        });
      });
    }
  }
};
</script>

<style lang="less">
#park-map {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  //   background-color: rgba(6, 30, 93, 0.5);
  //   border-top: 2px solid rgba(1, 153, 209, 0.5);
  box-sizing: border-box;
  .park-map-label {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 999;
    .park-map-label-btn {
      // background-color: #3de7c9;
      background-color: #e3ffff;
      border: none;
    }
    .park-map-label-btn-active {
      background-color: #2ebaff;
      // background-color: #e3ffff;
      border: none;
    }
  }
}
</style>
