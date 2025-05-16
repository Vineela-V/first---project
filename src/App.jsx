import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStateProvider } from './GlobalStateContext';

ReactDOM.render(
  <GlobalStateProvider>
    <App />
  </GlobalStateProvider>,
  document.getElementById('root')
);

export default App;