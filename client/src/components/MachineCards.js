import React from 'react';
import { MachineCard } from './MachineCard';

import { useContext } from 'react';
import { MachineDataContext } from 'Contexts/MachineData';

export const MachineCards = () => {
  const veri = useContext(MachineDataContext);
  console.log(veri);

  return (
    <div>
      {veri.map((item) => (
        <li key={item.id} style={{ listStyle: 'none' }}>
          <MachineCard item={item} />
        </li>
      ))}
    </div>
  );
};
{
}
