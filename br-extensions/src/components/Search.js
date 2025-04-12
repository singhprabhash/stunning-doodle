import React, { useEffect, useState } from 'react'

function Search({ searchInput, handleSearch }) {

  const [ activeTheme, setActiveTheme ] = useState('dark');

  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    if (isDark) {
      setActiveTheme('light');
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      setActiveTheme('dark');
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setActiveTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      setActiveTheme('dark');
      document.documentElement.classList.add('dark'); // default dark
    }
  }, [activeTheme]);

  return (
   <div className='input_Container flex justify-between dark:bg-surface-dark bg-surface-light border-border-light border dark:border-none p-2 rounded-lg'>
      <img 
        src='/assets/images/logo-cropped.svg' 
        alt='extension-icon' 
        width={35}
      />
      <input 
        className='bg-inherit text-text-dark dark:text-text-light placeholder:text-text-dark dark:placeholder:text-white search-input ml-2' 
        name="seach" value={searchInput} 
        placeholder='Extensions' 
        onChange={handleSearch}
      />
      {
        activeTheme === 'dark' && <img 
          src='/assets/images/icon-sun.svg' 
          alt='theme toggler' 
          title='change to light mode' 
          width={35} 
          onClick={toggleTheme}
          className='py-2 px-2 bg-border-dark rounded-lg cursor-pointer'
        />
      }
      {
        activeTheme === 'light' && <img 
          src='/assets/images/icon-moon.svg' 
          alt='theme toggler'
          title='change to dark mode' 
          width={35} 
          onClick={toggleTheme}
          className='py-2 px-2 bg-border-light rounded-lg cursor-pointer'
        />
      }
   </div>
  )
}

export default Search