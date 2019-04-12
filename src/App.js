import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './header/components/Header';
import Routes from './routes';

class App extends React.Component {
  render() {
    return <Router>
      <div>
        <Header />
        <Routes />
      </div>
    </Router>;
  }
}

export default App;
