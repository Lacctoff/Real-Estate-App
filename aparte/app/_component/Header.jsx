"use client"
import { Button } from '@/components/ui/button';
import { UserButton, useUser } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Header = () => {

    const path = usePathname(); //this helps us read the current URL's path name

    const { user, isSignedIn } = useUser() // fetches user from the clerk server

  return (
    <div className='flex justify-between p-6 px-10 fixed top-0 w-full shadow-sm z-20 bg-white'>
      {/* left side: logo & ul */}
      <div className='flex items-center gap-12'>
        <Image src={"/logo.svg"} width={150} height={150} alt="logo" />
        <ul className='hidden md:flex gap-10'>
        <Link href={'/'}>
        {/* set active class */}
            <li className={`hover:text-primary text-sm font-medium cursor-pointer ${path == '/' && 'text-primary'}`}>For Sale</li>
        </Link>
          
          <li className='hover:text-primary text-sm font-medium cursor-pointer'>For Rent</li>
          <li className='hover:text-primary text-sm font-medium cursor-pointer'>Agent Finder</li>
        </ul>
      </div>

      {/* right side: post Ad and Login */}
      <div className='flex gap-2 items-center'>
        <Button className='flex gap-2'><Plus className='h-5 w-5'/> Post Your Ad</Button>
        {isSignedIn ? 
        <UserButton /> : 
        <Link href={'/sign-in'}>
            <Button variant='outline'>Login</Button>
        </Link>}
      </div>
    </div>
  );
}

export default Header