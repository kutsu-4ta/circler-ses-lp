import BackToColumnButton from "../BackToColumnButton";
import React from "react";

const RecruitmentValueDetail: React.FC = () => (
    <section className="py-20 px-6 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
            採用戦略に「意味」を持たせる
        </h1>
        <p className="text-lg leading-relaxed mb-6">
            採用は「人を増やす活動」ではなく、<br />
            「どんな物語に誰を巻き込むか」を決める経営行為です。
        </p>
        <p className="text-lg leading-relaxed">
            自社のビジョンや強み、現場の育成構造が社外に向けて明示されていることで、<br />
            “選ぶ基準”が応募者に伝わり、「価値観で惹かれ合う採用」が実現します。<br /><br />
            企業の“内なる論理”を“外に伝える設計”が、<br />
            採用の質を変え、組織ブランディングにもつながっていきます。
        </p>
        <BackToColumnButton />
    </section>
);

export default RecruitmentValueDetail;