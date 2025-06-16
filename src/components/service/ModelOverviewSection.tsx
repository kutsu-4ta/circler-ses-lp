import ProcessFlowChart from "./figure/ProcessFlowChart";

const ModelOverviewSection: React.FC = () => (
    <section id="model-overview" className="py-24 px-4 bg-indigo-50">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                人と事業が一緒に成長する。<br className="hidden sm:inline" />
                循環型の育成モデル「サーキュラーSES」
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">
                エンジニアの価値定義を“自社の起点”として回すことで、<br />
                現場での学びが提案・評価・報酬へとつながり、<br />
                SE・顧客・会社の<b>三方良しの品質改善サイクル</b>を生み出します。
            </p>
        </div>

        <ProcessFlowChart />

        <div className="max-w-5xl mx-auto text-center mt-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                サーキュラーSESは、SESの現場で得られる経験を<b>“実務に即した質の高い学び”</b>として捉え、<br />
                エンジニアが<b>自身の強みや成長を社内へ発信</b>する構造を整えています。
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                現場での学びを単なる個人の成長に留めず、<b>社内の提案力や価値定義、ブランディングへと翻訳</b>することで、<br />
                エンジニア個人の成長が<b>自社の競争力やサービス品質の向上</b>につながる仕組みです。
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                私たちは、お客様のプロジェクトを<b>一過性の“実績づくり”として捉えることはありません</b>。<br />
                むしろ、そこで培われた知識やスキルを<b>当事者意識をもって深く吸収し、自らの価値として昇華すること</b>で、<br />
                <b>より質の高い貢献</b>が可能になると考えています。
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                現場での挑戦が社内に還元され、提案・評価・報酬へとつながり、<br />
                再び成長へと回り出す<b>社員・顧客・会社の三方良し</b>を実現する、<br />
                <b>“人的資本の循環エンジン”</b>が、サーキュラーSESです。
            </p>
        </div>
    </section>
);

export default ModelOverviewSection;
