import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { Good } from './Good';

import '../style/prodPlan.css';

export const GET_CURRENT_PROD_PLAN = gql`
  query getCurrentProdPlan($currentProdPlanID: ID!) {
    currentProdPlan(id: $currentProdPlanID) {
      id
      current_produced
      good {
        id
        amount
        code
        name
      }
    }
  }
`;

export const ProdPlan = ({ currentProdPlanID, veri_stat }) => {
  const { loading, error, data } = useQuery(GET_CURRENT_PROD_PLAN, {
    variables: { currentProdPlanID },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const good_id = data.currentProdPlan.good.id;

  const veri = data.currentProdPlan;

  return (
    <>
      <div className='prodPlan'>
        <div>
          <h3>
            Kullanılabilirlik:{' '}
            <span className={veri_stat.availability > 50 ? 'iyi' : 'kötü'}>
              %{veri_stat.availability}
            </span>
          </h3>
        </div>
        <div>
          <h3>
            Performans:{' '}
            <span className={veri_stat.performance > 50 ? 'iyi' : 'kötü'}>
              %{veri_stat.performance}
            </span>
          </h3>
        </div>
        <div>
          <h3>
            Kalite:{' '}
            <span className={veri_stat.quality > 50 ? 'iyi' : 'kötü'}>
              %{veri_stat.quality}
            </span>
          </h3>
        </div>
        <div>
          <h3>
            GEE:{' '}
            <span className={veri_stat.oee > 50 ? 'iyi' : 'kötü'}>
              %{veri_stat.oee}
            </span>
          </h3>
        </div>
      </div>
      <Good goodID={good_id} current_produced={veri.current_produced} />
    </>
  );
};
