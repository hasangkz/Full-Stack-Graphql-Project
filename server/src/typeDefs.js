const { gql } = require('apollo-server');

const typeDefs = gql`
  type Machine {
    id: ID!
    name: String
    machineStat: MachineStat
    operator: Operator
    operator_id: ID!
  }
  type MachineStat {
    id: ID!
    averageCycle: String
    idealCycle: String
    status: Boolean!
    operator_id: ID!
    prodAmount: Int
    defectAmount: Int
    workDuration: String
    failureDuration: String
    availability: Int
    performance: Int
    quality: Int
    oee: Int
    currentProdPlan: CurrentProdPlan!
    currentProdPlan_id: ID!
    shift: Shift
    shift_id: ID!
  }
  type Operator {
    id: ID!
    username: String!
    first_name: String
    last_name: String
  }

  type Shift {
    id: ID!
    start: String
    end: String
    code: String
  }
  type CurrentProdPlan {
    id: ID!
    current_produced: String
    good: Good
    good_id: ID!
  }
  type Good {
    id: ID!
    code: String!
    amount: String
    name: String
  }

  type Query {
    machine(id: ID!): Machine!
    machines: [Machine!]!

    machineStat(id: ID!): MachineStat!
    machineStats: [MachineStat!]!

    operators: [Operator!]!
    operator(id: ID!): Operator!

    shifts: [Shift!]!
    shift(id: ID!): Shift!

    currentProdPlans: [CurrentProdPlan!]!
    currentProdPlan(id: ID!): CurrentProdPlan!

    goods: [Good!]!
    good(id: ID!): Good!
  }
`;

module.exports = typeDefs;
