const ExternalCycleSection: React.FC = () => (
    <section className="py-24 px-4 bg-indigo-50">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                営業と提案に繋がる、<br className="hidden sm:inline" />
                強みの“翻訳と活用”の仕組み
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
                SEの強みを、現場で終わらせない。<br />
                Salesforceなどの仕組みと連携し、強みを提案に変換。<br />
                単価アップ・顧客満足・組織の利益へとつなげる“社外価値の循環構造”を実現します。
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                {[
                    {
                        title: '📝 強みの翻訳',
                        desc: 'SE自身のアクションシートや棚卸し情報を、提案文脈に変換。',
                    },
                    {
                        title: '📡 Salesforceで社外接続',
                        desc: '提案理由・人物像を営業資料に反映し、顧客に明示。',
                    },
                    {
                        title: '💰 顧客満足 → 単価アップ',
                        desc: '提案の納得感が契約率と単価を向上。',
                    },
                    {
                        title: '🔁 利益の再投資と還元',
                        desc: '利益はSE本人と組織文化に再分配され、新たな成長サイクルを生む。',
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow-sm p-6 border border-indigo-100"
                    >
                        <h3 className="text-xl font-semibold text-indigo-700 mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ExternalCycleSection;
