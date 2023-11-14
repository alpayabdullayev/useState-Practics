import React, { useState } from 'react';

const handleEvents = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    alert(`${inputValue}`);
  };

  return (
    <div>
      <h2>HOOKS</h2>


      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="yaz"
      />

      <button onClick={handleButtonClick}>click</button>
    </div>
  );
};

export default handleEvents;
