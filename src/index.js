import React from 'react';
import { render } from 'react-dom';
import Hello from './hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'left',

};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
  </div>
);

render(<App />, document.getElementById('root'));
