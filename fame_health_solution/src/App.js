import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Navmenu from './HomeLinks/Navmenu';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Navmenu />}>
      <Route index element={<Homepage/>}/>
      <Route path='' element={<Homepage/>}/>
      <Route path='' element={<Homepage/>}/>
      <Route path='' element={<Homepage/>}/>
      <Route path='' element={<Homepage/>}/>
      <Route path='' element={<Homepage/>}/>
      <Route path='' element={<Homepage/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
