'use client';

import Image from "next/image";
import Link from "next/link";
import { type } from "os";
import { useState } from "react";



const links = [{href:'/',key:'home'},
                {href:'/',key:'About'},
                {href:'/',key:'Guide'},
                {href:'/',key:'Description'}];
            
type ButtonParams = {
    type : 'button'|'submit';
    label : string;
    variant : 'bg-blue-500';
    tog: number
}
const Button = ({type,label,variant,tog}:ButtonParams) => {
    return (
        
        <button type={type} className={`${tog ? 'hidden' : ''} transition-all gap-1
        rounded-full mr-20 px-6 py-2 lg:flex hover:bg-gray-500  ${variant}`} >
            <Image alt="logo" src="/login.png" width={24} height={24}/>
            <label className="bold-16 whitspace-nowrap cursor-pointer">{label}</label>
        </button>
        
    )
}
const Header = ()=>{

    const [toggle,settoggle] = useState(1);
    const handleClick = () => {
                        if(toggle==0)
                            settoggle(1);
                        else
                            settoggle(0);
                        console.log(toggle);
                        }
  
    return (
        <nav className="flex flex-wrap justify-between items-center gap-12 max-container 
        padding-container relative md:w-auto z-20 py-5">
            <Link href="/" >
                <Image alt="logo" width={74} height={29} src="/redline.png" />
            </Link>
            <ul className={`${toggle ? 'hidden' : ''} h-full gap-12 lg:flex `} >
                {links.map((link) => (
                    <Link href={link.href} className="regular-16 text-dark-50 flexCenter 
                    cursor-pointer pb-1.5 transitin-all block hover:font-bold"> {link.key} </Link>
                ))}
            </ul>
            <div className="lg:flexCenter">
                <Button type="button" variant="bg-blue-500" label="Login" tog={toggle}/>
            </div>
            <svg
            xmlns="<http://www.w3.org/2000/svg>"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleClick}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </nav>
    )
}

export default Header;