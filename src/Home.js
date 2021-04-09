import React from 'react';
// import { BrowserRouter as Router,} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Footer from './components/Footer';


 
function App() {
  return (
    <div>
    {/* <Router> */}
     <GlobalStyle /> 
     <Hero />
     <Footer/>
    {/* </Router> */}
    </div>
  );
}

export default App;