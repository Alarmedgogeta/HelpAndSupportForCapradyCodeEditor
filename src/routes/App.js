import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import About from '../pages/About';
import GetStarted from '../pages/GetStarted';
import Home from '../pages/Home';
import LanguajesReferences from '../pages/LanguajesReferences';
import NotFound from '../pages/NotFound';
import Tutorials from '../pages/Tutorials';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/HelpAndSupportForCapradyCodeEditor' component={Home} />
        <Route exact path='/GetStarted' component={GetStarted} />
        <Route exact path='/HelpAndSupportForCapradyCodeEditor/GetStarted' component={GetStarted} />
        <Route exact path='/Tutorials' component={Tutorials} />
        <Route exact path='/HelpAndSupportForCapradyCodeEditor/Tutorials' component={Tutorials} />
        <Route exact path='/LanguajesReferences' component={LanguajesReferences} />
        <Route exact path='/HelpAndSupportForCapradyCodeEditor/LanguajesReferences' component={LanguajesReferences} />
        <Route exact path='/About' component={About} />
        <Route exact path='/HelpAndSupportForCapradyCodeEditor/About' component={About} />
        <Route component={NotFound} />
        <Route />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
