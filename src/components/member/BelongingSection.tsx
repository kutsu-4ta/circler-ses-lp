import React from 'react';

const BelongingSection: React.FC = () => (
    <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                「帰属意識」とは、命令に従うことではない。
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
                この会社がどんな未来を目指しているのか。<br />
                そこに自分の「価値観」や「強み」が重なっていると感じられるか。<br />
                それが、これからの時代の“帰属意識”のあり方です。
            </p>

            <div className="mt-12 grid sm:grid-cols-3 gap-6 text-left">
                {[
                    {
                        title: '指示待ちの帰属ではなく',
                        desc: '「自分の意思で、ここにいたい」と思えることが大切です。',
                    },
                    {
                        title: '評価されるための努力ではなく',
                        desc: '「やりたいからやる」ことが、周囲から自然に信頼されます。',
                    },
                    {
                        title: '孤独な現場でも',
                        desc: 'Slackや1on1を通じて、社内との接点をつくり続けられます。',
                    },
                ].map((item, idx) => (
                    <div
                        key={idx}
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

export default BelongingSection;
