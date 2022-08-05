import React from 'react';
import { useQuery, gql } from '@apollo/client';

import '../style/good.css';

export const GET_GOOD = gql`
  query getGood($goodID: ID!) {
    good(id: $goodID) {
      id
      code
      amount
      name
    }
  }
`;

export const Good = ({ goodID, current_produced }) => {
  const { loading, error, data } = useQuery(GET_GOOD, {
    variables: { goodID },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const veri = data.good;

  return (
    <div className='goodContainer'>
      <div className='goodTitle'>
        <h2>Ürün:</h2>
      </div>
      <div className='good'>
        <div>
          <h3>
            ID: <span>{veri.id}</span>
          </h3>
        </div>
        <div>
          <h3>
            İsim: <span>{veri.name}</span>
          </h3>
        </div>
        <div>
          <h3>
            Kod: <span>{veri.code}</span>
          </h3>
        </div>
        <div>
          <h3>
            Üretilen Toplam: <span>{current_produced}</span>
          </h3>
        </div>
        <div>
          <h3>
            Tutar: <span>{veri.amount}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};
