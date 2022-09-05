import React from 'react';
import './App.scss';
import ErrorScreen from './screens/ErrorScreen';
import LoginScreen from './screens/LoginScreen';
import LoginModal from './modals/LoginModal';
import { Routes, Route, Navigate } from "react-router-dom";

/*----------------------------------------------------------------------------*/

function App(props: any) {
  return <>
    <Routes>
      <Route path="/login" element={
        <LoginScreen/>
      }/>

      <Route path="/" element={
        <Navigate to="/login"/>
      }/>

      <Route path="*" element={
        <ErrorScreen title="Page Not Found!"
                     message="The page you're looking for does not exist."/>
      }/>
    </Routes>
    <LoginModal/>
  </>;
}

/*----------------------------------------------------------------------------*/

export default React.memo(App);
