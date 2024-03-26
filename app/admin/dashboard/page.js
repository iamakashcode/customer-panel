import React from 'react';
import './style.css';
import LeftSidebar from '../components/LeftSidebar';

export default function Dashboard() {
  return (
    <>
    
    <div className='container-fluid'>
      <div className='row'>
        <LeftSidebar/>
        <div className='col-10'>
        <p className='text-center pt-3 display-6'>Desire Div</p>
        </div>
      </div>
    </div>
    </>
  )
}
