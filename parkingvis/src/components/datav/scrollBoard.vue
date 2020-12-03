<template>
  <div id="scroll-board">
    <dv-scroll-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'ScrollBoard',
  data () {
    return {
      config: {
        header: ['<span style="font-weight:bold;">车牌号</span?>', '<span style="font-weight:bold;">进出场</span>', '<span style="font-weight:bold;">时间</span>'],
        data: [
          ['贵A888888','进场','2019-07-01 19:25:00'],
          ['贵A888888','进场','2019-07-02 17:25:00'],
          ['贵A888888','出场','2019-07-03 16:25:00'],
          ['贵A888888','进场','2019-07-04 15:25:00'],
          ['贵A888888','进场','2019-07-05 14:25:00'],
          ['贵A888888','进场','2019-07-06 13:25:00'],
          ['贵A888888','出场','2019-07-07 12:25:00'],
          ['贵A888888','进场','2019-07-08 11:25:00'],
          ['贵A888888','出场','2019-07-09 10:25:00'],
          ['贵A888888','进场','2019-07-10 09:25:00']
        ],
        index: true,
        columnWidth: [70, 120, 120],
        align: ['center'],
        rowNum: 7,
        headerBGC: '#061339',
        headerHeight: 45,
        oddRowBGC: 'rgba(0, 44, 81, 0.8)',
        evenRowBGC: 'rgba(10, 29, 50, 0.8)'
      }
    }
  }
}
</script>

<style lang="less">
#scroll-board {
  width: 100%;
  box-sizing: border-box;
  border-top: 2px solid rgba(1, 153, 209, 0.5);
  border-bottom: 2px solid rgba(1, 153, 209, 0.5);
  // margin-left: 20px;
  height: 100%;
  overflow: hidden;
}
</style>
