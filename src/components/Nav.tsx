import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import SearchInput from './SearchInput';
export const Nav = () => {
    const [activeLink, setActiveLink] = useState<string>('');

    const handleClick = (link: string) => {
        setActiveLink(link);
    };
    const { user,logout } = useUser();
    return (
        <nav className='fixed w-screen top-10 z-10'>
            <ul className='flex gap-8 bg-white w-screen h-16 border-solid border-2 items-center'>
                <li className={`text-black ${activeLink === '/' ? 'border-b-2 border-blue-500' : ''} ml-16`}>
                    <Link to="/" onClick={() => handleClick('/')}>Home</Link>
                </li>
                <li className={`text-black ${activeLink === '/about' ? 'border-b-2 border-blue-500' : ''}`}>
                    <Link to="/about" onClick={() => handleClick('/about')}>About</Link>
                </li>
                <li className={`text-black ${activeLink === '/contact' ? 'border-b-2 border-blue-500' : ''}`}>
                    <Link to="/contact" onClick={() => handleClick('/contact')}>Contact</Link>
                </li>
                <li className='ml-32'>
                    <SearchInput/>
                </li>
                {
                    user && (
                        <>
                            <li className='text-black'>
                                <Link to="/profile" onClick={()=>handleClick('/profile')}>{user.user.username}</Link>
                            </li>
                            <li className={`text-black `}>
                                <Link to="/" onClick={()=>logout()}>Logout</Link>
                            </li>
                        </>
                    )
                }
                {
                    !user && (
                        <>
                            <li className='text-black'>
                                <Link to="/login" onClick={()=>handleClick('/login')}>Login</Link>
                            </li>
                        
                        </>
                    )
                }
                <li>
                    <Link to = "/wishes">
                    <FaRegHeart size={30}/>
                    </Link>
                </li>
                <li>
                    <Link to = "/cart">
                    <FiShoppingCart size={30}/>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};