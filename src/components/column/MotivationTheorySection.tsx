import BackToColumnButton from "./BackToColumnButton";
import React from "react";

const MotivationTheorySection: React.FC = () => (
    <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                モチベーションは、外から与えるものではない。
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
                報酬を与えれば人が動く——それはもう過去の話です。<br />
                “やらされ感”ではなく、“納得感”と“自己効力感”によって動くのが、<br />
                現代における持続可能なモチベーションの本質です。<br />
                <br />
                私たちはこれを、行動経済学と動機づけ理論の両面から設計しています。
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
                {[
                    {
                        title: '💸 ハーズバーグの二要因理論',
                        desc: '「不満の解消」と「満足の促進」は別物。報酬や制度は不満の解消、成長実感や承認は満足の源泉として設計すべき。',
                    },
                    {
                        title: '🧠 自己決定理論（SDT）',
                        desc: '自律性・有能感・関係性で動機は高まる。強制や管理ではなく、選択と内省と関係性で動く人を育てる設計が重要。',
                    },
                    {
                        title: '🔁 エンゲージメント構造論',
                        desc: '関係性・目的・未来展望の3点で納得感が生まれる。評価制度や対話機会を「つながり」「貢献」「展望」と結びつける設計が必要。',
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

export default MotivationTheorySection;
