const MvvSection: React.FC = () => (
    <section className="py-24 px-4 bg-indigo-50">
        <div className="max-w-5xl mx-auto text-gray-800">
            <h2 className="text-4xl font-bold text-indigo-800 mb-12 text-center">TUNE</h2>

            {/* Mission */}
            <div className="bg-white rounded-xl shadow p-8 mb-10 border-l-8 border-indigo-400">
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">Mission</h3>
                <p className="text-lg">人がよりよく"ハッピー"を目指せるようにする</p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl shadow p-8 mb-10 border-l-8 border-indigo-400">
                <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Vision</h3>
                <p className="text-lg mb-4">
                    100人いれば100通りの"ハッピーのロジック”を組める組織
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                    私たちは、目に見えない価値こそが、組織の未来を形づくると考えています。<br />
                    「暗黙知」や「非言語の感情」は、測定不能であるがゆえに軽視されがちですが、<br />
                    それらは確かに存在し、チームの空気や文化を密かに支えています。<br /><br />
                    目の前の一人の笑顔が、やがて連鎖し、文化となる。<br />
                    育まれた文化が戦略を生み、戦略が再び人を笑顔にする。<br /><br />
                    この"ハッピー"の循環”を絶やさず、私たちは未来へ向けて進化を続けていきます。
                </p>
            </div>

            {/* Value */}
            <div className="bg-white rounded-xl shadow p-8 border-l-8 border-indigo-400">
                <h3 className="text-2xl font-semibold text-indigo-700 mb-6">Value</h3>

                <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-1">① バイアスを使いこなす</h4>
                    <p className="text-gray-700 text-sm">
                        人間の思考は、「具体と抽象」が基礎体力となり「バイアス」が技となる。<br />
                        バイアスに踊らされず、自らが意図的に使い分けることでひらめきを起こす。
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-1">② オセロの角をとる</h4>
                    <p className="text-gray-700 text-sm">
                        問題を要素に分解し、クリティカルな一手を見つける。<br />
                        複雑な課題でも、思考力と調査力で突破口をつくる。
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-1">③ 変化を大前提にもつ</h4>
                    <p className="text-gray-700 text-sm">
                        希望的観測を前提にしない。<br />
                        抽象度を上げて戦略を構築し、変化に応じた複数のシナリオを持つ。
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-gray-900 mb-1">④ パトス・ロゴス・エトスを込める</h4>
                    <p className="text-gray-700 text-sm">
                        あらゆる提案に「情熱・論理・信頼」を備え、共感と納得を生み出す。
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default MvvSection;
