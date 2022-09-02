import React from 'react';
import './App.scss';
import ErrorScreen from './screens/ErrorScreen';
import { Routes, Route, Navigate } from "react-router-dom";

function App(props: any) {
  const [ screen, ] = React.useState("login");

  return (
    <Routes>
      <Route path="/login" element={<ErrorScreen/>}/>
      <Route path="/" element={<Navigate to="/login"/>}/>
      <Route path="*" element={<ErrorScreen/>}/>
    </Routes>
  )
}

export default React.memo(App);
