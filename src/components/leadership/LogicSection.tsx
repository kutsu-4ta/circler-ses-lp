import { Link } from 'react-router-dom';

const LogicSection: React.FC = () => (
    <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                強みを翻訳することで、営業と経営に“つながり”が生まれる。
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
                この取り組みは単なる自己分析ではありません。<br />
                現場の強みを“翻訳”し、営業資料や経営判断に使える言語にするプロセスです。
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
                {[
                    {
                        title: '🔍 現場が強みを内省する',
                        desc: 'ワークや1on1を通じて、本人の価値観・行動特性を言語化します。',
                    },
                    {
                        title: '📄 営業資料に反映される',
                        desc: '「この人を提案する理由」が明確になり、単価・マッチ度が向上します。',
                    },
                    {
                        title: '📊 経営の意思決定に繋がる',
                        desc: '配置・育成・支援の判断材料として、強みデータが活用されていきます。',
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
                <Link to="/leaders/details/logic">
                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                        翻訳プロセスをもっと詳しく
                    </button>
                </Link>
            </div>
        </div>

    </section>
);

export default LogicSection;
