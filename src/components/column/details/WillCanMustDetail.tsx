import BackToColumnButton from '../../../components/column/BackToColumnButton';

const WillCanMustDetail: React.FC = () => (
    <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-indigo-800 mb-6">Will・Can・Mustを使った目標設計論</h1>
            <p className="text-lg leading-relaxed mb-6">
                キャリア支援や育成方針を考える上で、<strong>Will（意志）・Can（能力）・Must（期待）</strong>のフレームは極めて有効です。
            </p>
            <p className="text-base leading-relaxed mb-6">
                この3要素を整理することで、以下のような構造的な対話が可能になります：
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-base">
                <li><strong>Will（意志）</strong>：何を大切にして働きたいか／どんなことに興味があるか</li>
                <li><strong>Can（能力）</strong>：どんなスキルがあるか／過去の経験から得たことは何か</li>
                <li><strong>Must（期待）</strong>：今の役割や会社の中で求められていることは何か</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
                この三者の重なりにこそ、「実行可能で意味のある目標」が見つかります。<br />
                サーキュラーSESでは、この設計を支援するアクションシートを活用し、
                自律的なキャリア開発と会社の戦略との接続を同時に実現しています。
            </p>
            <BackToColumnButton />
        </div>
    </section>
);

export default WillCanMustDetail;
