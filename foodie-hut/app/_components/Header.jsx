import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center p-6 md:px-20'>
      <Image src='/Foodie_Hut_Logo.png' alt='logo' width={200} height={1}/>
      <div className='flex boarder p-2 rounded-lg bg-gray-200 w-96'>
        <input type='text' className='bg-transparent w-full outline-none' />
        <Search />
      </div>
      <div className='flex gap-5'>
        <Button variant='outline'>Login</Button>
        <Button>Sign-in</Button>
      </div>
    </div>
  );
}

export default Header;
