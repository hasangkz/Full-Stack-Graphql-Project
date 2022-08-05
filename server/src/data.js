const machineStats = [
  {
    id: '1',
    averageCycle: '00:10:00',
    idealCycle: '12:00:00',
    status: true,
    prodAmount: 309000,
    defectAmount: 1000,
    workDuration: '07:50:00',
    failureDuration: '00:00:00',
    availability: 43,
    performance: 87,
    quality: 87,
    oee: 80,
    currentProdPlan_id: '1',
    shift_id: '1',
  },
  {
    id: '2',
    averageCycle: '00:20:00',
    idealCycle: '06:00:00',
    status: false,
    prodAmount: 40000,
    defectAmount: 20000,
    workDuration: '03:50:00',
    failureDuration: '05:50:00',
    availability: 75,
    performance: 68,
    quality: 40,
    oee: 40,
    currentProdPlan_id: '2',
    shift_id: '2',
  },
  {
    id: '3',
    averageCycle: '01:00:00',
    idealCycle: '10:00:00',
    status: true,
    prodAmount: 16000,
    defectAmount: 4000,
    workDuration: '07:50:00',
    failureDuration: '01:50:00',
    availability: 65,
    performance: 45,
    quality: 89,
    oee: 55,
    currentProdPlan_id: '3',
    shift_id: '3',
  },
  {
    id: '4',
    averageCycle: '04:00:00',
    idealCycle: '12:00:00',
    status: true,
    prodAmount: 95000,
    defectAmount: 5000,
    workDuration: '10:24:00',
    failureDuration: '01:50:00',
    availability: 80,
    performance: 90,
    quality: 36,
    oee: 20,
    currentProdPlan_id: '4',
    shift_id: '4',
  },
];
const operators = [
  {
    id: '1',
    username: 'hasangkz',
    first_name: 'Hasan',
    last_name: 'Gökgöz',
  },
  {
    id: '2',
    username: 'rhmtrkmn',
    first_name: 'Rahime',
    last_name: 'Türkmen',
  },
  {
    id: '3',
    username: 'smtylcn',
    first_name: 'Samet',
    last_name: 'Yalçın',
  },
  {
    id: '4',
    username: 'valti',
    first_name: 'Zeynep',
    last_name: 'Tıkırdamaz',
  },
];
const machines = [
  {
    id: '1',
    name: 'Sert Şeker Üretim Makinası',
    machineStat_id: '1',
    operator_id: '1',
  },
  {
    id: '2',
    name: 'Vakumlu Continuous Pişirme Sistemi',
    machineStat_id: '2',
    operator_id: '2',
  },
  {
    id: '3',
    name: 'Esnek Üretim Sistemi',
    machineStat_id: '3',
    operator_id: '3',
  },
  {
    id: '4',
    name: 'Bant Kalite Kontrol Sistemi',
    machineStat_id: '4',
    operator_id: '4',
  },
];

const currentProdPlans = [
  {
    id: '1',
    current_produced: '310.000',
    good_id: '1',
  },
  { id: '2', current_produced: '60.000', good_id: '2' },
  {
    id: '3',
    current_produced: '20.000',
    good_id: '3',
  },
  {
    id: '4',
    current_produced: '100.000',
    good_id: '4',
  },
];

const goods = [
  {
    id: '1',
    code: 'C1_SHUT_BAL',
    amount: '425.000',
    name: 'Lolipop',
  },
  {
    id: '2',
    code: 'B1_SKUR_KAY',
    amount: '125.000',
    name: 'Bavul',
  },
  {
    id: '3',
    code: 'B2_HVEL_SAN',
    amount: '54.000',
    name: 'İplik',
  },
  {
    id: '4',
    code: 'A2_CRTT_MIS',
    amount: '200.000',
    name: 'Havlu',
  },
];

const shifts = [
  {
    id: '1',
    start: '08:00',
    end: '18:00',
    code: 'stur',
  },
  {
    id: '2',
    start: '10:00',
    end: '14:50',
    code: 'futr',
  },
  {
    id: '3',
    start: '06:00',
    end: '20:00',
    code: 'prig',
  },
  {
    id: '4',
    start: '12:00',
    end: '24:0',
    code: 'poll',
  },
];
module.exports = {
  machines,
  machineStats,
  goods,
  currentProdPlans,
  shifts,
  operators,
};
