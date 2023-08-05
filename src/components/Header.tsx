"use client";

import React from 'react'
import Image from "next/image"
import { signIn, signOut, useSession } from 'next-auth/react'
import {AiOutlineMenu} from 'react-icons/ai'

const Header = () => {
    const [menuIsOpen, ToggleMenu] = React.useState(false);
    const { status, data } = useSession();
    const handleLoginClick = () => signIn();
    const handleMenuClick = () => ToggleMenu(!menuIsOpen);
    const handleLogoutClick = () => signOut();
    return (
    <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
        <div className="relative h-[52px] w-[183px]">
            <Image alt="mercury" src="/mercury.png" fill/>
        </div>
        {status === "unauthenticated" && (
            <button className="text-secondary text-sm font-semibold" onClick={handleLoginClick}>Login</button>
        )}

        {status === "authenticated" && data.user && (
            <div className="flex items-center gap-3 border-secondary border border-solid rounded-full p-2 px-3 relative">
                <AiOutlineMenu size={16} onClick={handleMenuClick} className='cursor-pointer'/>

                <Image height={40} width={40} alt={data.user.name!} src={data.user.image!} className="rounded-full"/>
                { menuIsOpen && (
                    <div className="absolute top-14 left-0 w-full h-full bg-white rounded-full p-2 px-3 shadow-md flex flex-col justify-center">
                        <button className="text-primary text-sum font-semibold" onClick={handleLogoutClick}>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        )}
    </div>
    )
}

export default Header
