import React from 'react';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import Splash from './Splash';
import Error404 from './Error404';
import NewLikeControl from './NewLikeControl';

function App() {
  return(
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route path='/men' component={NewLikeControl}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
