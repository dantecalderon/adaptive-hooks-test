import React from 'react';
import { Main } from '@aragon/ui'

import { useNetworkStatus } from 'react-adaptive-hooks/network';


const App = () => {
  const { effectiveConnectionType } = useNetworkStatus();

  return (
    <Main>
      {effectiveConnectionType} 
    </Main>
  );
}

export default App;
