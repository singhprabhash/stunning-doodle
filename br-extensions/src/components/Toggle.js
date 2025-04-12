import React from 'react';

const Toggle = ({ isOn, onToggle }) => {
  return (
    <div className="flex items-center space-x-3">
      <div
        onClick={onToggle}
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
          isOn ? 'bg-red' : 'bg-gray-400'
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
            isOn ? 'translate-x-6' : 'translate-x-0'
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
