import React from 'react';

function Food({food}){
  return <h1>I like {food} !!</h1>
}

function App() {
  return (<Food food="Hamburger"/>
  );
}

export default App;
