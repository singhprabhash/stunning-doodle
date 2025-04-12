import React from 'react'
import Toggle from './Toggle'

function ExtCards({ src, name, desc, isActive, toggleActiveState }) {

  const handleToggle = () => {
    toggleActiveState(!isActive, name);
  };

  return (
    <div className='p-3 bg-background-light dark:bg-background-dark rounded-lg border-light'>
      <div className='card_details flex justify-between items-start gap-4'>
        <img src={src} alt={name} width={50} />
        <div className='card_info'>
          <h2 className='text-text-dark dark:text-white font-bold'>{name}</h2>
          <p className='text-text-dark dark:text-text-light mt-1 text-sm'>{desc}</p>
        </div>
      </div>
      <div className='card_actions flex justify-between items-center mt-10'>
        <button className='bg-inherit rounded-full border-light text-sm px-3 py-1 dark:text-text-light'>Remove</button>
        <Toggle isOn={isActive} onToggle={handleToggle} label="Dark Mode" />
      </div>
    </div>
  )
}

export default ExtCards