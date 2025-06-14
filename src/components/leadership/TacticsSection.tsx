import { Link } from 'react-router-dom';

const TacticsSection: React.FC = () => (
    <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                意欲が成果に変わる構造を、制度と仕組みで支える。
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
                やる気や学びを“消費”で終わらせないために。<br />
                サーキュラーSESは、意欲が正しく社内に伝わり、評価や提案、報酬につながる構造を用意しています。
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
                {[
                    {
                        title: '🛠 社内で“らしさ”を表現する仕組み',
                        desc: '社員ブログ、ナレッジベース、アクションシート。自分の強みを社内で見える形に残す場を用意します。',
                    },
                    {
                        title: '🎯 評価と還元の連動',
                        desc: 'KPIダッシュボードや自由1on1など、自律的な評価を支える仕組みで、昇格・表彰・手当と連動させます。',
                    },
                    {
                        title: '🧪 モデル組織からスモールスタート',
                        desc: '既存組織に影響を与えすぎない形で、意欲あるメンバーによる実験組織を構築し、ナレッジを横展開します。',
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow-md p-6 border border-indigo-100"
                    >
                        <h3 className="text-xl font-semibold text-indigo-700 mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="mt-10">
                <Link to="/leaders/details/tactics">
                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                        実行プランをもっと詳しく見る
                    </button>
                </Link>
            </div>
        </div>
    </section>
);

export default TacticsSection;
