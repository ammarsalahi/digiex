import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import "./styles/dashboard.css"
import "./styles/transactions.css"
import "./styles/fonts.css";
import "./styles/colors.css";
import "./styles/stepper.css";
import "./styles/containers.css";
import "./styles/menu.css";


import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

import Dashboard from './components/pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transaction from "./components/pages/Transaction";
import BankAccount from "./components/pages/BankAccount";
import Wallet from "./components/pages/Wallet";
import OrderHistory from './components/pages/OrderHistory'
import React from 'react'
import Verification from "./components/pages/Verification";
import PrivateRoute from "./components/elements/global/PrivateRoute";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import MainDashboard from "./components/pages/MainDashboard";
import textTheme from "./components/elements/global/TextFieldTheme";
import Confirm from './components/pages/Confirm';
import Referral from './components/pages/Referral';
import Payment from './components/pages/Payment';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={textTheme}>
        <BrowserRouter>
        <Routes>

          <Route path="/buy"  element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          } />
          <Route path="/" exact element={
            <PrivateRoute>
              <MainDashboard/>
            </PrivateRoute>
          } />
         <Route path="/payment" exact element={
              <Payment/>
          } />
          <Route path="/transactions" element={
            <PrivateRoute>
              <Transaction/>
            </PrivateRoute>
          } />
          <Route path="/bankaccount" element={
            <PrivateRoute>
              <BankAccount/>
            </PrivateRoute>
          } />  
          <Route path="/wallet" element={
            <PrivateRoute>
              <Wallet/>
            </PrivateRoute>
          } />  
          <Route path="/orderhistory" element={
            <PrivateRoute>
              <OrderHistory/>
            </PrivateRoute>
          } />  
          <Route path="/verification" element={
            <PrivateRoute>
              <Verification/>
            </PrivateRoute>
          }/>
          <Route path="/verification/info" element={
            <PrivateRoute>
              <Verification stepNumber={0}/>
            </PrivateRoute>
          }/>
          <Route path="/verification/rule" element={
            <PrivateRoute>
              <Verification stepNumber={1}/>
            </PrivateRoute>
          }/>
          <Route path="/verification/document" element={
            <PrivateRoute>
              <Verification stepNumber={2}/>
            </PrivateRoute>
          }/>
          <Route path="/referral" element={
            <PrivateRoute>
              <Referral/>
            </PrivateRoute>
          }/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/confirm" element={<Confirm/>}/>
        </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
