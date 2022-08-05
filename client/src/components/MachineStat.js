import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { ProdPlan } from './ProdPlan';

import { Shift } from './Shift';

import '../style/machineStat.css';

export const GET_MACHINE_STATU = gql`
  query getMachineStat($machineStatID: ID!) {
    machineStat(id: $machineStatID) {
      id
      averageCycle
      idealCycle
      status
      prodAmount
      defectAmount
      workDuration
      failureDuration
      availability
      performance
      quality
      oee
      currentProdPlan {
        id
        current_produced
      }
      shift {
        id
        start
        end
        code
      }
    }
  }
`;

export const MachineStat = ({ machineStatID }) => {
  const { loading, error, data } = useQuery(GET_MACHINE_STATU, {
    variables: { machineStatID },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const currentProdPlan_id = data.machineStat.currentProdPlan.id;

  const shift_id = data.machineStat.shift.id;

  const veri = data.machineStat;

  return (
    <>
      <div className='machineStatContainer'>
        <div className='machineStatTitle'>
          <h2>Makina:</h2>
        </div>
        <div className='machineStat'>
          <div className='machineStat_idstat machineStatContent'>
            <h3>
              ID: <span>{veri.id}</span>
            </h3>
            <h3>
              Durum:{' '}
              <span
                className={veri.status ? 'stat_working' : 'stat_notworking'}
              >
                {veri.status}
              </span>
            </h3>
          </div>

          <div className='machineStat_cycle machineStatContent'>
            <h3>
              Ortalama Döngü: <span>{veri.averageCycle}</span>
            </h3>
            <h3>
              İdeal Döngü: <span>{veri.idealCycle}</span>
            </h3>
          </div>

          <div className='machineStat_amount machineStatContent'>
            <h3>
              Ürün Miktarı: <span>{veri.prodAmount}</span>
            </h3>
            <h3>
              Kusurlu Ürün Miktarı: <span>{veri.defectAmount}</span>
            </h3>
          </div>

          <div className='machineStat_duration machineStatContent'>
            <h3>
              Çalışma Süresi: <span>{veri.workDuration}</span>
            </h3>
            <h3>
              Arıza Süresi: <span>{veri.failureDuration}</span>
            </h3>
          </div>
        </div>
      </div>
      <ProdPlan currentProdPlanID={currentProdPlan_id} veri_stat={veri} />
      <Shift shiftID={shift_id} />
    </>
  );
};
