import { Link } from 'react-router-dom';

const LogicSection: React.FC = () => (
    <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                “育成”と“ビジネス”をつなげる。<br />
                SEの価値を循環させるモデル。
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
                SEの強みが現場で終わるのではなく、提案につながり、評価につながり、文化になる。<br />
                サーキュラーSESは、「人的資本」としてのSEを循環させるための仕組みです。
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
                {[
                    {
                        title: '🧭 内省と発信で価値を可視化',
                        desc: '1on1や社内ブログで、SE一人ひとりの“らしさ”や“強み”を言語化・発信します。',
                    },
                    {
                        title: '📦 提案・マッチングに転換',
                        desc: '強みをSalesforceや営業資料に翻訳し、「誰をなぜ提案するか」が明確になります。',
                    },
                    {
                        title: '💡 評価・文化・報酬へ循環',
                        desc: '現場成果が社内に還元され、評価・昇格・文化的報酬へと繋がる構造をつくります。',
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-indigo-50 rounded-xl shadow-sm p-6 border border-indigo-100"
                    >
                        <h3 className="text-xl font-semibold text-indigo-700 mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="mt-10">
                <Link to="/column/logic">
                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                        モデルの詳細をもっと見る
                    </button>
                </Link>
            </div>
        </div>
    </section>
);

export default LogicSection;
