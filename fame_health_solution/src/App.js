import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Navmenu from './HomeLinks/Navmenu';
import Mall from './HomeLinks/Mall';
import Contact from './HomeLinks/Contact';
import House from './HomeLinks/House';
import School from './HomeLinks/School';
import Plane from './HomeLinks/Plane';
import Work from './HomeLinks/Work';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Navmenu />}>
      <Route index element={<Homepage/>}/>
      <Route path='Mall' element={<Mall/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='School' element={<School/>}/>
      <Route path='Plane' element={<Plane/>}/>
      <Route path='Work' element={<Work/>}/>
      <Route path='House' element={<House/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
