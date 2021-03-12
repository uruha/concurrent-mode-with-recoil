import React from 'react';
import { RecoilRoot } from 'recoil';
import Dashboard from '~/component/Dashboard';

const App = () => (
  <RecoilRoot>
    <Dashboard />
  </RecoilRoot>
);

export default App;
