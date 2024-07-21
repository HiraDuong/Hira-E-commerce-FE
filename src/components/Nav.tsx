import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { FaRegHeart, } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import SearchInput from './SearchInput';
import { LuContact2, LuHome, LuInfo, LuLogIn, LuLogOut } from 'react-icons/lu';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { IoSearchSharp } from 'react-icons/io5';

export const Nav = () => {
    const [activeLink, setActiveLink] = useState<string>('');
    const [searchClick, setSearchClick] = useState<boolean>(false);
    const handleClick = (link: string) => {
        setActiveLink(link);
    };

    const { user, logout } = useUser();

    return (
        <nav className='fixed w-screen top-10 z-10 bg-gray-400 opacity-85'>
            <ul className={`grid ${user ? 'grid-cols-10' : 'grid-cols-9'}  w-screen h-16 border-solid border-2 items-center [&_li]:flex [&_li]:items-center [&_li]:justify-center gap-1 [&_li]:h-4/5 [&_li]:font-bold`}>
                <li className={`text-black ${activeLink === '/' ? 'border-b-2 border-blue-500' : ''} col-span-1`}>
                    <Link to="/" onClick={() => handleClick('/')}>
                        <span className="hidden md:inline">Home</span>
                        <LuHome size={30} className="md:hidden" />
                    </Link>
                </li>
                <li className={`text-black ${activeLink === '/about' ? 'border-b-2 border-blue-500' : ''} col-span-1`}>
                    <Link to="/about" onClick={() => handleClick('/about')}>
                        <span className="hidden md:inline">About</span>
                        <LuInfo size={30} className="md:hidden" />
                    </Link>
                </li>
                <li className={`text-black ${activeLink === '/contact' ? 'border-b-2 border-blue-500' : ''} col-span-1`}>
                    <Link to="/contact" onClick={() => handleClick('/contact')}>
                        <span className="hidden md:inline">Contact</span>
                        <LuContact2 size={30} className="md:hidden" />
                    </Link>
                </li>
                <li className='!hidden col-span-3 md:!flex'>
                    <SearchInput/>
                </li>
                <li className='col-span-1 md:!hidden'>
                    <IoSearchSharp size={30} onClick={()=>{
                        setSearchClick(!searchClick)
                    }}/>
                    <div className={`${searchClick ? '!block':'!hidden'} fixed top-26 w-80 left-4`}>
                    <SearchInput/>
                    </div>
                </li>
                {
                    user ? (
                        <>
                            <li className='text-black col-span-1'>
                                <Link to="/profile" onClick={() => handleClick('/profile')}>
                                <span className="hidden md:inline">{user.user.username}</span>
                                <MdOutlinePersonOutline size={30} className="md:hidden" />
                                </Link>
                            </li>
                            <li className='text-black col-span-1'>
                                <Link to="/" onClick={() => logout()}><span className="hidden md:inline">Logout</span>
                                <LuLogOut size={30} className="md:hidden" /></Link>
                            </li>
                        </>
                    ) : (
                        <li className='text-black col-span-1'>
                            <Link to="/login" onClick={() => handleClick('/login')}>
                            <span className="hidden md:inline">Login</span>
                                <LuLogIn size={30} className="md:hidden" />
                            </Link>
                        </li>
                    )
                }
                <li className='col-span-1'>
                    <Link to="/wishes">
                        <FaRegHeart size={30} />
                    </Link>
                </li>
                <li className='col-span-1'>
                    <Link to="/cart">
                        <FiShoppingCart size={30} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
