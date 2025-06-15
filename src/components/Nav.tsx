import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    const menuItems = [
        { to: '/leaders', label: 'ソリューション' },
        { to: '/services', label: 'サービス' },
        { to: '/functions', label: '機能' },
        { to: '/column', label: 'コラム' },
        { to: '/aboutUs', label: 'TUNEについて' },
    ];

    return (
        <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="text-blue-800 text-xl font-bold">TUNE</div>
                <button
                    className="md:hidden text-blue-800 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
                <ul
                    className={`${
                        isOpen ? 'block' : 'hidden'
                    } md:flex md:space-x-6 text-sm font-medium text-blue-700 md:items-center md:static absolute bg-white left-0 top-full w-full md:w-auto md:bg-transparent`}
                >
                    {menuItems.map(({ to, label }) => {
                        const isActive = currentPath === to;
                        return (
                            <li key={to} className="border-b md:border-none">
                                <Link
                                    to={to}
                                    onClick={() => setIsOpen(false)}
                                    className={`block py-2 hover:underline ${
                                        isActive ? 'text-indigo-700 font-bold underline' : ''
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}

                    <li>
                        <Link
                            to="/request-materials"
                            className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition block mt-2 md:mt-0"
                        >
                            話を聞きたい
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
