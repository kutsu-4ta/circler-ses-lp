import { Link } from "react-router-dom";

const InvestmentDetails: React.FC = () => (
    <div className="max-w-4xl mx-auto px-4 py-20 text-gray-800">
        <h1 className="text-3xl font-bold text-indigo-800 mb-6">これは投資か、コストか。</h1>
        <p className="text-lg leading-relaxed mb-6">
            この取り組みにかかるリソースは、見方を変えれば「人材価値の可視化と最適配置のための基盤整備」です。
        </p>
        <p className="text-lg leading-relaxed mb-6">
            また、営業資料の質・提案根拠の明確化は、営業ROIや案件継続率の改善にも直結する“収益構造の改善”とも言えます。
        </p>
        <div className="mt-8">
            <Link to="/leaders" className="text-indigo-600 hover:underline">← 経営層向けページに戻る</Link>
        </div>
    </div>
);

export default InvestmentDetails;