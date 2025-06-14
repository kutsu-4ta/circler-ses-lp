import VennDiagram from "./VenDiagram";
import SkillOverlapDemo from "./SkillOverlapDemo";

const WillCanMustActionSheet: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow border space-y-8">
            {/* タイトル */}
            <div>
                <h2 className="text-2xl font-bold text-indigo-800 mb-2">🎯 Will・Can・Must アクションシート</h2>
                <p className="text-sm text-gray-600">
                    強み（Can）・志向（Will）・現場ニーズ（Must）の3つを整理し、
                    自己納得と提案材料を両立するためのフレームワークです。
                </p>
            </div>

            {/* ベン図イメージ */}
            {/*<div className="text-center">*/}
            {/*    <VennDiagram overlapLevel="medium" />*/}
            {/*    /!*<img src="/images/will-can-must-venn.png" alt="Will-Can-Must ベン図" className="mx-auto max-w-sm" />*!/*/}
            {/*    <p className="text-xs text-gray-500 mt-2">※ベン図の中心が、あなたの働きやすい場所の目安です</p>*/}
            {/*</div>*/}
            <SkillOverlapDemo/>

            {/* メモ・フィードバック */}
            <div className="grid sm:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-semibold text-indigo-700 mb-2">📝 メモ</h3>
                    <textarea
                        placeholder="気づきや感情の変化、方向性の見直しなど自由に記入"
                        className="w-full h-32 border rounded p-2 text-sm"
                    />
                </div>
                <div>
                    <h3 className="font-semibold text-indigo-700 mb-2">💬 フィードバック</h3>
                    <textarea
                        placeholder="1on1や上長レビューで得たフィードバックを記録"
                        className="w-full h-32 border rounded p-2 text-sm"
                    />
                </div>
            </div>
        </div>
    );
};

export default WillCanMustActionSheet;
