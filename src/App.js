import React, { Component } from 'react';
import { Nav } from './components';
import { SplashPage, IntroPage } from './pages';

class App extends Component {
  render() {
    return (
      <div style={{height: "200vh", width: "100%"}}>
          <Nav />
          <SplashPage />
          <IntroPage />
      </div>
    );
  }
}

export default App;
