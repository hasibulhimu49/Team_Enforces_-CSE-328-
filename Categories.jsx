import React from 'react';
import './Categories.css';

const categories = [
  { name: 'Trees', image: 'path/to/trees-image.jpg' },
  { name: 'Flowers', image: 'path/to/flowers-image.jpg' },
  { name: 'Green Plants', image: 'path/to/green-plants-image.jpg' },
  { name: 'Fruits', image: 'path/to/fruits-image.jpg' },
  { name: 'Vegetable', image: 'path/to/vegetables-image.jpg' },
  { name: 'Seeds', image: 'path/to/seeds-image.jpg' },
  { name: 'Other', image: 'path/to/other-image.jpg' },
];

function Categories() {
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <img src={category.image} alt={category.name} />
          <h3>{category.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Categories;
