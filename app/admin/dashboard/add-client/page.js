'use client'
import React, { useState } from 'react'
import LeftSidebar from '../../components/LeftSidebar';

export default function AddClient() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [domainName, setDomainName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [wordpressPanel, setWordpressPanel] = useState('');
  const [cpanel, setCpanel] = useState('');

  const handleJoiningDateChange = (e) => {
    setJoiningDate(e.target.value);
    // Calculate expiry date based on joining date
    const expiry = new Date(e.target.value);
    expiry.setFullYear(expiry.getFullYear() + 1);
    setExpiryDate(expiry.toISOString().split('T')[0]); // Convert expiry date to ISO string and format it
  };

  return (
    <div className='container-fluid'>
        <div className='row'>
        <LeftSidebar/>
        <div className='col-10'>
        <p className='text-center pt-3 display-6'>Add Client</p>
        <div className='row'>
          <div className='col-6'>
          <label for="username">Username:</label>
          <input type='text' id='username' className='form-control' value={username} onChange={(e)=> setUsername(e.target.value)}/>
          </div>
          <div className='col-6'>
          <label for="password">Password:</label>
          <input type='text' id='password' className='form-control' value={password} onChange={(e)=> setPassword(e.target.value)}/>
          </div>
        </div>
        <label for="domainName">Domain:</label>
        <input type='text' id='domainName' className='form-control' value={domainName} onChange={(e)=> setDomainName(e.target.value)}/>
        <label for="websiteUrl">Website URL:</label>
        <input type='text' id='WebsiteUrl' className='form-control' value={websiteUrl} onChange={(e)=> setWebsiteUrl(e.target.value)}/>
        <div className='row'>
          <div className='col-sm-6'>
            <label for="joiningDate">Joining Date:</label>
            <input type='date' id='joiningDate' className='form-control' value={joiningDate} onChange={handleJoiningDateChange}/>
          </div>
          <div className='col-sm-6'>
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input type='date' id='expiryDate' className='form-control' value={expiryDate} readOnly />
          </div>
        </div>
        <label for="wordpressPanel">Wordpress Admin Panel:</label>
        <input type='text' id='wordpressPanel' className='form-control' value={wordpressPanel} onChange={(e)=> setWordpressPanel(e.target.value)}/>
        <label for="cpanel">cPanel:</label>
        <input type='text' id='cpanel' className='form-control' value={cpanel} onChange={(e)=> setCpanel(e.target.value)}/>
        <p className='text-center mt-3'><button className='btn btn-primary'>Add Client</button></p>
        </div>
      </div>
    </div>
  )
}
