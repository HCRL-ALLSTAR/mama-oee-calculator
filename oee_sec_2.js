let payload = msg.payload;
let datas = payload.datas;
let period = payload.period;
let runTime = payload.runTime;
let avalibility = 0;
let performance = 0;
let quality = 0;
let oee = 0;
let total_cw = datas[datas.length - 1].cw_total_count - datas[0].cw_total_count;
let pass_md = datas[datas.length - 1].md_ok_count - datas[0].md_ok_count;
let pass_cw = datas[datas.length - 1].cw_pass_count - datas[0].cw_pass_count;

datas.forEach((data) => {
  if (data.md_status === 1 && data.cw_status === 1) {
    avalibility += period;
  }
});

avalibility = avalibility / runTime;
performance = total_cw / pass_md;
quality = pass_cw / total_cw;
oee = avalibility * performance * quality;

msg.topic = runTime.toString();

msg.payload = {
  avalibility: avalibility,
  performance: performance,
  quality: quality,
  oee: oee,
};

return msg;
