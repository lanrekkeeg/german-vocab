// src/components/Header.tsx
import React from 'react';

export const Header = React.memo(() => (
  <div className="text-center mb-4 sm:mb-8">
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">German Learning Hub</h1>
    <p className="text-md sm:text-lg text-gray-600">A1.1 Learning Content</p>
  </div>
));