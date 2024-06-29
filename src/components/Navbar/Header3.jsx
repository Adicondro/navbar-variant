import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Header3 = () => {
  return (
    <header className='flex h-16 px-8 justify-between items-center border-b'>
      
      <Link to="/">
        <p className='text-2xl font-bold hover:cursor-pointer'>Navbar</p>
      </Link>

      <div className="flex space-x-4 items-center">
        <Button variant="ghost">About</Button>
        <Button variant="ghost">Works</Button>
      </div>
    </header>
  )
}

export default Header3
