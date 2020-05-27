const msg = require("./mockData/time_1_D.json");

let payload = msg.payload;
let data = payload.datas;
let period = payload.period;
let runTime = payload.runTime;

//OEE parameter
let avalibility = 0;
let performance = 0;
let quality = 0;
let oee = 0;

let totalCW = data.reduce((total, data) => {
  let CW_LB1_total_count = data.CW_LB1_total_count;
  if (CW_LB1_total_count < 0) CW_LB1_total_count = 0;
  let CW_LB2_total_count = data.CW_LB2_total_count;
  if (CW_LB2_total_count < 0) CW_LB2_total_count = 0;
  let total_CW = CW_LB1_total_count + CW_LB2_total_count;
  return total + total_CW;
}, 0);

let totalPassMD = data.reduce((total, data) => {
  let MD_LB1_ok_count = data.MD_LB1_ok_count;
  if (MD_LB1_ok_count < 0) MD_LB1_ok_count = 0;
  let MD_LB2_ok_count = data.MD_LB2_ok_count;
  if (MD_LB2_ok_count < 0) MD_LB2_ok_count = 0;
  let total_OK = MD_LB2_ok_count + MD_LB1_ok_count;
  return total + total_OK;
}, 0);

let totalPassCW = data.reduce((total, data) => {
  let CW_LB1_pass_count = data.CW_LB1_pass_count;
  if (CW_LB1_pass_count < 0) CW_LB1_pass_count = 0;
  let CW_LB2_pass_count = data.CW_LB2_pass_count;
  if (CW_LB2_pass_count < 0) CW_LB2_pass_count = 0;
  let total_pass_cw = CW_LB1_pass_count + CW_LB2_pass_count;
  return total + total_pass_cw;
}, 0);

let totalRunTime = data.reduce((total, data) => {
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

avalibility = totalRunTime / runTime;
performance = totalCW / totalPassMD;
quality = totalPassCW / totalCW;
oee = avalibility * performance * quality;

console.log(`Total Check Weight     : ${totalCW}`);
console.log(`Total Total Pass MD    : ${totalPassMD}`);
console.log(`Total Total Pass CW    : ${totalPassCW}`);
console.log(`Total Total Run Time   : ${totalRunTime}`);
console.log(`Avalibility            : ${avalibility}`);
console.log(`Performance            : ${performance}`);
console.log(`Quality                : ${quality}`);
console.log(`OEE                    : ${oee}`);
