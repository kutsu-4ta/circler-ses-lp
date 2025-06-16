import ProcessFlowChart from "./figure/ProcessFlowChart";

const ModelOverviewSection: React.FC = () => (
    <section className="py-24 px-4 bg-indigo-50">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                人と事業が一緒に成長する。<br className="hidden sm:inline" />
                循環型の育成モデル「サーキュラーSES」
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
                自己効力感を起点に、提案、評価、報酬がループする。<br />
                サーキュラーSESは、社員の成長が企業の利益や文化へと還元され、<br />
                再び次の成長へとつながっていく“人的資本の循環エンジン”です。
            </p>
        </div>
        {/*<div className="grid sm:grid-cols-2 gap-8 text-left">*/}
        {/*    <div className="bg-white p-6 rounded-xl  border border-indigo-100">*/}
        {/*        <h3 className="text-xl font-semibold text-indigo-700 mb-2">社内サイクル</h3>*/}
        {/*        <p className="text-gray-700">*/}
        {/*            自己棚卸し → 発信（ブログ/1on1） → 社内評価 → 給与・登用・文化的特権へと繋がる内部循環。*/}
        {/*        </p>*/}
        {/*    </div>*/}
        {/*    <div className="bg-white p-6 rounded-xl  border border-indigo-100">*/}
        {/*        <h3 className="text-xl font-semibold text-indigo-700 mb-2">社外サイクル</h3>*/}
        {/*        <p className="text-gray-700">*/}
        {/*            Salesforce連携による強みの翻訳 → 提案 → 顧客満足 → 単価UP → 再投資へと繋がる外部循環。*/}
        {/*        </p>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <ProcessFlowChart/>
    </section>
);

export default ModelOverviewSection;
