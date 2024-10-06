
'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
// import path from 'path';
import React from 'react'


export default function Home() {
const router= useRouter();

const navigate=(path:any) => {
  router.push(path)}

  return ( 
  <>
  <h1 className='bg-purple-500'><u>3rd Assignment of next js using Link and Navigation</u></h1>
  <h2 className='mt-5'>Create four route pages: Navbar, About, Contact, and Footer.<br></br>

Link all components together using the 'Link' component.

Add navigation for all routes using buttons and useRouter.
</h2>

  <ul className='bg-blue-200 mt-5'>
  <li><Link href='/about'><h1 className='bg-cyan-200'>go to about page</h1></Link></li>
  <li><Link href='/contact-us'><h1 className='bg-cyan-300'>contact-us page</h1></Link></li>
  <li><Link href='/navbar'><h1 className='bg-cyan-400'>navbar page</h1></Link> </li>
  <li><Link href='/footer'><h1 className='bg-cyan-500'>footer page</h1></Link></li>
  </ul>
    <div>
     <nav className='bg-slate-300 mt-10' >
     <li className='bg-pink-600'><b><button onClick={() => navigate('/')}>Home</button></b></li>
     <li className='bg-pink-500'><b><button onClick={() => navigate('/about')}>About</button></b></li>
      <li className='bg-pink-400'><b><button onClick={() => navigate('/contact')}>Contact</button></b></li>
      <li className='bg-pink-300'><b><button onClick={() => navigate('/footer')}>Footer</button></b></li> 
      <li className='bg-pink-200'><b><button onClick={() => navigate('/navbar')}>Navbar</button></b></li>
      </nav>
      </div>
   </>
  );
}