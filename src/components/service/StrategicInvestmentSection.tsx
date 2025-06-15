import { Link } from 'react-router-dom';

const StrategicInvestmentSection: React.FC = () => (
    <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6 leading-snug">
                で、結局何が楽になるの？<br className="hidden sm:inline" />
                現場に効く「人的資本」の投資効果
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-16">
                理想論はいったん置いておいて。<br />
                この仕組みを入れると、<strong className="text-indigo-600">現場レベルで“すぐ”楽になる</strong>ことが、いくつもあります。
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {[
                    {
                        emoji: '💡',
                        title: '提案が通りやすくなる',
                        desc: 'マーケティングを行うことによって感覚に頼らない期待値調整が可能になる。そこにSEの自己分析を加えて提案文脈を作成することで納得感が生まれる。',
                    },
                    {
                        emoji: '👥',
                        title: '社員が辞めづらくなる',
                        desc: '評価の不満・承認の不足が減る。「見られている」「還元されている」実感が、定着に繋がる。',
                    },
                    {
                        emoji: '📉',
                        title: '採用コストが下がる',
                        desc: '紹介・リファラルが増え、カルチャーに共鳴した人材が自然に集まる。求人票も書きやすくなる。',
                    },
                    {
                        emoji: '📈',
                        title: '短期的にもROIが出る',
                        desc: '初年度から「単価の高い提案が通る」「定着率が上がる」など、目に見える指標に反映される。',
                    },
                    {
                        emoji: '🏗️',
                        title: '仕組みが“使われる”前提で作られている',
                        desc: '空論で終わらせない。運用に耐えうるUIと、日常業務に自然と組み込まれる設計。',
                    },
                    {
                        emoji: '📣',
                        title: '結局、現場が助かる',
                        desc: 'やらされ感ゼロ。営業もマネージャーも「これがあるとラク」と思える実務的支援が詰まっている。',
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-indigo-50 rounded-xl shadow-sm p-6 border border-indigo-100 hover:shadow-md transition"
                    >
                        <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                            {item.emoji} {item.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-16">
                <Link
                    to="/functions"
                    className="inline-block px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow hover:bg-indigo-700 transition"
                >
                    楽になる仕組みを見てみる
                </Link>
            </div>
        </div>
    </section>
);

export default StrategicInvestmentSection;
