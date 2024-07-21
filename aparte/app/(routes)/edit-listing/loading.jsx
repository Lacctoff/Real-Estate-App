// components/Loading.js
import React from 'react';

const loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-16 h-16 border-4 border-t-4 border-t-white border-opacity-50 rounded-full animate-spin"></div>
    </div>
  );
};

export default loading;