import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import AdminDashboard from "../src/Components/Admin/AdminDashboard";
import AdminLogin from "./Components/Admin/AdminLogin";
import AuthForm from './Components/AuthForm';
import ProfileKYCForm from './Components/ProfileKYCForm';
import VerificationInProgress from './Components/VerificationInProgress'; 
import ConnectAccounts from './Components/ConnectAccounts';
import ApplyForLoan from './Components/ApplyForLoan';
import UsersLoanList from "./Components/Admin/UsersLoanList";
import LoanConfirmation from "./Components/LoanConfirmation";
import ForgotPasswordForm from './Components/ForgotPasswordForm';
import ResetPasswordForm from './Components/ResetPasswordForm';
import Home from "./Components/Home";
import Notification from './Components/Notification';
import TransactionHistory from "./Components/TransactionHistory";
import LoanDetailHome from  './Components/LoanDetailHome';
import Profile from "./Components/Profile";
import ContactSupport from './Components/ContactSupport';
import FAQ from './Components/Faq';
import UserList from './Components/Admin/UserList';
import NotFoundPage from './Components/NotFound';
import ProtectedRoute from './Components/ProtectedRoute'; // Import the ProtectedRoute component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [phylloSDKLoaded, setPhylloSDKLoaded] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };


  useEffect(() => {
    const loadPhylloSDK = () => {
      if (!window.PhylloSDK) {
        const script = document.createElement('script');
        script.src = 'https://cdn.getphyllo.com/connect/v2/phyllo-connect.js';
        script.onload = () => {
          console.log('Phyllo SDK loaded successfully');
          setPhylloSDKLoaded(true);
        };
        script.onerror = () => {
          console.error('Failed to load Phyllo SDK');
        };
        document.head.appendChild(script);
      } else {
        setPhylloSDKLoaded(true);
      }
    };

    loadPhylloSDK();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Authentication Route */}
          <Route 
            path="/" 
            element={isAuthenticated ? <Navigate to="/kyc-profile" /> : <AuthForm onLogin={handleLogin} />} 
          />

          {/* KYC Profile Route */}
          <Route 
            path="/kyc-profile" 
            element={
              <ProtectedRoute>
                <ProfileKYCForm />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/transaction-history" 
            element={
              <ProtectedRoute>
                <TransactionHistory />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/notification" 
            element={
              <ProtectedRoute>
                <Notification />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/loandetail" 
            element={
              <ProtectedRoute>
                <LoanDetailHome />
              </ProtectedRoute>
            } 
          />

          {/* Verification In Progress Route */}
          <Route 
            path="/verification" 
            element={<VerificationInProgress />} 
          />
          <Route 
            path="/socialaccount" 
            element={<ConnectAccounts />} 
          />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />

          {/* Reset Password Route */}
          <Route path="/reset-password/:token" element={<ResetPasswordForm />} />
          <Route 
            path="/applyforloan" 
            element={
              <ProtectedRoute>
                <ApplyForLoan />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/loanconfirmation" 
            element={
              <ProtectedRoute>
                <LoanConfirmation />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/home" 
            element={<Home />} 
          />
          <Route 
            path="/admin" 
            element={<AdminLogin />} 
          />

          {/* Admin Routes - Apply adminOnly flag */}
          <Route 
            path="/admin/userlist" 
            element={
              <ProtectedRoute adminOnly={true}>
                <UserList />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
       
            <Route 
            path="/admin/userloanlist/:id" 
            element={
              <ProtectedRoute adminOnly={true}>
                <UsersLoanList />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/contact" 
            element={<ContactSupport />} 
          />
          <Route 
            path="/faq" 
            element={<FAQ />} 
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
