import React from 'react';

const FutureSection: React.FC = () => (
    <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                この取り組みの先にある未来
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
                自分の「強み」や「価値観」が見えてくると、<br />
                配属、評価、キャリアの選択肢が“受け身”から“選択”へと変わっていきます。
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
                {[
                    {
                        title: '⛅ 迷いが減る',
                        text: '選ぶ判断軸が「過去の経験 × 価値観」から導かれます。',
                    },
                    {
                        title: '🤝 提案されやすくなる',
                        text: 'あなたの“軸”が明確になると、営業もマッチしやすい現場を探しやすくなります。',
                    },
                    {
                        title: '💡 チャンスが生まれる',
                        text: '「こういう価値観の人がいたら○○を任せたい」という話が社内に増えていきます。',
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-indigo-50 rounded-xl shadow-sm p-6 border border-indigo-100"
                    >
                        <h3 className="text-xl font-semibold text-indigo-700 mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default FutureSection;
