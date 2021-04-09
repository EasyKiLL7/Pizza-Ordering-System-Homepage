import React from 'react';
// import { BrowserRouter as Router,} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
// import Hero from './components/Hero/index';
import SignIn from './components/SignIn/index';
// import Footer from './components/Footer/index';
import Home from './Home';

 
function App() {
  return (
    <div>
      <Route path="/signin" component={SignIn}/>
      <Route path="/" exact component={Home}/>
    </div>
  );
}

export default App;
