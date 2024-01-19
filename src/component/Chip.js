// Chip.js
import React, { useState } from 'react';
import './Chip.css';

const Chip = ({ items, onRemove }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleItemClick = (item) => {
    setSelectedItems([...selectedItems, item]);
    setInputValue(item); // Update input value with the selected item
  };

  const handleChipRemove = (removedItem) => {
    const updatedItems = selectedItems.filter((item) => item !== removedItem);
    setSelectedItems(updatedItems);
  };

  return (
    <div className="chip-container">
    <h1> Zepto Assignment</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here..."
      />
      <ul>
        {items
          .filter((item) => !selectedItems.includes(item))
          .filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()))
          .map((item) => (
            <li key={item} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
      </ul>
      <div className="chips">
        {selectedItems.map((item) => (
          <div key={item} className="chip">
            {item} <span onClick={() => handleChipRemove(item)}>X</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chip;
