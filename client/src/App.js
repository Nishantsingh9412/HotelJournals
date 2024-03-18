import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import React , { useEffect }from 'react';
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

function App() {
  
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <AllRoutes />
        <Footer />
      </Router>
    </div>

  );
}

export default App;
