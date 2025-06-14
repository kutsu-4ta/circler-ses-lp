const AboutMeSection: React.FC = () => {
    const leaderName = "山下 将史";
    const organizeName = "TUNE";

    return <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-gray-800">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-10 text-center">
                “構造を読むSE”から、“ハッピーの循環”をデザインする人へ
            </h2>

            <div className="space-y-10 text-lg leading-relaxed text-gray-700">
                {/* 導入文 */}
                <div>
                    <p>
                        はじめまして。{organizeName}代表の<strong>{leaderName}</strong>です。<br/>
                        現在28歳ですが、私は19歳の頃から「人と組織がよりよく“ハッピー”を目指せるようにするには？」という問いに惹かれ、戦略や組織デザインの独学を続けてきました。
                    </p>
                    <p>
                        当時から私は<span
                        className="font-semibold text-indigo-700">“構造と思考”の視点から、人や組織の幸せに関わること</span>を目指していました。<br/>
                        そのためにまず選んだのが、システムエンジニアという職業でした。<br/>
                    </p>
                </div>

                {/* SEという手段の意味 */}
                <div className="bg-indigo-50 p-6 rounded-xl border-l-8 border-indigo-400 shadow-sm">
                    <h3 className="text-xl font-semibold text-indigo-800 mb-2">SEは「構造を読む訓練」だった</h3>
                    <p>
                        私はこれまで、Webフルスタック開発・スマホアプリ開発・デザインまで、幅広く経験してきました。
                    </p>
                    <p className="mt-2">
                        そのすべては、<span
                        className="font-semibold">人の行動や組織構造、戦略の設計思想を“構造的に理解する力”を養う</span>ための修行でした。
                    </p>
                    <ul className="list-disc list-inside text-base text-gray-600 mt-2">
                        <li>人の行動をどう設計するか</li>
                        <li>感情とロジックをどう接続するか</li>
                        <li>組織や市場をどうモデリングして読み解くか</li>
                    </ul>
                </div>

                {/* 資格も実績もなくても、構造が見える */}
                <div>
                    <h3 className="text-xl font-semibold text-indigo-700 mb-2">実績も資格もない。でも、構造は見える。</h3>
                    <p>
                        私は経営の資格も、戦略部門でのキャリアもありません。<br/>
                        しかし、<span className="font-semibold">目に見えない価値＝暗黙知や文化の構造</span>を見抜き、再設計する力には自信があります。
                    </p>
                    <p>
                        顧客体験・意思決定・組織文化といった“非言語の価値”が、<br/>
                        <span className="text-indigo-700">どう戦略に繋がるかを論理的に分析し、構造化・言語化</span>するのが私の強みです。
                    </p>
                </div>

                {/* この組織の意味 */}
                <div className="bg-indigo-50 p-6 rounded-xl border-l-8 border-indigo-400 shadow-sm">
                    <h3 className="text-xl font-semibold text-indigo-800 mb-2">{organizeName}は「問いの実験場」</h3>
                    <p>
                        {organizeName}は、金銭的な成功を<span className="font-semibold">目的</span>としているわけではありません。<br/>
                        <span
                            className="font-semibold">「人はどうすれば幸せに働けるのか？」という問いを、感情と構造の両面から検証する戦略実験場</span>です。<br/>
                        <span className="font-semibold">お金による数字化はあくまで結果</span>としての答え合わせのための道具です。
                    </p>
                    <p className="mt-2">
                        「笑顔の連鎖が文化を生み、文化が戦略となり、戦略がまた笑顔を生む」<br/>
                        そんな<span className="text-indigo-700 font-medium">“ハッピーの循環”</span>を実現するのが私たちのミッションです。
                    </p>
                </div>

                {/* ビジョンとの接続 */}
                <div>
                    <h3 className="text-xl font-semibold text-indigo-700 mb-2">私のビジョン</h3>
                    <p>
                        <strong>100人いれば100通りの“ハッピーのロジック”を組める組織をつくる</strong>こと。<br/>
                        一人ひとりの価値観・強み・状況に応じて、自分なりの幸せを“構造的に組み立てる”文化をつくることが、<br/>私の戦略であり、私の願いです。
                    </p>
                </div>

                {/* プロフィール */}
                {/*<div className="pt-6 border-t">*/}
                {/*    <h4 className="text-lg font-semibold text-indigo-700 mb-2">プロフィール（箇条書き）</h4>*/}
                {/*    <ul className="list-disc list-inside space-y-1 text-base">*/}
                {/*        <li>年齢：28歳</li>*/}
                {/*        <li>戦略・マーケティングの独学歴：9年（19歳〜現在）</li>*/}
                {/*        <li>経歴：Webフルスタック開発／スマホアプリ開発／UI・UXデザイン</li>*/}
                {/*        <li>志向：経営戦略・組織設計・人財開発・ナラティブマーケティング</li>*/}
                {/*        <li>専門：構造思考／MVVデザイン／感情と戦略の接続</li>*/}
                {/*        <li>好きな言葉：「win-winな関係」</li>*/}
                {/*    </ul>*/}
                {/*</div>*/}

                {/* 結びメッセージ */}
                <div className="text-center pt-10">
                    <p className="text-indigo-600 font-medium">
                        戦略にストーリーを。<br/>
                        感情にロジックを。<br/>
                        組織に“強さとしなやかさ”を。
                    </p>
                </div>
            </div>
        </div>
    </section>
}

export default AboutMeSection;
