import React from 'react';
import styled from 'styled-components'
import { Main, Card, textStyle, IconConnection } from '@aragon/ui'

import { useNetworkStatus } from 'react-adaptive-hooks/network';
import { useSaveData } from 'react-adaptive-hooks/save-data';
import { useHardwareConcurrency } from 'react-adaptive-hooks/hardware-concurrency';
import { useMemoryStatus } from 'react-adaptive-hooks/memory';


const App = () => {
  const { effectiveConnectionType } = useNetworkStatus();
  const { deviceMemory } = useMemoryStatus();
  return (
    <Main>
      <Card width="100%" height={100}>
        <Title css={textStyle('body3')}>Your network status:</Title>
        <Value><IconConnection size="medium"/> {effectiveConnectionType}</Value>
      </Card>
      <Card width="100%" height={100}>
        <Title css={textStyle('body3')}>Memory status:</Title>
        <Value><IconConnection size="medium"/> {deviceMemory}</Value>
      </Card>
    </Main>
  );
}

const Title = styled.p`
  font-size: 28px;
  font-weight: 600;
`

const Value = styled.p`
  font-weight: 600;
  display: flex;
  font-size: 22px;
  align-items: center;

  svg {
    margin-right: 10px;
    width: 22px;
    height: 22px;
  }
`

export default App;
