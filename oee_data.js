const momentTZ = require("moment-timezone");
const fs = require("fs");
const schema = {
  time: "",
  CW_LB1_ng_count: 0,
  CW_LB1_pass_count: 0,
  CW_LB1_status: 0,
  CW_LB1_total_count: 0,
  CW_LB2_ng_count: 0,
  CW_LB2_pass_count: 0,
  CW_LB2_status: 0,
  CW_LB2_total_count: 0,
  MD_LB1_ng_count: 0,
  MD_LB1_ok_count: 0,
  MD_LB1_status: 0,
  MD_LB1_total_count: 0,
  MD_LB2_ng_count: 0,
  MD_LB2_ok_count: 0,
  MD_LB2_status: 0,
  MD_LB2_total_count: 0,
  cm_cut_count: 0,
  cm_cut_freq: 0,
  cm_cutting: true,
  cm_discharge_count: 0,
  cm_discharge_freq: 0,
  cm_frying: true,
  cm_power: true,
  cm_ready: true,
};
//10 second
const toggleGenerator = () => {
  return Math.round(Math.random());
};
const productGenerator = () => {
  return Math.floor(Math.random() * 50) + 1;
};
const varToString = (varObj) => Object.keys(varObj)[0];
let period = 10;
let time_30_m = 30 * 60;
let time_1_H = 1 * 60 * 60;
let time_4_H = 4 * 60 * 60;
let time_8_H = 8 * 60 * 60;
let time_1_D = 24 * 60 * 60;
let time = [time_30_m, time_1_H, time_4_H, time_8_H, time_1_D];
let timeStr = [
  varToString({ time_30_m }),
  varToString({ time_1_H }),
  varToString({ time_4_H }),
  varToString({ time_8_H }),
  varToString({ time_1_D }),
];

const generateMockUP = (time, period, fileName) => {
  let arr = [];
  let nowDate = momentTZ().tz("Asia/Bangkok");
  for (let index = 0; index < time / period; index++) {
    let item = {
      time: "",
      CW_LB1_ng_count: 0,
      CW_LB1_pass_count: 0,
      CW_LB1_status: 0,
      CW_LB1_total_count: 0,
      CW_LB2_ng_count: 0,
      CW_LB2_pass_count: 0,
      CW_LB2_status: 0,
      CW_LB2_total_count: 0,
      MD_LB1_ng_count: 0,
      MD_LB1_ok_count: 0,
      MD_LB1_status: 0,
      MD_LB1_total_count: 0,
      MD_LB2_ng_count: 0,
      MD_LB2_ok_count: 0,
      MD_LB2_status: 0,
      MD_LB2_total_count: 0,
      cm_cut_count: 0,
      cm_cut_freq: 0,
      cm_cutting: true,
      cm_discharge_count: 0,
      cm_discharge_freq: 0,
      cm_frying: true,
      cm_power: true,
      cm_ready: true,
    };
    item.time = nowDate.subtract(period, "s");
    let MD_LB1_status = toggleGenerator();
    let MD_LB2_status = toggleGenerator();
    let CW_LB1_status = toggleGenerator();
    let CW_LB2_status = toggleGenerator();
    let cm_cutting = toggleGenerator();
    item.MD_LB1_status = MD_LB1_status;
    if (MD_LB1_status === 1) {
      item.MD_LB1_ng_count = productGenerator();
      item.MD_LB1_ok_count = productGenerator();
      item.MD_LB1_total_count = item.MD_LB1_ng_count + item.MD_LB1_ok_count;
    }

    item.MD_LB2_status = MD_LB2_status;
    if (MD_LB2_status === 1) {
      item.MD_LB2_ng_count = productGenerator();
      item.MD_LB2_ok_count = productGenerator();
      item.MD_LB2_total_count = item.MD_LB2_ng_count + item.MD_LB2_ok_count;
    }

    item.CW_LB1_status = CW_LB1_status;
    if (CW_LB1_status === 1) {
      item.CW_LB1_ng_count = productGenerator();
      item.CW_LB1_pass_count = productGenerator();
      item.CW_LB1_total_count = item.CW_LB1_ng_count + item.CW_LB1_pass_count;
    }

    item.CW_LB2_status = CW_LB2_status;
    if (CW_LB2_status === 1) {
      item.CW_LB2_ng_count = productGenerator();
      item.CW_LB2_pass_count = productGenerator();
      item.CW_LB2_total_count = item.CW_LB2_ng_count + item.CW_LB2_pass_count;
    }
    item.cm_cutting = Boolean(cm_cutting);
    if (cm_cutting === 1) {
      item.cm_cut_count = productGenerator();
      item.cm_cut_freq = parseFloat(Math.random().toFixed(2));
    }

    arr.push(item);
  }

  let msg = {
    payload: {
      data: arr,
      period: period,
      runTime: time,
    },
  };

  fs.writeFile(`./${fileName}.json`, JSON.stringify(msg, null, 4), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(
      `File has been created  ${fileName}   ${msg.payload.data.length}`
    );
  });
};

for (let i = 0; i < time.length; i++) {
  generateMockUP(time[i], period, timeStr[i]);
}
