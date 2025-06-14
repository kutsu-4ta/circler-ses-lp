import {JSX, useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from "../Modal";
import EmployeeProfileCard from "./demo/EmployeeProfileCard";
import WillCanMustSheet from "./demo/WillCanMustSheet";

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
        title: '🎯 Will・Can・Mustアクションシート',
        desc: '強み・志向・現場ニーズを言語化し、提案材料や評価軸として活用。',
        modalContent:
            <div>
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
                            <li>スキルの羅列ではなく、<strong>「今の現場で得られている楽しさ vs 理想の追求」</strong>の両立を視覚化。</li>
                            <li>「待遇が1だけど、構成員との関係性が強い」→ 無理な配置転換よりも、今の信頼関係を活かした提案へ。</li>
                            <li>戦略的成長とは、“ギャップを埋めること”ではなく、<strong>“構造的な納得感”</strong>を生むこと。</li>
                        </ul>
                    </div>
                </div>
                <WillCanMustSheet/>,
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
    {
        title: '🤝 1on1準備シート',
        desc: '対話の質と目的を高め、発信・評価・自己効力感を支援。',
        modalContent: <div/>,
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
