import BackToColumnButton from "../BackToColumnButton";
import React from "react";

const MotivationTheoryDetail: React.FC = () => (
    <section className="py-20 px-6 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
            モチベーション理論と組織設計
        </h1>
        <p className="text-lg leading-relaxed mb-6">
            自律性・有能感・関係性を重視する「自己決定理論（SDT）」、<br />
            衛生要因と動機付け要因に分ける「ハーズバーグの二要因論」、<br />
            さらに「ワークエンゲージメント理論」など——。
        </p>
        <p className="text-lg leading-relaxed">
            これらの理論は、「なぜ人は働くのか」「何に満足し、何が離職要因になるのか」<br />
            を可視化するための道具です。<br /><br />
            戦略的な組織設計においては、<br />
            モチベーションを“感情”ではなく“構造”として扱うことが、再現性ある施策へとつながります。
        </p>
        <BackToColumnButton />
    </section>
);

export default MotivationTheoryDetail;
