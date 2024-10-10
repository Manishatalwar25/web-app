import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import AdminDashboard from "../src/Components/Admin/AdminDashboard";
import AuthForm from './Components/AuthForm';
import ProfileKYCForm from './Components/ProfileKYCForm';
import VerificationInProgress from './Components/VerificationInProgress'; 
import ConnectAccounts from './Components/ConnectAccounts';
import ApplyForLoan from './Components/ApplyForLoan';
import LoanDetail from "../src/Components/Admin/LoanDetail";
import LoanConfirmation from "./Components/LoanConfirmation";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Authentication Route */}
          <Route 
            path="/" 
            element={
              isAuthenticated ? 
                <Navigate to="/kyc-profile" /> : 
                <AuthForm onLogin={handleLogin} />
            } 
          />

          {/* KYC Profile Route */}
          <Route 
            path="/kyc-profile" 
            element={
              
                <ProfileKYCForm />
            } 
          />

          {/* Verification In Progress Route */}
          <Route 
            path="/verification" 
            element={
             
                <VerificationInProgress />
            } 
          />
           <Route 
            path="/socialaccount" 
            element={
             
                <ConnectAccounts />
            } 
          />
           <Route 
            path="/loan" 
            element={
             
                <ApplyForLoan />
            } 
          />
            <Route 
            path="/loanconfirmation" 
            element={<LoanConfirmation />} 
          />
           <Route 
            path="/admin/dashboard" 
            element={<AdminDashboard />} 
          />
          <Route 
            path="/loan/:id" 
            element={<LoanDetail />} 
          />
          
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
