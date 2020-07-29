import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimationDemo } from './container/animation-demo';
import { EventDemo } from './container/event-demo';
import './App.less';

function App() {

  return (
    <BrowserRouter>
      <Route path="/animation-demo" component={AnimationDemo} />
      <Route path="/event-demo" component={EventDemo} />
    </BrowserRouter>
  );
}
export default App;
