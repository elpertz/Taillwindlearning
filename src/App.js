import React from 'react';
import MessengerComponent from './components/MessengerComponent';

function App() {
  return (
    <div className="flex text-white h-screen">
      <div className="bg-gray-800 p-3 space-y-2 overflow-y-scroll">
        {[...Array(30)].map((_, i) => (
          <div className="bg-white text-black size-12 rounded-lg flex justify-center items-center">
            {i}
          </div>
        ))}
      </div>
      <div className="bg-gray-700 w-60 flex flex-col">
        <div className="p-3 shadow-md">Tailwind Css</div>
        <div className="p-3 flex-1  overflow-y-scroll space-y-2">
          {[...Array(70)].map((_, i) => (
            <p>Channels {i}</p>
          ))}
        </div>
      </div>
      <div className="bg-gray-600  flex-1 flex flex-col">
        <div className="p-3 shadow-md">general</div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-2 ">
          messages
          {[...Array(20)].map((_, i) => (
            <MessengerComponent />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
