const InternalCycleSection: React.FC = () => (
    <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                自己理解と発信から始まる、評価と報酬の“社内循環”
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
                強みを言語化し、社内に伝える。<br />
                社員一人ひとりの“らしさ”が、提案や評価に繋がり、報酬として還元される構造を整えることで、<br />
                内発的動機づけに基づく自律的な成長が始まります。
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                {[
                    {
                        title: '🧠 自己棚卸し',
                        desc: '自分のwill・can・mustを整理し、強みや価値観を可視化。',
                    },
                    {
                        title: '🗣 社内発信（ブログ・1on1）',
                        desc: '強みや成功体験を、社内で共有する文化的インフラへ。',
                    },
                    {
                        title: '📈 社内評価と認知',
                        desc: '提案力や自律性が構造的に整理された評価軸で可視化される。',
                    },
                    {
                        title: '🎉 給与・登用・特権への還元',
                        desc: 'モデルSEとして認定され、報酬・任用・影響力の循環が生まれる。',
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

export default InternalCycleSection;
