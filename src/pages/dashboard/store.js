export default () => {
  const name = "dashboard";

  const state = {
    list: [
      {
        order_no: 9001,
        price: 1024,
        status: "success"
      },
      {
        order_no: 9002,
        price: 2048,
        status: "pending"
      },
      {
        order_no: 9003,
        price: 512,
        status: "success"
      },
      {
        order_no: 9004,
        price: 128,
        status: "success"
      },
      {
        order_no: 9005,
        price: 8192,
        status: "success"
      },
      {
        order_no: 9006,
        price: 16384,
        status: "success"
      },
      {
        order_no: 9007,
        price: 256,
        status: "success"
      },
      {
        order_no: 9008,
        price: 7086,
        status: "success"
      }
    ]
  };

  const mutations = {};

  const actions = {};

  return {
    name,
    state,
    mutations,
    actions
  };
};
