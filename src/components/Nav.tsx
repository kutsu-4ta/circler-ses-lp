// Nav.tsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="text-blue-800 text-xl font-bold">行動変容の取り組み</div>
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
                    <li className="border-b md:border-none">
                        <Link to="/aboutUs" className="block  py-2 hover:underline" onClick={() => setIsOpen(false)}>
                            私たちについて
                        </Link>
                    </li>
                    <li className="border-b md:border-none">
                        <Link to="/members" className="block  py-2 hover:underline" onClick={() => setIsOpen(false)}>
                            メンバーの方へ
                        </Link>
                    </li>
                    <li className="border-b md:border-none">
                        <Link to="/leaders" className="block  py-2 hover:underline" onClick={() => setIsOpen(false)}>
                            経営層の方へ
                        </Link>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="block px-2 py-2 hover:bg-blue-700 hover:text-white border border-blue-700 rounded md:inline transition"
                            onClick={() => setIsOpen(false)}
                        >
                            話を聞きたい
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
