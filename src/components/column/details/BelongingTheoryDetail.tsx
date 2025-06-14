import BackToColumnButton from "../BackToColumnButton";
import React from "react";

const BelongingTheoryDetail: React.FC = () => (
    <section className="py-20 px-6 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
            帰属意識と納得感の構造
        </h1>
        <p className="text-lg leading-relaxed mb-6">
            組織において「居場所」や「信頼」を感じるかどうかは、<br />
            パフォーマンスにも離職率にも大きく影響します。<br />
            これは単なるメンタルケアの話ではなく、戦略論です。
        </p>
        <p className="text-lg leading-relaxed">
            MVVとの接続、1on1の設計、評価の透明性、<br />
            社内での言語化・発信文化など——。<br />
            帰属意識は「納得できる構造」と「共感できる物語」によって醸成されます。<br /><br />
            だからこそ、マネジメント設計の要となるのです。
        </p>
        <BackToColumnButton />
    </section>
);

export default BelongingTheoryDetail;
