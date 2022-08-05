import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MachineCards } from 'components/MachineCards';

import { Machine } from './components/Machine';

import { Error } from './components/Error';

import { MachineDataContextProvider } from './Contexts/MachineData';

function App() {
  return (
    <div className='App'>
      <MachineDataContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MachineCards />} />
            <Route path='/machine/:machineID' element={<Machine />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </MachineDataContextProvider>
    </div>
  );
}

export default App;
