import { Link } from "react-router-dom";

const ChallengeDetails: React.FC = () => (
    <div className="max-w-4xl mx-auto px-4 py-20 text-gray-800">
        <h1 className="text-3xl font-bold text-indigo-800 mb-6">現場の“静かな課題”とは何か？</h1>
        <p className="text-lg leading-relaxed mb-6">
            表面化しづらい組織課題には、若手の孤立、キャリアの不透明感、評価への不信などが含まれます。
            こうした"静かな課題"は、数値には現れにくく、しかし確実にエンゲージメントや離職リスクに影響します。
        </p>
        <p className="text-lg leading-relaxed mb-6">
            本取り組みでは、これらの課題を“言葉”にしてすくい上げ、組織課題として構造的に捉えなおす視点を導入します。
        </p>
        <div className="mt-8">
            <Link to="/leaders" className="text-indigo-600 hover:underline">← 経営層向けページに戻る</Link>
        </div>
    </div>
);

export default ChallengeDetails;