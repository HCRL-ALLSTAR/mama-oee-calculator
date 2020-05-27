let payload = msg.payload;
let datas = payload.datas;
let period = payload.period;
let runTime = payload.runTime;
let avalibility = 0;
let performance = 0;
let quality = 0;
let oee = 0;
let actualCutCount =
  datas[datas.length - 1].cm_cut_count - datas[0].cm_cut_count;
let md_ok = datas[datas.length - 1].md_ok_count - datas[0].md_ok_count;

datas.forEach((data) => {
  if (data.md_status > 0 && data.cm_cut_freq > 0 && data.cm_cutting === true) {
    avalibility += period;
  }
});

avalibility = avalibility / runTime;
performance = (actualCutCount * 5 * 0.2) / runTime;
quality = md_ok / (actualCutCount * 5);
oee = avalibility * performance * quality;

if (isNaN(performance)) performance = 0;
if (!isFinite(quality)) quality = 0;
if (quality < 0) quality = 0;
if (isNaN(oee)) oee = 0;
msg.topic = runTime.toString();

msg.payload = {
  avalibility: avalibility,
  performance: performance,
  quality: quality,
  oee: oee,
};

return msg;
