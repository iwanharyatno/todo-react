import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

export default function Root() {
  const tabs = [
    {
      id: 1,
      name: 'Not Finished',
      link: 'not-finished'
    },
    {
      id: 2,
      name: 'Finished',
      link: 'finished'
    },
    {
      id: 3,
      name: 'Add New Data',
      link: 'add-todos'
    }
  ];
  let content;

  return (
    <>
      <Navbar title="Todo App" tabs={tabs} />
      <div className="p-4 mt-2 max-w-4xl mx-auto">
        <Outlet />
      </div>
    </>
  );
}
