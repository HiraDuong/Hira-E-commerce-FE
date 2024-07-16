import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../contexts/UserContext';
export const Nav = () => {
    const [activeLink, setActiveLink] = useState<string>('');

    const handleClick = (link: string) => {
        setActiveLink(link);
    };
    const { user } = useUser();
    if (!user) return null;
    else
        return (
            <nav className='fixed w-screen top-10 z-10'>
                <ul className='flex gap-4 bg-white w-screen h-10 border-solid border-2 items-center '>
                    <li className={`text-black ${activeLink === '/' ? 'border-b-2 border-blue-500' : ''} ml-8`}>
                        <Link to="/" onClick={() => handleClick('/')}>Home</Link>
                    </li>
                    <li className={`text-black ${activeLink === '/about' ? 'border-b-2 border-blue-500' : ''}`}>
                        <Link to="/about" onClick={() => handleClick('/about')}>About</Link>
                    </li>
                    <li className={`text-black ${activeLink === '/contact' ? 'border-b-2 border-blue-500' : ''}`}>
                        <Link to="/contact" onClick={() => handleClick('/contact')}>Contact</Link>
                    </li>
                </ul>
            </nav>
        );
};