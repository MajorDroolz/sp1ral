import React from 'react';
import './App.scss';
import ErrorScreen from './screens/ErrorScreen';

function App(props: any) {
  const [ screen, ] = React.useState("login");

  switch (screen) {
  case "login":
  case "main":
  default:
    return <ErrorScreen/>;
  }
}

export default React.memo(App);
