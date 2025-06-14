import BackToColumnButton from '../../../components/column/BackToColumnButton';

const SelfMutualPublicAidDetail: React.FC = () => (
    <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-indigo-800 mb-6">自助・共助・公助で組織は循環する</h1>
            <p className="text-lg leading-relaxed mb-6">
                「任せる」「助け合う」「仕組みで守る」。<br />
                組織における支援設計は、この3つの観点をバランスよく取り入れることが鍵です。
            </p>
            <p className="text-base leading-relaxed mb-6">
                <strong>自助</strong>は、個人が自らキャリアやスキルを磨こうとする力。<br />
                <strong>共助</strong>は、1on1やチームでの対話・フィードバックによる相互支援。<br />
                <strong>公助</strong>は、制度やツールによる客観的・継続的なサポート。
            </p>
            <p className="text-base leading-relaxed mb-6">
                サーキュラーSESモデルでは、これらを以下のように実装しています：
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-base">
                <li><strong>自助</strong>：Will・Can・Mustアクションシートでの目標設定</li>
                <li><strong>共助</strong>：1on1支援シートを使った対話の活性化</li>
                <li><strong>公助</strong>：社員カルテやカオナビによる可視化と客観評価</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
                これらの支援が相互に補完しあうとき、組織は“自走”と“循環”を両立できるようになります。
            </p>
            <BackToColumnButton />
        </div>
    </section>
);

export default SelfMutualPublicAidDetail;
