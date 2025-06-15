import ColumnLayout from "../ColumnLayout";

export const externalFactorsMeta = {
    id: "external-factors",
    title: "社会の変化と人的資本経営",
    category: "人事",
    tags: [
        "キャリア自律",
        "社会背景",
        "社会構造",
        "人的資本経営",
        "VUCA時代",
        "企業と個人の関係",
    ],
};

const ExternalFactorsDetail: React.FC = () => (
    <ColumnLayout
        title={externalFactorsMeta.title}
        author="山下 将史"
        date="2025年6月15日"
        category={externalFactorsMeta.category}
        tags={externalFactorsMeta.tags}
    >
        <p className="text-lg leading-relaxed mb-6">
            少子高齢化・労働人口の減少・ジョブ型人事制度・人的資本の情報開示——。
            <br />
            こうした社会構造の変化が、企業に「人材育成戦略の再定義」を迫っています。
        </p>

        <div className="flex justify-center my-8">
            <img
                src="/column/vuuca-valuable.png"
                alt="VUCA時代の価値観"
                className="max-w-full h-auto rounded shadow-md"
            />
        </div>

        <p className="text-lg leading-relaxed mb-6">
            同時に、私たちは “VUCA時代” とも呼ばれる不確実性の高い環境にいます。
            <br />
            価値観やライフスタイルが多様化し、過去の成功パターンが通用しなくなった今、
            <br />
            「正解を教える」育成ではなく、「自ら答えを探せる」人財が求められています。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            そんな中で、「人をどう育て、どう残し、どう活かすか」という問いは、
            <br />
            採用や研修の枠を超えて、企業の成長そのものを左右する要因になっています。
            <br />
            育成や評価の仕組みは、もはや人事部だけの話ではなく、
            <br />
            経営戦略の中核として再設計が必要です。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            これからの企業と個人の関係は、もはや「雇う側」と「雇われる側」ではありません。
            <br />
            キャリア自律が当たり前になりつつある中で、
            <br />
            企業は一人ひとりの内発的な動機や価値観に寄り添い、
            <br />
            個人は企業を“利用しながら成長する”という対等な関係性が前提になります。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            だからこそ、人的資本への投資が “未来の競争力” へとつながります。
            <br />
            その第一歩として、育成・評価・報酬を結びつけた循環構造を社内に築くことが、
            <br />
            持続可能な成長と、強い組織文化の鍵となるのです。
        </p>
    </ColumnLayout>
);

export default ExternalFactorsDetail;
