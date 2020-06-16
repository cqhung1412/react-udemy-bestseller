import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Hello, I'm learning React again!</h1>
      <Person/>
    </div>
  );
  // const firstChild = React.createElement('header', {className: 'App-header'}, 
  //   React.createElement('img', {src:logo, className:'App-logo', alt:'logo'}))
  // const secondChild = React.createElement('h1', null, 'Hello, I\'m learning React again!')
  // return React.createElement('div', {className:'App'}, firstChild, secondChild )
}

export default App;