import react, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Footer from './components/Footer';
// import SignIn from './components/SignIn';

 
function App() {
  return (
    <Router>
     <GlobalStyle /> 
     {/* <SignIn /> */}
     <Hero />
     <Footer/>
    </Router>
  );
}

export default App;
