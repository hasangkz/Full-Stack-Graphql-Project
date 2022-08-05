const {
  machines,
  machineStats,
  goods,
  currentProdPlans,
  shifts,
  operators,
} = require('./data');

const resolvers = {
  Query: {
    machines: () => machines,
    machine: (__, args) => {
      return machines.find((item) => item.id === args.id);
    },

    machineStats: () => machineStats,
    machineStat: (__, args) => {
      return machineStats.find((item) => item.id === args.id);
    },

    operators: () => operators,
    operator: (__, args) => {
      return operators.find((item) => item.id === args.id);
    },

    shifts: () => shifts,
    shift: (__, args) => shifts.find((item) => item.id === args.id),

    currentProdPlans: () => currentProdPlans,
    currentProdPlan: (__, args) =>
      currentProdPlans.find((item) => item.id === args.id),

    goods: () => goods,
    good: (__, args) => goods.find((item) => item.id === args.id),
  },
  Machine: {
    operator: (parent) => {
      return operators.find((item) => item.id === parent.operator_id);
    },
    machineStat: (parent) => {
      return machineStats.find((item) => item.id === parent.machineStat_id);
    },
  },

  MachineStat: {
    currentProdPlan: (parent) => {
      return currentProdPlans.find(
        (item) => item.id === parent.currentProdPlan_id
      );
    },
    shift: (parent) => {
      return shifts.find((item) => item.id === parent.shift_id);
    },
  },
  CurrentProdPlan: {
    good: (parent) => {
      return goods.find((item) => item.id === parent.good_id);
    },
  },
};

module.exports = resolvers;
