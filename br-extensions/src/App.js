import { useEffect } from 'react';
import './global.css';
import Extension from './views/Extension';

function App() {

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark'); // default dark
    }
  }, []);

  return (
    <div className="bg-light-gradient dark:bg-dark-gradient min-h-screen">
      <div className='container mx-auto px-6 py-10'>
        <Extension />
      </div>
    </div>
  );
}

export default App;
