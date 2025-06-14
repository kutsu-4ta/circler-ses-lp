import BackToColumnButton from "./BackToColumnButton";
import React from "react";

const ExternalFactorsSection: React.FC = () => (
    <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                変わりゆく時代に、個人の“キャリア自律”が求められている。
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                時間も場所も、雇用も、働き方も、すべてが柔軟化する現代。<br />
                企業に依存せずに自ら成長を選び取る「キャリア自律」の重要性は高まる一方です。
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
                {[
                    {
                        title: '📱 技術変化',
                        text: '生成AIやリモートワークの拡大により、知的労働の個人完結化が進行。',
                    },
                    {
                        title: '🕰️ 社会構造の変化',
                        text: '人生100年時代。若手と高齢者が同時に第一線に立つ“複線型キャリア”が常態に。',
                    },
                    {
                        title: '🏢 雇用と評価の変化',
                        text: '雇用形態の柔軟化とVUCA時代の価値観変容により、成果主義だけでは維持困難に。',
                    },
                    {
                        title: '💡 経営パラダイムの変化',
                        text: '人的資本経営が注目され、“社員の成長”がそのまま企業価値となる時代に。',
                    },
                ].map((item, i) => (
                    <div key={i} className="bg-indigo-50 rounded-xl shadow-sm p-6 border border-indigo-100">
                        <h3 className="text-xl font-semibold text-indigo-700 mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ExternalFactorsSection;
