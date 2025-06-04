import { Link } from "react-router-dom";

const ExecutiveRoleDetails: React.FC = () => (
    <div className="max-w-4xl mx-auto px-4 py-20 text-gray-800">
        <h1 className="text-3xl font-bold text-indigo-800 mb-6">経営の後押しが必要な理由</h1>
        <p className="text-lg leading-relaxed mb-6">
            経営層がこの取り組みに“言葉”を与えるだけで、現場は確信を持ちます。逆にいえば、言葉がないと空中分解します。
        </p>
        <p className="text-lg leading-relaxed mb-6">
            ごく小さな後押しが、組織に文化としての定着と、人材価値向上の両輪を生み出します。
        </p>
        <div className="mt-8">
            <Link to="/leaders" className="text-indigo-600 hover:underline">← 経営層向けページに戻る</Link>
        </div>
    </div>
);

export default ExecutiveRoleDetails;