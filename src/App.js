import React from 'react';
import { Router, Switch, Route, } from 'react-router-dom'
import { createBrowserHistory, } from 'history'
import Homepage from './components/Homepage/Homepage'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Navigation from './components/Navigation/Navigation'


function App() {
  
  const history = createBrowserHistory()

  return (
    <div>
      <Navigation history={history} />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
