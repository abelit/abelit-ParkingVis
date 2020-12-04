import request from "@/utils/request";

const api = {
  // top
  weather:
    "https://restapi.amap.com/v3/weather/weatherInfo?key=50f28c245fa73dce041f7c4ecfa0d894",
  parkinfo: "/parkinfo", // carpark, exceptpark, districtpark
  parknum: "/parknum", // parknum
  parked: "/parked", // parked
  allinout: "/allinout", // in,out
  parkload: "/parkload", // parkload

  // main-lef
  parkrate: "/parkrate",
  realtraffic: "/realtraffic",

  // main-center
  parkmap: "/parkmap",
  parkperiod: "/parkperiod",

  // main-right
  cirycarpark: "/cirycarpark",
  carinout: "/carinout"
};

export default api;

export function getWeather(parameter) {
  return request({
    url: api.weather,
    method: "get",
    params: parameter
  });
}

export function getParkInfo(parameter) {
  return request({
    url: api.parkinfo,
    method: "get",
    params: parameter
  });
}

export function getParkNum(parameter) {
  return request({
    url: api.parknum,
    method: "get",
    params: parameter
  });
}

export function getParked(parameter) {
  return request({
    url: api.parked,
    method: "get",
    params: parameter
  });
}

export function getAllInOut(parameter) {
  return request({
    url: api.allinout,
    method: "get",
    params: parameter
  });
}

export function getParkLoad(parameter) {
  return request({
    url: api.parkload,
    method: "get",
    params: parameter
  });
}

export function getParkRate(parameter) {
  return request({
    url: api.parkrate,
    method: "get",
    params: parameter
  });
}

export function getRealTraffic(parameter) {
  return request({
    url: api.realtraffic,
    method: "get",
    params: parameter
  });
}

export function getParkMap(parameter) {
  return request({
    url: api.parkmap,
    method: "get",
    params: parameter
  });
}

export function getParkPeriod(parameter) {
  return request({
    url: api.parkperiod,
    method: "get",
    params: parameter
  });
}

export function getCityCarPark(parameter) {
  return request({
    url: api.cirycarpark,
    method: "get",
    params: parameter
  });
}
export function getCarInOut(parameter) {
  return request({
    url: api.carinout,
    method: "get",
    params: parameter
  });
}
