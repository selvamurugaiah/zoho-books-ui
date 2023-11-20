// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
   
      <div>
       <Navbar/>
        <div className="container mx-auto p-4">
          <Routes>
            {/* <Route path="/" element={<Navbar />} /> */}
           
          </Routes>
        </div>
      </div>
   
  );
}

export default App;


