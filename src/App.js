import React, { useState } from 'react';
import './style'


function App() {
  const [name, setName] = useState('');
  const [displayText, setDisplayText] = useState('****');

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayText(name);
    setName('');
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div className="App">
      <h1>Welcome, {displayText}!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
