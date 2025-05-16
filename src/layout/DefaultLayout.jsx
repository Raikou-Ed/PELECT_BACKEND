import React from 'react';
import Header from '../components/Header'; 
import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <>
      <Header /> {/* Render the Header component here */}
      <main className="">
        <Outlet /> {/* Render the content of the current page here */}
      </main>
    </>
  );
}

export default DefaultLayout;