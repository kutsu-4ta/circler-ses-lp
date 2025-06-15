import {JSX, useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Modal from "../Modal";
import EmployeeProfileCard from "./demo/EmployeeProfileCard";
import WillCanMustSheet from "./demo/WillCanMustSheet";
import OneOnOnePrepSheet from "./demo/OneOnOnePrepSheet";
import InnerBlog from "./demo/InnerBlog";

type Tool = {
    title: string;
    desc: string;
    modalContent: JSX;
};

const tools: Tool[] = [
    {
        title: '"今"を見る『社員カルテ』',
        desc: '成長の押し付けではなく、本人の納得感を重視した成長設計を行う。\n' +
            '帰属意識の4指標から成長と納得感を総合的に分析する。',
        modalContent: <div>
            {/* 説明パート */}
            <div className="px-6 py-6 bg-white border-t text-left text-sm text-gray-700 space-y-4">
                <div>
                    <h3 className="text-md font-semibold text-indigo-700 mb-1">🔍 機能の目的</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>帰属意識の状態（例：待遇に対する不満）と照らし合わせて、<strong>“納得”できるかを判断</strong>できる。</li>
                        <li>現在のスキル体験をもとに、<strong>成長の方向性を自己決定</strong>できるようにする。</li>
                        <li>ギャップを「埋めるためのToDo」ではなく、<strong>「価値の再定義」</strong>として扱う。</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold text-indigo-700 mb-1">💡 UIの意図する伝え方</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>スキルの羅列</strong>ではなく、「今の現場で得られている楽しさ vs 理想の追求」の両立を視覚化。</li>
                        <li><strong>待遇と関係性のバランス</strong>から、配置転換や提案の打ち手を検討。</li>
                        <li>戦略的成長とは“ギャップを埋めること”ではなく、<strong>構造的な納得感</strong>を生むこと。</li>
                    </ul>
                </div>
            </div>

            {/* デモUI切り替えラベル */}
            <div className="border-t mt-8 pt-6 pb-2 px-6 bg-gray-50 text-sm text-gray-600">
                <p className="font-semibold text-indigo-700 mb-2">🧪 デモ画面（UIイメージ）</p>
                <p>以下はデモ用のUI再現です。実際の入力や送信はできません。</p>
            </div>

            {/* デモUI */}
            <EmployeeProfileCard />
        </div>,
    },
    {
        title: '洞察を引き出す『Will・Can・Must』',
        desc: '強み・志向・現場ニーズを言語化し、自身の成長のための分析ツール、営業の提案材料としても活用される。\n' + '言語化できない暗黙知も、直感的に伝えられるのが特長。',
        modalContent:<div>
            {/* 説明パート */}
            <div className="px-6 py-6 bg-white border-t text-left text-sm text-gray-700 space-y-4">
                <div>
                    <h3 className="text-md font-semibold text-indigo-700 mb-1">🔍 機能の目的</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>非言語の実感</strong>を可視化し、キャリア支援や1on1の土台にする。</li>
                        <li><strong>本人の内的動機と、現場・組織の期待を接続</strong>する対話の起点をつくる。</li>
                        <li><strong>Will・Can・Mustのズレ</strong>から、異動・単価交渉・成長の方向性を探る。</li>
                        <li><strong>主観メモとフィードバック</strong>の両面から、自己認識と他者評価のギャップに気づく。</li>
                        <li><strong>帰属意識などの定量データ</strong>とも照合し、納得感あるキャリア支援へつなげる。</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-md font-semibold text-indigo-700 mb-1">💡 UIの意図する伝え方</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>円をドラッグ</strong>して「なんとなくこの辺」という直感的配置が可能。</li>
                        <li>
                            重なり具合から傾向を可視化：
                            <ul className="list-disc list-inside ml-5 mt-1 space-y-1 text-gray-600">
                                <li><strong>コツコツ型</strong>：Can × Must</li>
                                <li><strong>奔放型</strong>：Will × Can</li>
                                <li><strong>夢追い型</strong>：Will × Must</li>
                            </ul>
                        </li>
                        <li>本人メモやフィードバック欄で、<strong>非言語の感覚を言語化・補足</strong>できる。</li>
                        <li><strong>自己評価と他者評価のズレ</strong>を見える化し、対話を促進。</li>
                    </ul>
                </div>
            </div>

            {/* デモUI切り替えラベル */}
            <div className="border-t mt-8 pt-6 pb-2 px-6 bg-gray-50 text-sm text-gray-600">
                <p className="font-semibold text-indigo-700 mb-2">🧪 デモ画面（UIイメージ）</p>
                <p>以下はプロトタイプUIです。実際の保存・操作はできません。</p>
            </div>

            {/* デモUI */}
            <WillCanMustSheet />
        </div>
    },
    {
        title: '「言っても無駄」をなくす『1on1準備シート』',
        desc: '話題の目的を明確にして、1on1を“話しやすく、前に進む”場にするためのツール。\n' +
            '自分の思考を可視化することで、主任からの具体的なアドバイスやサポートを引き出す。',
        modalContent:
            <div>
                {/* 説明パート */}
                <div className="px-6 py-6 bg-white border-t text-left text-sm text-gray-700 space-y-4">
                    <div>
                        <h3 className="text-md font-semibold text-indigo-700 mb-1">🔍 機能の目的</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>話すべきことを整理</strong>し、1on1を意味ある対話の時間にする。</li>
                            <li><strong>目的と論点を明確化</strong>することで、短時間でも深い合意形成を促す。</li>
                            <li><strong>「何を話すか迷う」</strong>を防ぎ、キャリアや評価の話もスムーズに導入。</li>
                            <li><strong>業務連絡と内省の切り分け</strong>によって、時間配分と対話の質を最適化。</li>
                            <li><strong>話題の偏りや継続性</strong>を見直す材料にもなり、中長期的な支援に繋がる。</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-md font-semibold text-indigo-700 mb-1">💡 UIの意図する伝え方</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>目的（伝える・聞き出す・合意をとる）</strong>を明記することで、対話の意図を事前に共有。</li>
                            <li><strong>議題のタイトルと詳細</strong>を分けることで、論点の整理と背景理解がしやすくなる。</li>
                            <li>議題は複数登録可能で、<strong>業務連絡からキャリア相談まで柔軟に扱える。</strong></li>
                            <li><strong>雑談や自由メモ欄</strong>を設け、日常的な小さな気づきや共有にも対応。</li>
                            <li>トグルで<strong>メンバー／主任の立場を切り替え</strong>、双方にとっての準備を可視化。</li>
                        </ul>
                    </div>
                </div>

                {/* デモUI切り替えラベル */}
                <div className="border-t mt-8 pt-6 pb-2 px-6 bg-gray-50 text-sm text-gray-600">
                    <p className="font-semibold text-indigo-700 mb-2">🧪 デモ画面（UIイメージ）</p>
                    <p>以下はUIのデモです。実際の保存・送信機能は無効となっています。</p>
                </div>

                {/* デモUI */}
                <OneOnOnePrepSheet />
            </div>
    },
    {
        title: '社内ブログ',
        desc: '成功体験や価値観を共有し、“文化”として人材が育つ空気を形成。',
        modalContent:
            <div>
                {/* メタ的な説明 */}
                <div className="px-6 py-6 bg-white border-t text-left text-sm text-gray-700 space-y-4">
                    <div>
                        <h3 className="text-md font-semibold text-indigo-700 mb-1">🔍 機能の目的</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>個人の思考・試行を言語化</strong>することで、学びや気づきを「文化」に昇華する。</li>
                            <li><strong>価値観・成功体験・苦労話</strong>を共有し、部門や職種を超えた共感を育む。</li>
                            <li><strong>趣味や雑記も発信OK</strong>にすることで、「その人らしさ」が滲み出る安心な場を提供。</li>
                            <li><strong>組織全体の知の総量</strong>を底上げし、新たなコラボレーションや学習のきっかけを生む。</li>
                            <li><strong>育成モデルや戦略の背景</strong>を、社員目線で「咀嚼・共有」することで、形式的な理解に留まらない腹落ちを促す。</li>
                            <li><strong>「自己肯定感と発信」の循環</strong>を作ることで、社員の自律的な成長を支援。</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-md font-semibold text-indigo-700 mb-1">💡 UIの意図する伝え方</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>カテゴリ（キャリア・技術・雑記など）</strong>でセクションを分け、興味に応じた読みやすさを演出。</li>
                            <li><strong>カード形式＋横スクロール</strong>で、note風の軽やかな閲覧体験を再現。</li>
                            <li><strong>タグによる絞り込み</strong>で、読みたいテーマに素早くアクセス可能。</li>
                            <li>クリックで<strong>AIによる要約モーダル</strong>が開き、記事の雰囲気や要点を事前に把握できる。</li>
                            <li><strong>「本文を読む」ボタンはデモ用</strong>であり、実際には遷移せず「社内投稿の試し読み」を想定した構成。</li>
                            <li>役職や所属を問わず、<strong>育成・戦略に関する自分なりの解釈や経験談</strong>を共有する文化を醸成。</li>
                        </ul>
                    </div>
                </div>

                {/* デモUI切り替えラベル */}
                <div className="border-t mt-8 pt-6 pb-2 px-6 bg-gray-50 text-sm text-gray-600">
                    <p className="font-semibold text-indigo-700 mb-2">🧪 デモ画面（UIイメージ）</p>
                    <p>以下は実際の挙動を再現したデモです。投稿内容はフィクションで、リンクや遷移は無効です。</p>
                </div>

                {/* デモUI */}
                <InnerBlog />
            </div>
    },
    {
        title: 'カオナビ',
        desc: 'コンピテンシー評価やエニアグラムなどを通じて、組織横断で人材を可視化。\nカルテやキャリア支援の“精度”を高める情報基盤となる。',
        modalContent:
            <div>
                {/* メタ的な説明 */}
                <div className="px-6 py-6 bg-white border-t text-left text-sm text-gray-700 space-y-4">
                    <p className="text-xl font-bold text-gray-900">カオナビの役割と戦略的位置づけ</p>

                    <p>
                        この戦略における <span className="font-semibold text-indigo-700">カオナビの目的</span> は、主に以下の2点に集約されます。
                    </p>

                    <ul className="list-disc list-inside pl-4 space-y-1">
                        <li><span className="font-semibold">社員情報の収集（志向・スキル・価値観）</span></li>
                        <li><span className="font-semibold">社員情報の管理（可視化・構造化）</span></li>
                    </ul>

                    <p>
                        カオナビは「社員情報の見える化」に特化したツールですが、
                        その運用はあくまで <span className="font-semibold text-indigo-700">人材戦略・アサイン戦略</span> 全体の一部です。
                    </p>

                    <p>
                        人材戦略において特に重要なのが、
                        <span className="font-semibold">「個の理解（社員を知る）」</span>と
                        <span className="font-semibold">「適材適所（最適に活かす）」</span>です。
                    </p>

                    <p>
                        カオナビは、これらの実現に向けて必要な情報を支えるデータ基盤として機能します。<br/>
                        つまり、<span className="font-semibold">個の理解のための「収集」</span>と、
                        <span className="font-semibold">適材適所のための「管理」</span>という観点で、
                        カオナビを運用する意義が明確になります。
                    </p>

                    <p className="text-xl font-bold text-gray-900 pt-10">「who」と「what」の社内可視化</p>

                    <p>
                        この構造が正しく機能することで、次の2軸が戦略的に明確になります。
                    </p>

                    <ul className="list-disc list-inside pl-4 space-y-1">
                        <li><span className="font-semibold text-indigo-700">who：</span>その社員がどんな志向やWillを持っているか</li>
                        <li><span className="font-semibold text-indigo-700">what：</span>どんな場面で最大のパフォーマンスを発揮するか</li>
                    </ul>

                    <p>
                        この2軸が定義されることで、<span className="font-semibold">「誰を」「どこで活かすか」</span>を見極め、
                        より適切なアサインが可能になります。
                    </p>

                    <p className="text-xl font-bold text-gray-900 pt-10">「適切なアサイン」の定義と構築</p>

                    <p>
                        最適なアサインを実現するには、
                        <span className="font-semibold text-indigo-700">社内外の情報サイクルを両輪で回す</span>ことが不可欠です。
                    </p>

                    <ul className="list-disc list-inside pl-4 space-y-1">
                        <li>
                            <span className="font-semibold">社内：</span>
                            カオナビを活用し、社員一人ひとりの志向・経験・得意領域などをポートフォリオ化。
                            Will・Can・Mustや社員カルテ、パルスサーベイ、1on1記録といった文化資本を可視化・蓄積。
                        </li>
                        <li>
                            <span className="font-semibold">社外：</span>
                            Salesforceによって顧客側のプロジェクト要件・期待値を構造化し、必要なスキルやマインドを明確化。
                        </li>
                    </ul>

                    <p className="text-xl font-bold text-gray-900 pt-10">カオナビは“内製化装置”である</p>

                    <p>
                        社内外の情報が接続されることで、
                        <span className="font-semibold text-indigo-700">人的資本とプロジェクトニーズの最適配置</span>が実現されます。
                    </p>

                    <p>
                        この精度を高めるためには、
                        <span className="font-semibold">カオナビを軸にしたPDCAサイクル</span>を継続的に回すことが求められます。<br/>
                        カオナビは単なる人材管理ツールではなく、
                        <span className="font-semibold text-indigo-700">文化資本をアサイン戦略へ翻訳する「内製化装置」</span>として位置づけられます。
                    </p>

                    <p className="text-xl font-bold text-gray-900 pt-10">まとめ</p>

                    <ul className="list-disc list-inside pl-4 space-y-1">
                        <li>
                            カオナビは「社員名簿」ではなく、<span className="font-semibold">文化資本を構造化する装置</span>である
                        </li>
                        <li>
                            社員のWill・成長ログ・適性を、アサインや育成戦略に活用するための<span className="font-semibold">翻訳基盤</span>である
                        </li>
                        <li>
                            <span className="font-semibold">「誰を、どこに、なぜ活かすか」</span>を再現可能にする仕組みである
                        </li>
                    </ul>
                </div>

                {/* カオナビ活用事例へのリンク案内 */}
                <div className="border-t mt-8 pt-6 pb-4 px-6 bg-gray-50 text-sm text-gray-600 space-y-2">
                    <p className="font-semibold text-indigo-700 mb-1">カオナビの活用事例へ</p>
                    <p>
                        帰属意識の変化を可視化するパルスサーベイや、戦略的なアンケート設計のノウハウなど、
                        実際の活用方法を紹介しています。
                    </p>
                    <a
                        href="https://www.kaonavi.jp/dictionary/jugyoinmanzokudo_torikumi/" // ← ここに実際のリンクを設定
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-1 text-indigo-600 hover:underline"
                    >
                        ▶ 活用事例を読む
                    </a>
                </div>
            </div>
    },
    {
        title: 'Salesforce',
        desc: '社員の強みを提案文脈へ翻訳し、単価や満足度に繋げるCRM連携基盤。',
        modalContent: (
            <div>
                {/* メタ的な説明 */}
                <div className="px-6 py-6 bg-white border-t text-left text-sm text-gray-700 space-y-4">
                    <p className="text-xl font-bold text-gray-900">Salesforceの役割と戦略的位置づけ</p>
                    <p>
                        この戦略における <span className="font-semibold text-indigo-700">Salesforceの目的</span> は、
                        主に以下の2点に集約されます。
                    </p>

                    <ul className="list-disc list-inside pl-4 space-y-1">
                        <li><span className="font-semibold">顧客情報の収集</span></li>
                        <li><span className="font-semibold">顧客情報の管理</span></li>
                    </ul>

                    <p>
                        Salesforceは「顧客情報の収集・管理」に特化したツールですが、
                        その運用はあくまで <span className="font-semibold text-indigo-700">マーケティング戦略</span> 全体の一部です。
                    </p>

                    <p>
                        マーケティング戦略には、さまざまな分析や施策がありますが、<br/>
                        なかでも特に重要なのが、
                        <span className="font-semibold">「ターゲティング（誰を狙うか）」</span>と
                        <span className="font-semibold">「顧客理解（どんな価値を求めているか）」</span>です。
                    </p>

                    <p>
                        Salesforceは、これらの判断材料となる情報を支えるデータ基盤として活用されます。<br/>
                        つまり、<span className="font-semibold">ターゲティングのための「収集」</span>と、
                        <span className="font-semibold">顧客理解のための「管理」</span>という観点で、
                        Salesforceを運用することが意義になります。
                    </p>

                    <p className="text-xl font-bold text-gray-900 pt-10">「who」と「what」の明確化</p>

                    <p>
                        この構造が正しく機能することで、次の2軸が戦略的に明確になります。
                    </p>

                    <ul className="list-disc list-inside pl-4 space-y-1">
                        <li><span className="font-semibold text-indigo-700">who：</span>その顧客の属性</li>
                        <li><span className="font-semibold text-indigo-700">what：</span>その顧客が自社に求めている期待値</li>
                    </ul>

                    <p>
                        この2軸が定義されることで、<span className="font-semibold">「誰に」「どんな価値を」</span>を見極め、
                        より最適なSEの提案が可能になります。
                    </p>

                    <p className="text-xl font-bold text-gray-900 pt-10">「最適なSE」の定義と構築</p>

                    <p>
                        適切な提案には、<span className="font-semibold text-indigo-700">社内外の情報サイクルを両輪で回す</span>ことが重要です。
                    </p>

                    <ul className="list-disc list-inside pl-4 space-y-1">
                        <li>
                            <span className="font-semibold">社内：</span>
                            社員のWillを軸にしたポートフォリオ管理。Will・Can・Mustや社員カルテなどの文化資本が活用されます。
                        </li>
                        <li>
                            <span className="font-semibold">社外：</span>
                            Salesforceを通じて顧客データを定量化し、セグメントごとのニーズを明確化します。
                        </li>
                    </ul>

                    <p className="text-xl font-bold text-gray-900 pt-10">Salesforceは“学習装置”である</p>

                    <p>
                        社内外の情報が接続されることで、
                        <span className="font-semibold text-indigo-700">統計的な傾向から自社の最適解</span>が導き出されます。
                    </p>

                    <p>
                        この精度を高めるためには、
                        <span className="font-semibold">Salesforceを軸にしたPDCAサイクル</span>を継続的に回す必要があります。<br/>
                        サーキュラーSESにおけるSalesforceはもはや単なるCRMではなく、
                        <span className="font-semibold text-indigo-700">文化資本を顧客価値へ変換する「価値翻訳装置」</span>に位置します。
                    </p>

                    <p className="text-xl font-bold text-gray-900 pt-10">まとめ</p>

                    <ul className="list-disc list-inside pl-4 space-y-1">
                        <li>
                            Salesforceは「営業支援ツール」ではなく、<span className="font-semibold">社内文化を翻訳する装置</span>である
                        </li>
                        <li>
                            社員のWillや経験などの文化資本と、顧客データを結びつける <span className="font-semibold">接続基盤</span> である
                        </li>
                        <li>
                            <span className="font-semibold">「誰に、どんな価値を、誰が届けるか」</span>を明文化・再現可能にする仕組みである
                        </li>
                    </ul>
                </div>

                {/* デモUI切り替えラベル（今回は未実装のため記載のみ） */}
                <div className="border-t mt-8 pt-6 pb-2 px-6 bg-gray-50 text-sm text-gray-600 leading-relaxed">
                    <p className="font-semibold text-indigo-700 mb-2">
                        Salesforce運用の工夫は活用ガイドに記載しております
                    </p>
                    <p>
                        個別顧客への提案戦略と社員プロファイルの接続方法、営業活用のTIPSなどは
                        活用ガイドをご参照ください。
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                    <Link
                        to="/toolkits"
                        className="border-2 border-indigo-600 text-indigo-700 text-lg font-semibold px-6 py-3 rounded-full hover:bg-white transition"
                    >
                        活用ガイドを読む
                    </Link>
                </div>
            </div>
        ),
    }
];

const ToolCardSectionSection: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeModalContent, setActiveModalContent] = useState<React.ReactNode>(null);

    const openModalWithContent = (content: React.ReactNode) => {
        setActiveModalContent(content);
        setModalOpen(true);
    };

    useEffect(() => {
        AOS.init({duration: 600, once: true});
    }, []);

    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                    この戦略には手段がある。<br/>
                    この手段には目的がある。
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-12">
                    戦略の根幹を支えるのは、「使える仕組み」です。<br/>
                    社員の強みを可視化し、発信し、組織に還元していくプロセスを支えるために、<br/>
                    私たちは現場レベルで活用できるツールをあらかじめ設計しています。
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                    {tools.map((tool, i) => (
                        <div
                            key={i}
                            className="bg-indigo-50 rounded-xl shadow-sm p-6 border border-indigo-100"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >

                            <div className="h-full flex flex-col justify-between">
                                {/* 上部のタイトル・説明 */}
                                <div className={"pt-6 pb-6"}>
                                    <h3 className="text-xl font-semibold text-indigo-700 mb-2">{tool.title}</h3>
                                    <p className="text-gray-700">{tool.desc}</p>
                                </div>
                                {/* 下部のボタン */}
                                <button onClick={() => openModalWithContent(tool.modalContent)}
                                        className="mt-auto bg-white-100 hover:bg-gray-500 text-black-700 font-semibold py-2 px-4 rounded-full shadow-sm transition-all duration-300">
                                    💡 気になる！
                                </button>
                            </div>
                        </div>
                    ))}
                    <p>and more...</p>
                </div>

                {/* モーダル表示 */}
                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                    {activeModalContent}
                </Modal>
            </div>
        </section>
    );
};

export default ToolCardSectionSection;
