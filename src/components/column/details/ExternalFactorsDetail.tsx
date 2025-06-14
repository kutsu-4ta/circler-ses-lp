import BackToColumnButton from "../BackToColumnButton";
import React from "react";

const ExternalFactorsDetail: React.FC = () => (
    <section className="py-20 px-6 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
            社会の変化と人的資本経営
        </h1>
        <p className="text-lg leading-relaxed mb-6">
            少子高齢化・労働人口減少・ジョブ型人事・人的資本開示——。<br />
            こうした社会構造の変化が、企業にとって「人財戦略の再定義」を迫っています。
        </p>
        <p className="text-lg leading-relaxed">
            「人をどう育て、どう残し、どう活かすか」という問いは、<br />
            採用や教育の枠を超え、経営戦略の中核に位置づけられています。<br />
            人的資本への投資が“未来の競争力”になる時代。<br />
            その第一歩として、企業の中に育成と評価の循環構造が求められているのです。
        </p>
        <BackToColumnButton />
    </section>
);

export default ExternalFactorsDetail