import { Link } from 'react-router-dom';

const ExecutiveCTA: React.FC = () => (
    <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-4">
                経営層にお願いしたいのは、たった一つ。
            </h2>
            <p className="text-lg text-gray-700 mb-8">
                この活動の価値を、ぜひ“経営の言葉”で認めてください。<br />
                それだけで、現場は動き出します。
            </p>

            <p className="text-xl font-bold text-indigo-600">
                「これは“人”への投資だ」と、口に出して言っていただけませんか。
            </p>
        </div>
        <p className="mt-10">
            <Link to="/leaders/details/executive">
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                経営の役割についてさらに読む
            </button>
            </Link>
        </p>

    </section>
);

export default ExecutiveCTA;
