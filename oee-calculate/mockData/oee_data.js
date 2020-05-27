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
const productGenerator = (max) => {
  return Math.floor(Math.random() * max);
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

    item.cm_cutting = Boolean(cm_cutting);
    if (cm_cutting === 1) {
      item.cm_cut_count = productGenerator(50);
      item.cm_cut_freq = parseFloat(Math.random().toFixed(2));
    }

    let inputMD_1 = Math.floor(item.cm_cut_count / 2);
    let inputMD_2 = item.cm_cut_count - inputMD_1;

    item.MD_LB1_status = MD_LB1_status;
    if (MD_LB1_status === 1) {
      item.MD_LB1_ok_count = productGenerator(inputMD_1);
      item.MD_LB1_ng_count = inputMD_1 - item.MD_LB1_ok_count;
      item.MD_LB1_total_count = item.MD_LB1_ng_count + item.MD_LB1_ok_count;
    }

    item.MD_LB2_status = MD_LB2_status;
    if (MD_LB2_status === 1) {
      item.MD_LB2_ok_count = productGenerator(inputMD_2);
      item.MD_LB2_ng_count = inputMD_2 - item.MD_LB2_ok_count;
      item.MD_LB2_total_count = item.MD_LB2_ng_count + item.MD_LB2_ok_count;
    }

    let totalPassMD = item.MD_LB1_ok_count + item.MD_LB2_ok_count;
    let inputCW_1 = Math.floor(totalPassMD / 2);
    let inputCW_2 = totalPassMD - inputCW_1;

    item.CW_LB1_status = CW_LB1_status;
    if (CW_LB1_status === 1) {
      item.CW_LB1_pass_count = productGenerator(inputCW_1);
      item.CW_LB1_ng_count = inputCW_1 - item.CW_LB1_pass_count;
      item.CW_LB1_total_count = item.CW_LB1_ng_count + item.CW_LB1_pass_count;
    }

    item.CW_LB2_status = CW_LB2_status;
    if (CW_LB2_status === 1) {
      item.CW_LB2_pass_count = productGenerator(inputCW_2);
      item.CW_LB2_ng_count = inputCW_2 - item.CW_LB2_pass_count;
      item.CW_LB2_total_count = item.CW_LB2_ng_count + item.CW_LB2_pass_count;
    }

    arr.push(item);
  }
  /*
  console.log(`Item From Cutting Machine  : ${item.cm_cut_count}`);
  console.log(`Input MD  1                : ${inputMD_1}`);
  console.log(`Input MD  2                : ${inputMD_2}`);
  console.log(
    `Total MD                   : ${
      item.MD_LB1_total_count + item.MD_LB2_total_count
    }`
  );
  console.log(`Total Pass MD              : ${totalPassMD}`);
  console.log(`Input Cw 1                 : ${inputCW_1}`);
  console.log(`Input Cw 2                 : ${inputCW_2}`);
*/
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
