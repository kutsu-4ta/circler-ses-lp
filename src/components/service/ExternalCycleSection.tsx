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
                社内で蓄積された文化資本を、<b className="text-indigo-600">Salesforce</b>を通じて戦略的に活かすことで、<br />
                単なる営業支援ではなく、<b className="text-indigo-600">育成と成果をつなぐ循環構造</b>を構築します。
            </p>

            {/* 疑問→解決カード */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left mb-20">
                {[
                    {
                        title: '📊 顧客理解ってどうやるの？',
                        desc: 'Salesforceが収集するのは“データ”だけじゃない。期待値や文化的特徴も含めて、提案文脈を記録する仕組みを構築。',
                    },
                    {
                        title: '👤 SEの提案ってどうやって決めてるの？',
                        desc: 'Will・Can・Mustで整理されたポートフォリオから、「誰がどこで活きるか」を戦略的に定義。',
                    },
                    {
                        title: '🧩 提案と強みって、どう繋がるの？',
                        desc: 'SEカルテをもとに「このSEがこの案件で最大限パフォーマンスを出せる理由」を営業資料に自動反映。',
                    },
                    {
                        title: '📈 単価ってどう上がるの？',
                        desc: 'SEの強みと顧客期待が一致することで納得感が高まり、受注率と単価が向上。その成果は再分配され、育成投資へつながる。',
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
                    社外の<strong>顧客文脈</strong>をつなぎ、誰がどの現場で活きるかを戦略的に判断するためのエンジンです。<br />
                    たとえば、<br/>
                    スキル要件が明確な現場には、<strong>専門性を磨きたいSEを</strong><br/>
                    裁量が活きる現場には、<strong>自律的に動けるSEを</strong><br/>
                    安定運用が重視される現場には、<strong>基礎力を蓄えたいSEを</strong><br/>
                    配属することで、<strong>育成と貢献の両立</strong>が実現します。<br />
                    現場は単なるリソースの受け皿ではなく、<strong>育成パートナー</strong>として位置づけられています。
                </p>
            </div>

            {/* 外部からのポジティブ評価イメージ */}
            <div className="flex flex-col items-center mt-16 mb-12">
                <img
                    src="/column/fresh-partner.png"
                    alt="いきいきと働くエンジニアたち"
                    className="max-w-xl w-full h-auto rounded mb-4"
                />
                <p className="text-center text-emerald-700 font-semibold text-lg">
                    「御社のSEの方って、なんだかいきいきとしていますよね。」
                </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                本人の志向や帰属意識の因子をベースに人材ポートフォリオとして整理します。<br />
                自社の顧客ポートフォリオと照合することで、最適なマッチングを実現します。<br />
                これにより、<b>本人のペースに合った育成シナリオ</b>を描くことができ、<br />
                「この会社で成長していける」という実感が、<b>行動の連鎖と周囲の信頼</b>を生み出します。
            </p>

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
