import React from 'react';
import ReactDOM from 'react-dom';

import ReactCounter from './ReactCounter';
import VueCounter from './VueCounter';

const App = () => (
  <main>
    <section>
      <h2>ReactCounter</h2>
      <ReactCounter />
    </section>
    <section>
      <h2>VueCounter</h2>
      <VueCounter />
    </section>
  </main>
);

ReactDOM.render(<App />, document.getElementById('app'));

