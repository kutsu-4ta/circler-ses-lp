import { Link } from 'react-router-dom';

const ExternalCycleSection: React.FC = () => (
    <section className="py-24 px-4 bg-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6 leading-snug">
                顧客満足と単価アップを両立させる、<br className="hidden sm:inline" />
                “価値翻訳”のマーケティング循環
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-16">
                SEの“強み”を、現場に閉じ込めない。<br />
                社内で蓄積された文化資本を、<b className="text-indigo-600">Salesforce</b>を通して顧客体験へ翻訳することで、<br />
                単なる営業支援ではなく、<b className="text-indigo-600">企業価値を最大化する循環構造</b>を構築します。
            </p>

            {/* 疑問→解決カード */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left mb-20">
                {[
                    {
                        title: '📊 顧客理解ってどうやるの？',
                        desc: 'Salesforceが収集するのは“データ”だけじゃない。期待値や感情も含めて、文脈を記録する仕組みはマーケティング戦略によって整備。',
                    },
                    {
                        title: '👤 SEの提案ってどうやって決めてるの？',
                        desc: 'Will・Can・Mustで整理されたポートフォリオから、「誰に誰を当てるべきか」を定義可能に。',
                    },
                    {
                        title: '🧩 提案と強みって、どう繋がるの？',
                        desc: 'SEカルテを元に「この人がこの案件に強い理由」を営業資料へ自動反映。',
                    },
                    {
                        title: '📈 単価ってどう上がるの？',
                        desc: '顧客への納得感が高まることで、受注率と単価が上昇。その利益は再分配され、組織に還元される。',
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow-md p-6 border border-indigo-100 hover:shadow-lg transition"
                    >
                        <h3 className="text-lg font-semibold text-indigo-700 mb-2">{item.title}</h3>
                        <p className="text-gray-700 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Salesforceが支える戦略構造図の導線 */}
            <div className="bg-white border-l-4 border-indigo-500 px-6 py-8 rounded-lg shadow-md text-left max-w-4xl mx-auto mb-12">
                <h3 className="text-xl font-bold text-indigo-800 mb-2">Salesforceは「学習装置」である</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                    単なるCRMではなく、社内に蓄積された<strong>文化資本（Will、スキル、評価）</strong>と、
                    社外の<strong>顧客データ</strong>を接続する「価値翻訳装置」です。<br />
                    「誰に」「どんな価値を」「誰が届けるか」を再現可能にし、営業提案を学習的に進化させる役割を担います。
                </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
                <Link
                    to="/functions"
                    className="inline-block px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow hover:bg-indigo-700 transition"
                >
                    社外循環を支える機能一覧を見る
                </Link>
            </div>
        </div>
    </section>
);

export default ExternalCycleSection;
