const ToolCardSectionSection: React.FC = () => (
    <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                この戦略には明確な手段がある。<br/>
                この手段には明確な目的がある。<br/>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
                戦略の根幹を支えるのは、「使える仕組み」です。<br />
                社員の強みを可視化し、発信し、組織に還元していくプロセスを支えるために、<br />
                私たちは現場レベルで活用できるツールをあらかじめ設計しています。
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {[
                    {
                        title: '🗂 社員カルテ',
                        desc: '帰属意識・行動特性・価値観などを定性/定量で記録・更新する社員の“認知資産”。',
                    },
                    {
                        title: '🧠 カオナビ',
                        desc: 'コンピテンシー評価やエニアグラムなどを通じて、組織横断で人材を可視化。',
                    },
                    {
                        title: '📈 Salesforce',
                        desc: '社員の強みを提案文脈へ翻訳し、単価や満足度に繋げるCRM連携基盤。',
                    },
                    {
                        title: '📝 社内ブログ',
                        desc: '成功体験や価値観を共有し、“文化”として人材が育つ空気を形成。',
                    },
                    {
                        title: '🤝 1on1準備シート',
                        desc: '対話の質と目的を高め、発信・評価・自己効力感を支援。',
                    },
                    {
                        title: '🎯 Will・Can・Mustアクションシート',
                        desc: '強み・志向・現場ニーズを言語化し、提案材料や評価軸として活用。',
                    },
                ].map((tool, i) => (
                    <div
                        key={i}
                        className="bg-indigo-50 rounded-xl shadow-sm p-6 border border-indigo-100"
                    >
                        <h3 className="text-xl font-semibold text-indigo-700 mb-2">{tool.title}</h3>
                        <p className="text-gray-700">{tool.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ToolCardSectionSection;
