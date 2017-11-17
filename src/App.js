
import React, { Component } from 'react';
import{ BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/HomePage';
import HomePage1 from './components/pages/HomePage1';

import LeftNav from './components/leftNav/leftNav';

class App extends Component {
  render() {
    return (
<Router>
      <div className="App">
        <Header />
		
         <Route exact path='/HomePage1' component={HomePage1}/>
<Route exact path='/HomePage' component={HomePage}/>
         

<LeftNav />
          <Footer />

      </div>
</Router>
    );
  }
}

export default App;
