import React from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const Header2 = () => {
  return (
    <header className="flex h-16 border-b items-center justify-between px-8">
        {/* Brand */}
        <Link to="/">
            <p className="text-2xl font-bold hover:cursor-pointer">
                Navbar
            </p>
        </Link>

        {/* Buttons */}
        <div className='flex items-center space-x-4 h-5'>
            {/* Separator */}
            <Separator orientation='vertical' className='hidden sm:block h-full'/> 

            {/* Navigation Buttons */}
            <div className='hidden md:flex space-x-4'>
                <Button variant="ghost">About</Button>
                <Button variant="ghost">Works</Button>
            </div>

            {/* Hamburger Menu Icon */}
            <div className='md:hidden'>
                <Button size='icon' variant='ghost'>
                    <RxHamburgerMenu className='h-6 w-6'/>
                </Button>
            </div>
        </div>
    </header>
  )
}

export default Header2
