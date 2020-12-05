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
import gzCode from "@/api/code";

const colors = ["#B8E1FF", "#7DAAFF", "#3D76DD", "#0047A5", "#001D70"];
export default {
  data() {
    return {
      mapDepth: 3,
      mapData: gzCode
    };
  },
  mounted() {
    this.initMap();
    console.log(gzCode)
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
