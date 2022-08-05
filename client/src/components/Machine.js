import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import '../style/machine.css';

import { Operator } from './Operator';
import { MachineStat } from './MachineStat';

export const GET_MACHINE = gql`
  query getMachine($machineID: ID!) {
    machine(id: $machineID) {
      id
      name
      operator {
        id
        username
        first_name
        last_name
      }
      machineStat {
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
      }
    }
  }
`;

export const Machine = () => {
  const { machineID } = useParams();

  const { loading, error, data } = useQuery(GET_MACHINE, {
    variables: { machineID },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <h1>There is no machine with such an id...</h1>;

  const operator_id = data.machine.operator.id;
  const machineStat_id = data.machine.machineStat.id;

  const veri_machine = data.machine;

  return (
    <>
      <div className='machine'>
        <div>
          <h1>
            <span>{veri_machine.name}</span>
          </h1>
        </div>
      </div>
      <Operator operatorID={operator_id} />
      <MachineStat machineStatID={machineStat_id} />
    </>
  );
};
