import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home'
import About from './components/About/About';
import Tips from './components/Tips/Tips';
import JournalsPage from './components/Journals/JournalsPage';

const AllRoutes = () => {
  return (
        <Routes > 
            <Route  path='/' element={< Home/>}> </Route>
            <Route path='/about' element = {< About/>}>  </Route>
            <Route path='/tips' element={<Tips />} >  </Route>
            <Route path='/journals' element={<JournalsPage />} > </Route>
        </Routes>
    )
}

export default AllRoutes
