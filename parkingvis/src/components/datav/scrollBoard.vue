<template>
  <div id="scroll-board">
    <dv-scroll-board :config="config" :dur="5" />
  </div>
</template>

<script>
import moment from "moment";
const randomDate = () => {
  // 生产当月的开始日期
  let startDate = moment()
    .startOf("day")
    .toDate();
  // 截止日期
  let endDate = new Date();
  let date = new Date(+startDate + Math.random() * (endDate - startDate));
  let hour = (0 + Math.random() * (23 - 0)) | 0;
  let minute = (0 + Math.random() * (59 - 0)) | 0;
  let second = (0 + Math.random() * (59 - 0)) | 0;
  date.setHours(hour);
  date.setMinutes(minute);
  date.setSeconds(second);

  return moment(date).format("YYYY-MM-DD HH:mm:ss");
};
export default {
  name: "ScrollBoard",
  data() {
    return {
      config: {
        header: [
          '<span style="font-weight:bold;">车牌号</span?>',
          '<span style="font-weight:bold;">进出场</span>',
          '<span style="font-weight:bold;">时间</span>'
        ],
        data: [
          ["贵A5265G", "进场", randomDate()],
          ["贵A65246", "进场", randomDate()],
          ["贵B86584", "出场", randomDate()],
          ["贵A28131", "进场", randomDate()],
          ["贵B35655", "进场", randomDate()],
          ["贵C65549", "进场", randomDate()],
          ["贵J88325", "出场", randomDate()],
          ["贵J18354", "出场", randomDate()],
          ["贵A68753", "进场", randomDate()],
          ["贵G36955", "出场", randomDate()],
          ["贵D89620", "进场", randomDate()],
          ["贵A5546M", "进场", randomDate()],
          ["贵G98625", "出场", randomDate()],
          ["贵D85138", "进场", randomDate()],
          ["贵A52552", "进场", randomDate()],
          ["贵A85641", "进场", randomDate()],
          ["贵A80004", "出场", randomDate()],
          ["贵A88831", "进场", randomDate()],
          ["贵B96563", "进场", randomDate()],
          ["贵C87516", "进场", randomDate()]
        ],
        index: true,
        columnWidth: [70, 120, 120],
        align: ["center"],
        rowNum: 7,
        headerBGC: "#061339",
        headerHeight: 45,
        oddRowBGC: "rgba(0, 44, 81, 0.8)",
        evenRowBGC: "rgba(10, 29, 50, 0.8)"
      }
    };
  }
};
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
