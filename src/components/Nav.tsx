// Nav.tsx
import {Link} from 'react-router-dom';
import {useState} from 'react';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="text-blue-800 text-xl font-bold">TUNEチーム</div>
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
                            TUNEについて
                        </Link>
                    </li>
                    {/*<li className="border-b md:border-none">*/}
                    {/*    <Link to="/members" className="block  py-2 hover:underline" onClick={() => setIsOpen(false)}>*/}
                    {/*        メンバーの方へ*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                    <li className="border-b md:border-none">
                        <Link to="/leaders" className="block  py-2 hover:underline" onClick={() => setIsOpen(false)}>
                            ソリューション
                        </Link>
                    </li>
                    <li className="border-b md:border-none">
                        <Link to="/services" className="block  py-2 hover:underline" onClick={() => setIsOpen(false)}>
                            サービス
                        </Link>
                    </li>
                    <li className="border-b md:border-none">
                        <Link to="/column" className="block  py-2 hover:underline" onClick={() => setIsOpen(false)}>
                            コラム
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/request-materials"
                            className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition"
                        >
                            話を聞きたい
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
