import {useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChallengeSection: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const items = [
        {
            img: '/images/ceo-trouble.png',
            alt: '困る経営者のイラスト',
            title: '「うちの人材の価値って、結局いくらの単価が付いてるかだけで決まるの？」',
            summary:
                '自社での明確な価値定義ができず、顧客への提供単価をそのまま人材の価値と見なしてしまう。結果として、自社基準での人材評価ができず、組織的な判断が曖昧になる。',
            issue: "価値定義が現場依存",
            detail:
                '人材の価値が“顧客がいくら払っているか”に依存しており、自社としての価値定義や評価基準が存在しない。このことが、育成・評価・給与設計のすべてを現場依存にし、経営としての統一的な意思決定を困難にしている。',
            link: '/column/value-definition'
        },
        {
            img: '/images/se-trouble.png',
            alt: '困るSEのイラスト',
            title: '「この人が自社の先輩だったらよかったのになぁ……」',
            summary:
                '活動場所（顧客現場）と所属場所（自社）が乖離しているため、先輩からの指導や組織目標との接続が困難に。自社への帰属意識が薄れ、キャリア安全性の欠如が離職の要因になる。',
            issue: "帰属と成長の不一致",
            detail: '業務への愛着は現場に生まれる一方で、自社からの支援やつながりを感じづらく、孤立しやすい。特に成長意欲の高いSEにとって、キャリアの見通しが立たないことが心理的な不安定さにつながりやすい。',
            link: '/column/belonging-and-growth'
        },
        {
            img: '/images/sales-trouble.png',
            alt: '困る営業のイラスト',
            title: '「あのエンジニアにはこの提案が刺さるって、経験で分かるけど……他の人には共有できないな」',
            summary:
                'エンジニアごとの成長スタイルに対応した提案が属人化し、顧客との期待値調整にもばらつきが生まれる。結果として営業リソースが逼迫し、早期離職やミスマッチの要因となる。',
            issue: "営業提案の属人化",
            detail:
                '提案内容が担当営業の経験や感覚に依存しやすく、組織としての提案基準や判断軸が育たない。再現性が持てず、属人的対応が常態化することで営業の限界を早めてしまう。',
            link: '/column/proposal-structure'
        }
    ];

    return (
        <section className="py-16 px-4 bg-indigo-50">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                    経営指標には表れない、SE育成の“構造的な課題”
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-12">
                    評価制度を見直しても、研修を増やしても、<br/>
                    なぜSEの成長実感やエンゲージメントが上がらないのか。<br/>
                    それは、根本的に「育成の構造」にズレがあるからです。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-10">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <img
                                src={item.img}
                                alt={item.alt}
                                className="w-32 h-32 object-contain mb-4"
                            />
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{item.title}</h3>
                            <p className="text-gray-700 text-sm mb-4 px-2">{item.summary}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-12">
                    <button
                        onClick={toggleOpen}
                        className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
                    >
                        {isOpen ? '背景の構造を閉じる' : '背景の構造をもっと見る'}
                    </button>
                </div>

                {isOpen && (
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                key="details"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4 }}
                                className="overflow-hidden"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                                    {items.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-white p-6 rounded-lg border border-indigo-100 shadow text-sm"
                                        >
                                            <h4 className="text-indigo-700 font-semibold text-base mb-2">{item.issue} の背景構造</h4>
                                            <p className="text-gray-700 mb-4">{item.detail}</p>
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-indigo-700 underline"
                                            >
                                                コラムを読む
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                )}
            </div>
        </section>
    );
};

export default ChallengeSection;
