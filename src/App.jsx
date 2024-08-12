import { useState } from 'react';
import './App.css';
import { FaBars, FaCog, FaHome, FaUser } from 'react-icons/fa';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=''>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-16'
        }`}
      >
        <div className='flex items-center justify-between p-4'>
          <span
            className={`text-2xl font-semibold transition-opacity duration-300 ${
              isSidebarOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Dashboard
          </span>
        </div>
        <div className='flex flex-col h-[calc(100vh-64px)] pt-8'>
          <ul className=''>
            <li
              className={`flex ${
                isSidebarOpen ? '' : 'justify-center'
              } items-center px-4 py-2 cursor-pointer hover:bg-gray-700`}
            >
              <FaHome className='text-lg ' />
              <span
                className={`ml-4 text-lg transition-opacity duration-300 ${
                  isSidebarOpen ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Home
              </span>
            </li>
            <li className='flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700'>
              <FaUser className='text-lg' />
              <span
                className={`ml-4 text-lg transition-opacity duration-300 ${
                  isSidebarOpen ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Profile
              </span>
            </li>
            <li className='flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700'>
              <FaCog className='text-lg' />
              <span
                className={`ml-4 text-lg transition-opacity duration-300 ${
                  isSidebarOpen ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Settings
              </span>
            </li>
          </ul>
          <p>tes</p>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex flex-col flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
        {/* Navbar */}
        <nav
          className={`fixed top-0 left-0 right-0 flex transition-all duration-300 items-center h-16 bg-gray-100 shadow-md ${
            isSidebarOpen ? 'ml-64' : 'ml-16'
          }`}
        >
          <div className='px-4'>
            <FaBars className='text-xl cursor-pointer' onClick={toggleSidebar} />
          </div>
          <h1 className='ml-4 text-xl font-semibold'>Dashboard</h1>
        </nav>

        {/* Main Section */}
        <main className='p-4 mt-16'>
          <h2 className='mb-4 text-2xl font-semibold'>Welcome to the Dashboard</h2>
          <p className='text-gray-600'>This is the main content area where you can add your dashboard content.</p>
        </main>
      </div>
    </div>
  );
}

export default App;
