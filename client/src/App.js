import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';

import Navbar from './components/partials/Navbar'
import Footer from './components/partials/Footer';
import RecruiterNavbar from './components/admin/RecruiterDashboard/RecruiterNavbar';
import AllRoutes from './AllRoutes';


function Navigation() {
  const location = useLocation();
  if (location.pathname.includes('superadmin') || location.pathname.includes('superAdmin')) {
    return null;
  }
  return location.pathname.includes('recruiter') ? <RecruiterNavbar /> : <Navbar />;
}

function FooterNavigation() {
  const location = useLocation();
  if (location.pathname.includes('superadmin') || location.pathname.includes('superAdmin')
    || location.pathname.includes('recruiter') || location.pathname.includes('Recruiter') 
    || location.pathname.includes('admin') || location.pathname.includes('Admin')
    || location.pathname.includes('login') || location.pathname.includes('signup'))
    {
    return null;
  } else {
    return (
      <Footer />
    )
  }

}

function App() {

  return (
    <div className='App'>
      <Router>
        <Navigation />
        <AllRoutes />
        <FooterNavigation />
      </Router>
    </div>

  );
}

export default App;
