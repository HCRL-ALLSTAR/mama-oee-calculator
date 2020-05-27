const time_1_D = require("./mockData/time_1_D.json");
const time_1_H = require("./mockData/time_1_H.json");
const time_30_m = require("./mockData/time_30_m.json");
const time_4_H = require("./mockData/time_4_H.json");
const time_8_H = require("./mockData/time_8_H.json");

const msgs = [time_1_D, time_1_H, time_30_m, time_4_H, time_8_H];

const payload = time_8_H.payload;
const data = payload.datas;
const period = payload.period;
const runTime = payload.runTime;

const production_target = 60 * (runTime / 60);

const total_product_sec_1 = data.reduce((total, data) => {
  let MD_LB1_total_count = data.MD_LB1_total_count;
  if (MD_LB1_total_count < 0) MD_LB1_total_count = 0;
  let MD_LB2_total_count = data.MD_LB2_total_count;
  if (MD_LB2_total_count < 0) MD_LB2_total_count = 0;
  let totalMD = MD_LB1_total_count + MD_LB2_total_count;
  return total + totalMD;
}, 0);

const good_product_sec_1 = data.reduce((total, data) => {
  let MD_LB1_ok_count = data.MD_LB1_ok_count;
  if (MD_LB1_ok_count < 0) MD_LB1_ok_count = 0;
  let MD_LB2_ok_count = data.MD_LB2_ok_count;
  if (MD_LB2_ok_count < 0) MD_LB2_ok_count = 0;
  let totalGood = MD_LB1_ok_count + MD_LB2_ok_count;
  return total + totalGood;
}, 0);

const not_good_product_sec_1 = data.reduce((total, data) => {
  let MD_LB1_ng_count = data.MD_LB1_ng_count;
  if (MD_LB1_ng_count < 0) MD_LB1_ng_count = 0;
  let MD_LB2_ng_count = data.MD_LB2_ng_count;
  if (MD_LB2_ng_count < 0) MD_LB2_ng_count = 0;
  let totalNG = MD_LB1_ng_count + MD_LB2_ng_count;
  return total + totalNG;
}, 0);

const spend_time_sec_1 = data.reduce((total, data) => {
  let time = 0;
  if (
    data.MD_LB1_status &&
    data.MD_LB2_status &&
    data.cm_cut_freq &&
    data.cm_cutting
  )
    time = period;
  return total + time;
}, 0);

const total_product_sec_2 = data.reduce((total, data) => {
  let CW_LB1_total_count = data.CW_LB1_total_count;
  if (CW_LB1_total_count < 0) CW_LB1_total_count = 0;
  let CW_LB2_total_count = data.CW_LB2_total_count;
  if (CW_LB2_total_count < 0) CW_LB2_total_count = 0;
  let totalCW = CW_LB1_total_count + CW_LB2_total_count;
  return total + totalCW;
}, 0);

const good_product_sec_2 = data.reduce((total, data) => {
  let CW_LB1_pass_count = data.CW_LB1_pass_count;
  if (CW_LB1_pass_count < 0) CW_LB1_pass_count = 0;
  let CW_LB2_pass_count = data.CW_LB2_pass_count;
  if (CW_LB2_pass_count < 0) CW_LB2_pass_count = 0;
  let totalGood = CW_LB1_pass_count + CW_LB2_pass_count;
  return total + totalGood;
}, 0);

const not_good_product_sec_2 = data.reduce((total, data) => {
  let CW_LB1_ng_count = data.CW_LB1_ng_count;
  if (CW_LB1_ng_count < 0) CW_LB1_ng_count = 0;
  let CW_LB2_ng_count = data.CW_LB2_ng_count;
  if (CW_LB2_ng_count < 0) CW_LB2_ng_count = 0;
  let totalNG = CW_LB1_ng_count + CW_LB2_ng_count;
  return total + totalNG;
}, 0);

const spend_time_sec_2 = data.reduce((total, data) => {
  let time = 0;
  if (
    data.MD_LB1_status &&
    data.MD_LB2_status &&
    data.CW_LB1_status &&
    data.CW_LB2_status
  )
    time = period;
  return total + time;
}, 0);

console.log("Option Data Sec 1");
console.log(`Total Product      : ${total_product_sec_1}`);
console.log(`Total Good         : ${good_product_sec_1}`);
console.log(`Total Not Good     : ${not_good_product_sec_1}`);
console.log(`Spend Time         : ${spend_time_sec_1}`);
console.log("Option Data Sec 2 ");
console.log(`Production Target  : ${production_target}`);
console.log(`Total Product      : ${total_product_sec_2}`);
console.log(`Total Good         : ${good_product_sec_2}`);
console.log(`Total Not Good     : ${not_good_product_sec_2}`);
console.log(`Spend Time         : ${spend_time_sec_2}`);
