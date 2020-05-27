let device = {
  checkweigher_1: {
    status: Math.round(Math.random()),
    standard_weight: Math.round(Math.random() * 100) + 1,
    total_product: Math.round(Math.random() * 100) + 1,
    good_weight: Math.round(Math.random() * 100) + 1,
    not_good: Math.round(Math.random() * 100) + 1,
    availability: Math.round(Math.random() * 100) + 1,
  },
  checkweigher_2: {
    status: Math.round(Math.random()),
    standard_weight: Math.round(Math.random() * 100) + 1,
    total_product: Math.round(Math.random() * 100) + 1,
    good_weight: Math.round(Math.random() * 100) + 1,
    not_good: Math.round(Math.random() * 100) + 1,
    availability: Math.round(Math.random() * 100) + 1,
  },
  cutting_machine: {
    status: Math.round(Math.random()),
    speed: Math.round(Math.random() * 100) + 1,
    availability: Math.round(Math.random() * 100) + 1,
  },
  metal_detector_1: {
    status: Math.round(Math.random()),
    speed: Math.round(Math.random() * 100) + 1,
    total_product: Math.round(Math.random() * 100) + 1,
    good_product: Math.round(Math.random() * 100) + 1,
    not_good_product: Math.round(Math.random() * 100) + 1,
    availabity: Math.round(Math.random() * 100) + 1,
  },
  metal_detector_2: {
    status: Math.round(Math.random()),
    speed: Math.round(Math.random() * 100) + 1,
    total_product: Math.round(Math.random() * 100) + 1,
    good_product: Math.round(Math.random() * 100) + 1,
    not_good_product: Math.round(Math.random() * 100) + 1,
    availabity: Math.round(Math.random() * 100) + 1,
  },
};

let oee = {
  OEE_30_min: {
    Section_1: {
      oee: parseFloat(Math.random().toFixed(2)),
      availabity: parseFloat(Math.random().toFixed(2)),
      performance: parseFloat(Math.random().toFixed(2)),
      quality: parseFloat(Math.random().toFixed(2)),
      production_target: Math.round(Math.random() * 100) + 1,
      total_product: Math.round(Math.random() * 100) + 1,
      good_product: Math.round(Math.random() * 100) + 1,
      not_good_product: Math.round(Math.random() * 100) + 1,
      spend_time: Math.round(Math.random() * 100) + 1,
    },
    Section_2: {
      oee: parseFloat(Math.random().toFixed(2)),
      availabity: parseFloat(Math.random().toFixed(2)),
      performance: parseFloat(Math.random().toFixed(2)),
      quality: parseFloat(Math.random().toFixed(2)),
      production_target: Math.round(Math.random() * 100) + 1,
      total_product: Math.round(Math.random() * 100) + 1,
      good_product: Math.round(Math.random() * 100) + 1,
      not_good_product: Math.round(Math.random() * 100) + 1,
      spend_time: Math.round(Math.random() * 100) + 1,
    },
  },
  OEE_1_hr: {
    Section_1: {
      oee: parseFloat(Math.random().toFixed(2)),
      availabity: parseFloat(Math.random().toFixed(2)),
      performance: parseFloat(Math.random().toFixed(2)),
      quality: parseFloat(Math.random().toFixed(2)),
      production_target: Math.round(Math.random() * 100) + 1,
      total_product: Math.round(Math.random() * 100) + 1,
      good_product: Math.round(Math.random() * 100) + 1,
      not_good_product: Math.round(Math.random() * 100) + 1,
      spend_time: Math.round(Math.random() * 100) + 1,
    },
    Section_2: {
      oee: parseFloat(Math.random().toFixed(2)),
      availabity: parseFloat(Math.random().toFixed(2)),
      performance: parseFloat(Math.random().toFixed(2)),
      quality: parseFloat(Math.random().toFixed(2)),
      production_target: Math.round(Math.random() * 100) + 1,
      total_product: Math.round(Math.random() * 100) + 1,
      good_product: Math.round(Math.random() * 100) + 1,
      not_good_product: Math.round(Math.random() * 100) + 1,
      spend_time: Math.round(Math.random() * 100) + 1,
    },
  },
  OEE_4_hr: {
    Section_1: {
      oee: parseFloat(Math.random().toFixed(2)),
      availabity: parseFloat(Math.random().toFixed(2)),
      performance: parseFloat(Math.random().toFixed(2)),
      quality: parseFloat(Math.random().toFixed(2)),
      production_target: Math.round(Math.random() * 100) + 1,
      total_product: Math.round(Math.random() * 100) + 1,
      good_product: Math.round(Math.random() * 100) + 1,
      not_good_produc: Math.round(Math.random() * 100) + 1,
      spend_time: Math.round(Math.random() * 100) + 1,
    },
    Section_2: {
      oee: parseFloat(Math.random().toFixed(2)),
      availabity: parseFloat(Math.random().toFixed(2)),
      performance: parseFloat(Math.random().toFixed(2)),
      quality: parseFloat(Math.random().toFixed(2)),
      production_target: Math.round(Math.random() * 100) + 1,
      total_product: Math.round(Math.random() * 100) + 1,
      good_product: Math.round(Math.random() * 100) + 1,
      not_good_product: Math.round(Math.random() * 100) + 1,
      spend_time: Math.round(Math.random() * 100) + 1,
    },
  },
  OEE_8_hr: {
    Section_1: {
      oee: parseFloat(Math.random().toFixed(2)),
      availabity: parseFloat(Math.random().toFixed(2)),
      performance: parseFloat(Math.random().toFixed(2)),
      quality: parseFloat(Math.random().toFixed(2)),
      production_target: Math.round(Math.random() * 100) + 1,
      total_product: Math.round(Math.random() * 100) + 1,
      good_product: Math.round(Math.random() * 100) + 1,
      not_good_product: Math.round(Math.random() * 100) + 1,
      spend_time: Math.round(Math.random() * 100) + 1,
    },
    Section_2: {
      oee: parseFloat(Math.random().toFixed(2)),
      availabity: parseFloat(Math.random().toFixed(2)),
      performance: parseFloat(Math.random().toFixed(2)),
      quality: parseFloat(Math.random().toFixed(2)),
      production_target: Math.round(Math.random() * 100) + 1,
      total_product: Math.round(Math.random() * 100) + 1,
      good_product: Math.round(Math.random() * 100) + 1,
      not_good_product: Math.round(Math.random() * 100) + 1,
      spend_time: Math.round(Math.random() * 100) + 1,
    },
  },
  OEE_24_hr: {
    Section_1: {
      oee: parseFloat(Math.random().toFixed(2)),
      availabity: parseFloat(Math.random().toFixed(2)),
      performance: parseFloat(Math.random().toFixed(2)),
      quality: parseFloat(Math.random().toFixed(2)),
      production_target: Math.round(Math.random() * 100) + 1,
      total_product: Math.round(Math.random() * 100) + 1,
      good_product: Math.round(Math.random() * 100) + 1,
      not_good_product: Math.round(Math.random() * 100) + 1,
      spend_time: Math.round(Math.random() * 100) + 1,
    },
    Section_2: {
      oee: parseFloat(Math.random().toFixed(2)),
      availabity: parseFloat(Math.random().toFixed(2)),
      performance: parseFloat(Math.random().toFixed(2)),
      quality: parseFloat(Math.random().toFixed(2)),
      production_target: Math.round(Math.random() * 100) + 1,
      total_product: Math.round(Math.random() * 100) + 1,
      good_product: Math.round(Math.random() * 100) + 1,
      not_good_product: Math.round(Math.random() * 100) + 1,
      spend_time: Math.round(Math.random() * 100) + 1,
    },
  },
};

console.log(device);
console.log(oee);

// console.log(Math.round(((Math.random() + Number.EPSILON) * 100) / 100));
