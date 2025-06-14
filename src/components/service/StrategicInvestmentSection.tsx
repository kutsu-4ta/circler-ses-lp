const StrategicInvestmentSection: React.FC = () => (
    <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                育成はコストではない。<br className="hidden sm:inline" />
                利益とブランドを複利で生む“人的資本投資”
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
                この取り組みの本質は、人的資本の戦略投資です。<br />
                単価アップや売上貢献といった直接的な成果だけでなく、<br />
                組織文化、提案力、採用力といった“ブランド資産”も複利的に育ちます。
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                {[
                    {
                        title: '📈 単価アップの再現性',
                        desc: '自己理解 → 提案力強化 → 単価上昇。行動変容が数値に反映される仕組みを構築。',
                    },
                    {
                        title: '🔁 文化と利益の循環構造',
                        desc: '利益が再投資され、教育・表彰・発信文化へと還元。自律的な組織成長サイクルを形成。',
                    },
                    {
                        title: '🧠 “育つ仕組み”の社内資産化',
                        desc: '属人的でない再現性ある仕組みとして設計。モデル組織でスモールスタート可能。',
                    },
                    {
                        title: '🪴 短期ROI × 長期ブランディング',
                        desc: '初年度でも高い投資対効果を実現しつつ、数年後の営業力・採用力・定着率に効く。',
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
        </div>
    </section>
);

export default StrategicInvestmentSection;
