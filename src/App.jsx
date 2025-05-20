import React from 'react';
import DoctorsCarousel from './DoctorsCarousel';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container w-full px-4 py-6 mx-auto">
        <DoctorsCarousel />
      </div>
    </div>
  );
}

export default App;