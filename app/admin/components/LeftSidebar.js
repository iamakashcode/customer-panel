import Link from 'next/link'
import React from 'react'

export default function LeftSidebar() {
  return (
    <div className='col-2 py-4 shadow' id='left-sidebar'>
          <ul className='list-unstyled'>
            <li className='my-4'><Link href={'/admin/dashboard'} className="btn white-btn">Dashboard</Link></li>
            <li className='my-4'><Link href={'/admin/dashboard/add-client'} className='btn white-btn'>Add Client</Link></li>
            <li className='my-4'><button className='btn white-btn'>All Client</button></li>
          </ul>
        </div>
  )
}
