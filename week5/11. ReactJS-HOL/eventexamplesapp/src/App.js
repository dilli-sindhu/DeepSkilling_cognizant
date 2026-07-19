import React from 'react';
import EventExamples from './Components/EventExamples';
import CurrencyConvertor from './Components/CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <h1>React Event Handling Examples</h1>
      <EventExamples />
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;