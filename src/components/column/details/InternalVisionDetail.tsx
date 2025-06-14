import BackToColumnButton from "../BackToColumnButton";
import React from "react";

const InternalVisionDetail: React.FC = () => (
    <section className="py-20 px-6 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
            ビジョンは“組織の意思”である
        </h1>
        <p className="text-lg leading-relaxed mb-6">
            自社のビジョンやMVVを「飾り」と捉えるのか、<br />
            「意思決定や評価の指針」として扱うのかで、組織の在り方は大きく変わります。
        </p>
        <p className="text-lg leading-relaxed">
            社員一人ひとりが、ビジョンの延長線上に自分のキャリアを描けるようになった時、<br />
            ビジョンは“他人の言葉”ではなく“自分の未来”になります。<br /><br />
            経営層から現場まで、内発的に“つながる”ビジョン設計が、<br />
            サーキュラーな組織を支える骨格になります。
        </p>
        <BackToColumnButton />
    </section>
);

export default InternalVisionDetail;