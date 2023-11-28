import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home'
import About from './components/About/About';
import Tips from './components/Tips/Tips';
import JournalsPage from './components/Journals/JournalsPage';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import UserProfile from './components/User_profile/UserProfile';
import AdminTips from './components/admin/AdminTips/AdminTips';




const AllRoutes = () => {
  return (
        <Routes > 
            <Route  path='/' element={< Home/>}> </Route>
            <Route path='/about' element = {< About/>}>  </Route>
            <Route path='/tips' element={<Tips />} >  </Route>
            <Route path='/journals' element={<JournalsPage />} > </Route>
            <Route path='/signUp' element={<Signup />} > </Route>
            <Route path='/login' element={<Login/>} > </Route>
            <Route path='/profile' element={<UserProfile/>} > </Route>
            <Route path='/admintips' element={<AdminTips/>} > </Route>

            {/* // Temporary Route for testing */}

            {/* <Route path='/test' element={<ShowTips /> } > </Route> */}
        </Routes>
    )
}

export default AllRoutes
