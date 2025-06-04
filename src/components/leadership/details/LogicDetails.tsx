import { Link } from "react-router-dom";

const LogicDetails: React.FC = () => (
    <div className="max-w-4xl mx-auto px-4 py-20 text-gray-800">
        <h1 className="text-3xl font-bold text-indigo-800 mb-6">強みの“翻訳”とは何か？</h1>
        <p className="text-lg leading-relaxed mb-6">
            この活動のコアは、属人的な“強み”を、営業・育成・経営の言語に翻訳することにあります。
            強みを定義し、タグ付けし、再利用可能な形で残すことで、提案力や配置判断が変わります。
        </p>
        <p className="text-lg leading-relaxed mb-6">
            また、定性情報の蓄積は、組織の“人的資本データ”としての資産化にもつながります。
        </p>
        <div className="mt-8">
            <Link to="/leaders" className="text-indigo-600 hover:underline">← 経営層向けページに戻る</Link>
        </div>
    </div>
);

export default LogicDetails;