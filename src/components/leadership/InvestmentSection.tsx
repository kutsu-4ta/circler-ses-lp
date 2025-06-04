import { Link } from 'react-router-dom';

const InvestmentSection: React.FC = () => (
    <section className="py-20 px-4 bg-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                これは“コスト”ではなく、“人”への投資です。
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
                この取り組みの効果は、現場だけでなく、経営全体に波及します。
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-6 text-left">
                <div className="bg-white rounded-xl shadow-md p-6 border border-indigo-200">
                    <h3 className="text-xl font-semibold text-indigo-700 mb-2">💡 営業単価の改善</h3>
                    <p className="text-gray-700">
                        強みを言語化することで、マッチする案件に提案でき、単価や継続率が向上します。
                    </p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 border border-indigo-200">
                    <h3 className="text-xl font-semibold text-indigo-700 mb-2">📈 採用ブランディングへの波及</h3>
                    <p className="text-gray-700">
                        働きがいの見える化は、採用広報にも好影響を与えます。社外にも“考えている会社”という印象を持たれます。
                    </p>
                </div>
            </div>
        </div>
        <div className="mt-12 text-center">
            <Link to="/leaders/details/challenge">
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                経営メリットをさらに見る
            </button>
            </Link>
        </div>

    </section>
);

export default InvestmentSection;
