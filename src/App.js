import React from 'react';
import './App.css';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Body />
        <Footer />
      </div>
    );
  }
}


export default App;
