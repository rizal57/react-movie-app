import React from 'react';
import Nav from './components/Nav';
import SideLayout from './layouts/SideLayout';
import Router from './router';

function App(props) {
  return (
    <SideLayout>
      <Nav />
      <Router />
    </SideLayout>
  );
}

export default App;
