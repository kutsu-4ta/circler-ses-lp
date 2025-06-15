import {JSX, useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
        title: '🧠 カオナビ',
        desc: 'コンピテンシー評価やエニアグラムなどを通じて、組織横断で人材を可視化。',
        modalContent: <div/>,
    },
    {
        title: '📈 Salesforce',
        desc: '社員の強みを提案文脈へ翻訳し、単価や満足度に繋げるCRM連携基盤。',
        modalContent: <div/>,
    },
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
