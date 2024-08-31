import React from 'react';

const Name = () => {
  const handleClick = () => {
    alert('Congratulations!! you clicked on Portfolio saluting  to your effort on behalf of Ashutosh Singh ');
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-black-100 p-4 mt-2">
      <div
        className="text-1xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-600 hover:to-purple-400 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer "
        onClick={handleClick}
        role="button"
        aria-label="Ashutosh Singh"
        tabIndex={0}
      >
        Portfolio
      </div>
     
    </div>
  );
};

export default Name;