import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../ui/input'
import { Button } from '@/components/ui/button'
import { IoCart, IoHeart } from 'react-icons/io5'
import { Separator } from '@/components/ui/separator'
import { RxHamburgerMenu } from "react-icons/rx";

const Header4 = () => {
  return (
    <header className='flex justify-between items-center h-16 p-8 border-b'>
        
        {/* Logo */}
        <Link to="/">
            <p className='font-bold text-2xl hover:cursor-pointer'>Navbar</p>
        </Link>

        {/* Search Products */}

        <Input className='max-w-[200px] sm:max-w-[400px]' placeholder="Search Products"/>

        {/* Button */}

        <div className="flex space-x-4 h-5 items-center">

            {/* Icon */}
            <div className="hidden md:flex space-x-2">
                <Button variant="ghost" size="icon">
                    <IoCart className='w-6 h-6'/>
                </Button>
                <Button  variant="ghost" size="icon">
                    <IoHeart className='w-6 h-6'/>
                </Button>
            </div>

            {/* Separator */}

            <Separator orientation='vertical' className='hidden md:block h-full'/>

            {/* Button */}

            <div className="hidden md:flex space-x-4">
                <Button variant="ghost">Login</Button>
                <Button variant="ghost">Works</Button>
            </div>

            {/* Hamburger Menu */}

            <div className="md:hidden">
                <RxHamburgerMenu className='h-6 w-6'/>
            </div>
        </div>


    </header>
  )
}

export default Header4
