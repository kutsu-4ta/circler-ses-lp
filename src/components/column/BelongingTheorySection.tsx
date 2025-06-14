import React from 'react';
import BackToColumnButton from "./BackToColumnButton";

const BelongingTheorySection: React.FC = () => (
    <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                「なんとなくの不満」は、帰属の構造で読み解ける。
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
                社員の声にならない違和感や、離職の兆候——。<br />
                これらは「評価が不透明」「キャリアが見えない」など、<br />
                言語化しにくい“構造的な欠落”によって生まれます。<br />
                <br />
                私たちは、帰属意識を4つの要素に分解し、それぞれに対して設計を施しています。
            </p>

            <div className="grid sm:grid-cols-2 gap-6 text-left">
                {[
                    {
                        title: '🧭 方向の納得',
                        desc: 'どこへ向かっているか。MVVの言語化、経営戦略との接続で実現。',
                    },
                    {
                        title: '👣 行動の納得',
                        desc: 'なぜ今それをするのか。OKR、1on1、上司との対話設計が鍵。',
                    },
                    {
                        title: '🎯 評価の納得',
                        desc: '何をもって成果とするか。コンピテンシーやWill-Can-Must設計で明確化。',
                    },
                    {
                        title: '🧩 関係の納得',
                        desc: 'ここに自分がいてよいか。社内ブログや承認文化で居場所を可視化。',
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

export default BelongingTheorySection;
