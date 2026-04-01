import React, { useState } from 'react';
import './DynamicList.css';

// Child Component - Task Item (Separation of Concerns)
const ListItem = ({ item, onRemove }) => {
  return (
    <li className="list-item">
      <span className="item-text">{item.text}</span>
      <button 
        className="delete-btn"
        onClick={() => onRemove(item.id)}
        aria-label={Delete ${item.text}}
      >
        ✕
      </button>
    </li>
  );
};

// Main Component
const DynamicList = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Learn React Hooks" },
    { id: 2, text: "Master list rendering" },
  ]);
  
  const [inputValue, setInputValue] = useState('');

  // Add new item
  const addItem = () => {
    if (inputValue.trim() === '') return;

    const newItem = {
      id: Date.now(), // Unique ID for React keys
      text: inputValue.trim()
    };

    setItems(prevItems => [...prevItems, newItem]);
    setInputValue('');
  };

  // Remove item
  const removeItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  return (
    <div className="dynamic-list">
      <h2>Task Manager</h2>

      {/* Add Item Section */}
      <div className="add-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new task..."
          className="item-input"
        />
        <button onClick={addItem} className="add-btn">
          Add Item
        </button>
      </div>

      {/* List Container with Conditional Rendering */}
      <div className="list-container">
        {items.length === 0 ? (
          <p className="empty-state">No items found. Add some tasks above!</p>
        ) : (
          <ul className="item-list">
            {items.map(item => (
              <ListItem 
                key={item.id}           // Critical: Unique key for reconciliation
                item={item}
                onRemove={removeItem}
              />
            ))}
          </ul>
        )}
      </div>

      <p className="item-count">
        {items.length} {items.length === 1 ? 'item' : 'items'}
      </p>
    </div>
  );
};

export default DynamicList;