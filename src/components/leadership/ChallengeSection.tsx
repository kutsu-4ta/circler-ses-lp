import { Link } from 'react-router-dom';

const ChallengeSection: React.FC = () => (
    <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                経営層が見えにくい、現場の“静かな課題”
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
                現場ではこんな声が聞こえています。
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
                {[
                    {
                        title: '🌀 単価が上がらない',
                        text: '「この人の強みは？」と問われた時、即答できない状態が続いています。',
                    },
                    {
                        title: '🌱 若手が育たない',
                        text: 'キャリア支援や対話の余白がなく、モチベーションが不安定になっています。',
                    },
                    {
                        title: '📉 帰属意識が薄れている',
                        text: '評価軸や方向性が不透明で、「会社にいても変わらない」と感じる若手が増えています。',
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
                    <button  className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                        現場の課題を深掘りする
                    </button>
                </Link>
            </div>
        </div>

    </section>
);

export default ChallengeSection;
