'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'

export default function index() {
  const router = useRouter();
  useEffect(()=>{
    const isAdminAuthenticated = localStorage.getItem('isAdminAuthenticated');

    if (!isAdminAuthenticated) {
        router.push('/admin/login');
    } else {
        router.push('/admin/dashboard');
    }
  },[])
  return null
}
