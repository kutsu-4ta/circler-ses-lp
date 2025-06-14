import BackToColumnButton from '../../../components/column/BackToColumnButton';

const SelfEfficacyDetail: React.FC = () => (
    <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-indigo-800 mb-6">自己効力感が人を育てる組織のエンジン</h1>
            <p className="text-lg leading-relaxed mb-6">
                「自分にもできるかもしれない」という信念は、社員の行動の出発点です。<br />
                組織においてこの“自己効力感”が醸成されると、挑戦や自律的な行動が生まれ、
                成長スピードが加速します。
            </p>
            <p className="text-base leading-relaxed mb-6">
                自己効力感は、以下のような要素から育てることができます：
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-base">
                <li>過去の成功体験（小さな達成でも可視化する）</li>
                <li>他者からの期待やフィードバック</li>
                <li>1on1や社員カルテを通じた内省機会</li>
                <li>ロールモデルの提示や、他者の成功との接点</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
                特に、“提案できるSE”を育成するには、業務の中で「成功の定義」を共有し、
                それが本人にとっても価値あるものであると認識されることが重要です。<br />
                自信は偶然ではなく、構造的に設計できるものです。
            </p>
            <BackToColumnButton />
        </div>
    </section>
);

export default SelfEfficacyDetail;
