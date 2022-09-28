import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Navmenu from './HomeLinks/Navmenu';
import MenuList from './HomeLinks/MenuList';
import Contact from './HomeLinks/Contact';
import HomeHealthPage from './HomeLinks/HomeHealthPage';
import HealthcarePage from './HomeLinks/HealthcarePage';
import Help from './HomeLinks/Help';
import Footer from './HomeLinks/Footer';
import ServiceMenu from './HomeLinks/ServiceMenu';



function App() {
  return ( 
    <div>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Navmenu />}>
      <Route index element={<Homepage/>}/>
      <Route path='MenuList' element={<MenuList/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='HealthcarePage' element={<HealthcarePage/>}/>
      <Route path='HomeHealthPage' element={<HomeHealthPage/>}/>
      <Route path='Help' element={<Help/>}/>
      <Route path='ServiceMenu' element={<ServiceMenu/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
   <Footer/>
   </div>


  );
}

export default App;
