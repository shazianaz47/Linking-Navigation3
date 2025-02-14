

import Link from 'next/link';



export default function Navbar() {
  
  return (
    <div>
    <div  className='flex bg-slate-200 w-full h-10 mt-2 mb-5'>
     <h1 className='w-[20%] font-bold p-2'>Design-o-Pedia</h1>    
         
      <ul className='mx-60 flex justify-around w-full h-full items-center'>
        <li><Link href={"/"}>Home</Link> </li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        {/* <li><Link href="/footer">Footer</Link></li> */}
      </ul>
      
    </div>
    </div>
    
  );
}
