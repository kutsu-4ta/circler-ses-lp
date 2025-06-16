import ProcessFlowChart from "./figure/ProcessFlowChart";

const ModelOverviewSection: React.FC = () => (
    <section id="model-overview" className="py-24 px-4 bg-indigo-50">
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
        <ProcessFlowChart/>
    </section>
);

export default ModelOverviewSection;
