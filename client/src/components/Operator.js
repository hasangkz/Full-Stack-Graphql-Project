import React from 'react';
import { useQuery, gql } from '@apollo/client';

import '../style/operator.css';

export const GET_OPERATOR = gql`
  query getOperator($operatorID: ID!) {
    operator(id: $operatorID) {
      id
      username
      first_name
      last_name
    }
  }
`;

export const Operator = ({ operatorID }) => {
  const { loading, error, data } = useQuery(GET_OPERATOR, {
    variables: { operatorID },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  const veri = data.operator;
  return (
    <div className='operatorContainer'>
      <div className='operatorTitle'>
        <h2>Operator:</h2>
      </div>
      <div className='operator'>
        <div>
          <h3>
            ID: <span>{veri.id}</span>
          </h3>
        </div>
        <div>
          <h3>
            Username: <span>{veri.username}</span>
          </h3>
        </div>
        <div>
          <h3>
            Adı: <span>{veri.first_name}</span>
          </h3>
        </div>
        <div>
          <h3>
            Soyadı: <span>{veri.last_name}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};
