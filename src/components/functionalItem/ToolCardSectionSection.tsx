import {JSX, useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from "../Modal";
import EmployeeProfileCard from "./demo/EmployeeProfileCard";
import WillCanMustSheet from "./demo/WillCanMustSheet";
import OneOnOnePrepSheet from "./demo/OneOnOnePrepSheet";

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
            {/* 機能の説明 */}
            <div className="max-w-2xl mx-auto text-sm text-gray-700 leading-relaxed space-y-4 text-left pb-4">
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
                        <li>スキルの羅列ではなく、<strong>「今の現場で得られている楽しさ vs 理想の追求」</strong>の両立を視覚化。</li>
                        <li>「待遇が1だけど、構成員との関係性が強い」→ 無理な配置転換よりも、今の信頼関係を活かした提案へ。</li>
                        <li>戦略的成長とは、“ギャップを埋めること”ではなく、<strong>“構造的な納得感”</strong>を生むこと。</li>
                    </ul>
                </div>
            </div>
            <EmployeeProfileCard/>
        </div>,
    },
    {
        title: '洞察を引き出す『Will・Can・Must』',
        desc: '強み・志向・現場ニーズを言語化し、自身の成長のための分析ツール、営業の提案材料としても活用される。\n' + '言語化できない暗黙知も、直感的に伝えられるのが特長。',
        modalContent:
            <div>
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
                            <li>円をドラッグすることで<strong>「なんとなくこの辺」</strong>という直感的な配置が可能。</li>
                            <li>
                                重なり具合で傾向が可視化される：
                                <ul className="list-disc list-inside ml-5 mt-1 space-y-1 text-gray-600">
                                    <li><strong>コツコツ型</strong>：Can × Must</li>
                                    <li><strong>奔放型</strong>：Will × Can</li>
                                    <li><strong>夢追い型</strong>：Will × Must</li>
                                </ul>
                            </li>
                            <li>配置後に<strong>本人メモ</strong>を入力し、非言語感覚を言語化して補足。</li>
                            <li><strong>フィードバック欄</strong>で、現場・営業・自社の視点を可視化。</li>
                            <li><strong>自己評価と他者評価のズレ</strong>が見えることで、対話が深まる。</li>
                        </ul>
                    </div>
                </div>
                <WillCanMustSheet/>,
            </div>
    },
    {
        title: '「言っても無駄」をなくす『1on1準備シート』',
        desc: '話題の目的を明確にして、1on1を“話しやすく、前に進む”場にするためのツール。\n'+
            '自分の思考を可視化することで、主任からの具体的なアドバイスやサポートを引き出す。',
        modalContent:
            <div>
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
                <OneOnOnePrepSheet/>,
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
    {
        title: '📝 社内ブログ',
        desc: '成功体験や価値観を共有し、“文化”として人材が育つ空気を形成。',
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
