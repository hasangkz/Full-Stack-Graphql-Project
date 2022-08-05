import { createContext } from 'react';
import { GET_MACHINES } from 'apollo';
import { useQuery } from '@apollo/client';

export const MachineDataContext = createContext();

export const MachineDataContextProvider = ({ children }) => {
  const { loading, error, data } = useQuery(GET_MACHINES);

  if (loading) return <p>Loading...</p>;
  if (error) return <h1>Error</h1>;

  const veri = data.machines;

  return (
    <MachineDataContext.Provider value={veri}>
      {children}
    </MachineDataContext.Provider>
  );
};
