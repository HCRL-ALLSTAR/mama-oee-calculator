const msg = require("./mockData/time_30_m.json");

let payload = msg.payload;
let data = payload.datas;
let period = payload.period;
let runTime = payload.runTime;

//OEE parameter
let avalibility = 0;
let performance = 0;
let quality = 0;
let oee = 0;

let totalCutCount = data.reduce((total, data) => {
  let cm_cut_count = data.cm_cut_count;
  if (cm_cut_count < 0) cm_cut_count = 0;
  return total + cm_cut_count;
}, 0);

let totalMdOK = data.reduce((total, data) => {
  MD_LB1_ok_count = data.MD_LB1_ok_count;
  if (MD_LB1_ok_count < 0) MD_LB1_ok_count = 0;
  MD_LB2_ok_count = data.MD_LB2_ok_count;
  if (MD_LB2_ok_count < 0) MD_LB2_ok_count = 0;
  MD_OK_Count = MD_LB2_ok_count + MD_LB1_ok_count;
  return total + MD_OK_Count;
}, 0);

let totalRunTime = data.reduce((total, data) => {
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

avalibility = totalRunTime / runTime;
performance = (totalCutCount * 5 * 0.2) / runTime;
quality = totalMdOK / (totalCutCount * 5);
oee = avalibility * performance * quality;

let oee_obj = {
  avalibility: avalibility,
  performance: performance,
  quality: quality,
  oee: oee,
};

console.log(`Run Time        : ${runTime}`);
console.log(`Total Cut Count : ${totalCutCount}`);
console.log(`Total MD OK     : ${totalMdOK}`);
console.log(`Total Run Time  : ${totalRunTime}`);
console.log(`Avalibility     : ${avalibility}`);
console.log(`Performance     : ${performance}`);
console.log(`Quality         : ${quality}`);
console.log(`OEE             : ${oee}`);
