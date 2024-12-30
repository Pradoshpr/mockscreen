import react from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CheckStatus from './pages/CheckStatus';
import TabularForm from './pages/TabularForm';
import Home from './pages/Home';
import LoginPage from './learncss/loginpage/LoginPage';
import SignupPage from './learncss/signuppage/SignupPage';
import FilterUser from './pages/filteruser/FilterUser';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element= {<LoginPage />}/>
          <Route path="/" element= {<Home />}/>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/checkstatus" element= {<CheckStatus />}  />
          <Route path="/viewdata" element= {<TabularForm />}  />
          <Route path="/sortuser" element= {<FilterUser />}  />
        </Routes>
      </Router>
    </>
  )
}

export default App
