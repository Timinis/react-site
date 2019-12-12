import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Title } from './Title';
import { Counter } from './Counter';
import { Form } from './Form';
import { PictureSelector } from './PictureSelector';

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Title} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/pictures" component={PictureSelector} />
    </HashRouter>
  );
}

export default App;
