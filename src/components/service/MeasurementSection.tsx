const MeasurementSection: React.FC = () => (
    <section className="py-24 px-4 bg-indigo-50">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                “文化”と“成果”の両輪を測る、KGIとKPIの設計
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
                取り組みの価値は、単なる理念ではなく、成果として測れる構造にあります。<br />
                単価アップ・発信率・登用事例数などを通じて、人的資本投資の効果を可視化します。
            </p>

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 text-left">
                {[
                    {
                        title: '📊 KGI1：平均単価の向上',
                        desc: '現場パフォーマンスが“収益化”されているかを示す。初年度モデル5名に対し月3万円アップを目標。',
                    },
                    {
                        title: '🗣 KGI2：SEの社内アピール率',
                        desc: '自己棚卸し→発信→営業連携を通過した割合。初年度30%以上、3年後60%を目標。',
                    },
                    {
                        title: '🏆 KGI3：表彰・登用などの組織貢献事例数',
                        desc: '“個の成長が組織に返る”成功モデルの可視化。年3件以上を目安に蓄積。',
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow-sm p-6 border border-indigo-100"
                    >
                        <h3 className="text-xl font-semibold text-indigo-700 mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default MeasurementSection;
