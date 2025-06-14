import { Link } from 'react-router-dom';

const ChallengeSection: React.FC = () => (
    <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                経営指標には表れない、SE育成の“構造的な課題”
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
                評価制度を見直しても、研修を増やしても、
                なぜSEの成長実感やエンゲージメントが上がらないのか。
                <br />
                それは、根本的に「育成の構造」にズレがあるからです。
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
                {[
                    {
                        title: '💼 価値が“現場”にしか見えない',
                        text: '社員の強みや成果が、顧客現場でしか可視化されず、社内では評価や共有が困難。',
                    },
                    {
                        title: '📉 やる気が報酬に結びつかない',
                        text: '技術力や提案力が評価されにくく、「頑張っても変わらない」という感覚が蓄積。',
                    },
                    {
                        title: '🔄 “人材育成”と“事業”が分断',
                        text: '業績を上げても、育成ノウハウや評価データが蓄積されず、属人的な消費型になっている。',
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow-md p-6 border border-indigo-100"
                    >
                        <h3 className="text-xl font-semibold text-indigo-700 mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.text}</p>
                    </div>
                ))}
            </div>

            <div className="mt-10">
                <Link to="/leaders/details/challenge">
                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                        背景の構造をもっと見る
                    </button>
                </Link>
            </div>
        </div>
    </section>
);

export default ChallengeSection;
