import React, { useState } from 'react';

function Form({ setsubmittext }) {
  const [inputValue, setInputValue] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    setsubmittext(inputValue);
    setInputValue(" ");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
