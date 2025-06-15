import { Link } from 'react-router-dom';

const InternalCycleSection: React.FC = () => (
    <section className="py-24 px-4 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
            {/* セクションタイトル */}
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-700 mb-6">
                ほんとに回るの？<br className="sm:hidden" />評価と報酬の“社内循環”
            </h2>

            {/* 導入文 */}
            <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                綺麗事じゃない、本当に「仕組み」として成り立つのか？<br />
                その疑問に答える4つのステップをご紹介します。
            </p>

            {/* ステップカード */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left relative">
                {[
                    {
                        step: 'STEP 1',
                        title: '🧠 自己棚卸し',
                        quote: 'Will・Can・Mustなんて抽象的すぎる。どうすれば整理できるの？',
                        desc: '自己理解支援シートや1on1支援ツールで、「自分らしさ」を言語化できます。',
                        to: '/functions#self-analysis',
                    },
                    {
                        step: 'STEP 2',
                        title: '🗣 社内発信',
                        quote: '発信なんて恥ずかしいし浮きそう…',
                        desc: '1on1や社内ブログ、プレゼン支援のフォーマットで「浮かない発信」を文化にします。',
                        to: '/functions#internal-voice',
                    },
                    {
                        step: 'STEP 3',
                        title: '📈 社内評価と認知',
                        quote: '結局“空気を読む人”が得をするんじゃないの？',
                        desc: '構造化された提案評価フローで、「自律性」や「提案力」がちゃんと見える。',
                        to: '/functions#evaluation',
                    },
                    {
                        step: 'STEP 4',
                        title: '🎉 報酬と登用',
                        quote: 'ほんとに還元されるの？理想論じゃないの？',
                        desc: '表彰制度や評価連動の報酬設計で、身近な人からの感謝が仕組みとして還元されます。',
                        to: '/functions#rewards',
                    },
                ].map((item, i) => (
                    <div key={i} className="relative">
                        {/* セリフパート（上に浮かせる） */}
                        <div className="mb-4 px-4 py-3 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-medium shadow border border-emerald-200">
                            {item.quote}
                        </div>

                        {/* 本体カード */}
                        <div className="bg-emerald-50 rounded-xl shadow-sm p-6 border border-emerald-100 flex flex-col justify-between">
                            <div>
                                <span className="text-sm text-emerald-400 font-bold">{item.step}</span>
                                <h3 className="text-xl font-semibold text-emerald-700 mt-1 mb-3">{item.title}</h3>
                                <p className="text-gray-700">{item.desc}</p>
                            </div>

                            {/* CTA */}
                            <div className="mt-6">
                                <Link
                                    to={item.to}
                                    className="inline-block text-sm font-semibold text-emerald-600 hover:text-emerald-800 underline"
                                >
                                    機能を見てみる →
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 全体CTA */}
            <div className="mt-16">
                <Link
                    to="/functions"
                    className="inline-block px-8 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-full shadow hover:bg-emerald-700 transition"
                >
                    社内循環を支える機能一覧を見る
                </Link>
            </div>
        </div>
    </section>
);

export default InternalCycleSection;
