import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

import '../style/shift.css';

export const GET_SHIFT = gql`
  query getShift($shiftID: ID!) {
    shift(id: $shiftID) {
      id
      start
      end
      code
    }
  }
`;

export const Shift = ({ shiftID }) => {
  const { loading, error, data } = useQuery(GET_SHIFT, {
    variables: { shiftID },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const veri = data.shift;

  return (
    <>
      <div className='shiftContainer'>
        <div className='shiftTitle'>
          <h2>Rotasyon:</h2>
        </div>
        <div className='shift'>
          <div>
            <h3>
              Başlangıç: <span>{veri.start}</span>
            </h3>
          </div>
          <div>
            <h3>
              Bitiş: <span>{veri.end}</span>
            </h3>
          </div>
          <div>
            <h3>
              Kod: <span>{veri.code}</span>
            </h3>
          </div>
        </div>
        <div className='homepage'>
          <Link to='/' className='link'>
            Ana Sayfa
          </Link>
        </div>
      </div>
    </>
  );
};
