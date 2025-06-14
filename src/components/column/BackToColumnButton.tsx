import { Link } from 'react-router-dom';

const BackToColumnButton: React.FC = () => (
    <div className="mt-12 text-center">
        <Link
            to="/column"
            className="inline-block px-6 py-2 bg-indigo-100 text-indigo-800 font-semibold rounded-full hover:bg-indigo-200 transition"
        >
            ← コラム一覧に戻る
        </Link>
    </div>
);

export default BackToColumnButton;
