import {useEffect, useRef, useState} from 'react';
import {html} from "framer-motion/m";

type NodeData = {
    id: number;
    label: string;
    top: number;
    left: number;
    description: html;
};

const nodes: NodeData[] = [
    {
        id: 1,
        label: '顧客へのサービス品質',
        top: 10,
        left: 80,
        description: `顧客接点における対応品質の一貫性と、フィードバックループの整備が鍵。<br/><br/>
<b>KGI:</b> 顧客クレーム率の低下、CSATスコアの改善<br/>
<b>KPI:</b> 品質チェック率、フィードバック反映数<br/>
<b>施策:</b> Salesforceによる情報連携、業務プロセスの標準化、顧客対応フローの明文化<br/>
<b>注意点:</b> 顧客の声を「収集」するだけで終わらせない。仕組みによる即時反映が肝。
`
    },
    {
        id: 2,
        label: '顧客満足度向上',
        top: 10,
        left: 60,
        description: `
NPS・CSATを指標とした体験設計。<br/><br/>
<b>KGI:</b> NPSの年次改善、契約継続率<br/>
<b>KPI:</b> 満足度調査の回答率、改善施策の実行数<br/>
<b>施策:</b> 顧客ジャーニーの可視化、ペルソナ設計、FAQ整備など<br/>
<b>注意点:</b> スコア至上主義にならず「感情」と「体験」の定性要素も重視すること。
`
    },
    {
        id: 3,
        label: '顧客ロイヤルティ',
        top: 10,
        left: 40,
        description: `
「再購入」や「紹介」に繋がるファンづくり。<br/><br/>
<b>KGI:</b> リピート率、紹介数、ロイヤル顧客数<br/>
<b>KPI:</b> 顧客交流イベント数、アンバサダー化施策数<br/>
<b>施策:</b> 成功事例の共有、顧客登壇の支援、コミュニティ構築<br/>
<b>注意点:</b> ロイヤルティは短期成果で測れない。定期的な関係性構築を優先。
`
    },
    {
        id: 4,
        label: '企業の成長',
        top: 5,
        left: 20,
        description: `
組織としての成長を、個人と仕組みの成長に接続。<br/><br/>
<b>KGI:</b> 売上成長率、顧客単価、拠点・事業の拡大数<br/>
<b>KPI:</b> 成長指標ダッシュボードの運用率、社内提案数<br/>
<b>施策:</b> OKR設計、SEによる提案制度、<a href="#glossary-自己効力感">自己効力感</a>の文化定着<br/>
<b>注意点:</b> 数字で評価する文化が、人を潰さないように<a href="#glossary-自己効力感">“自己効力感”</a>を軸にする。
`
    },
    {
        id: 5,
        label: '収益の向上',
        top: 15,
        left: 20,
        description: `
LTV向上とCAC削減のバランス最適化が収益性の鍵。<br/><br/>
<b>KGI:</b> 顧客LTV、粗利率、CACの改善<br/>
<b>KPI:</b> 提案単価の推移、失注率の低下<br/>
<b>施策:</b> 社内発信によるSEの価値可視化、営業との連携強化（Salesforce）<br/>
<b>注意点:</b> 一時的な単価アップにとらわれず、文化として“継続可能な利益構造”を育てる。
`
    },
    {
        id: 6,
        label: '自社内のサービス品質',
        top: 65,
        left: 20,
        description: `
社内業務の品質を安定させる仕組み化と知見共有。<br/><br/>
<b>KGI:</b> 内部品質評価スコア、社内トラブル件数の減少<br/>
<b>KPI:</b> ナレッジ共有件数、テンプレート利用率<br/>
<b>施策:</b> ブログ・社内プレゼン・標準化ドキュメントの蓄積<br/>
<b>注意点:</b> 属人化を避け、仕組みで誰でも一定品質を担保できるようにする。
`
    },
    {
        id: 7,
        label: '社員満足度向上',
        top: 65,
        left: 40,
        description: `
社員のやりがいと報酬の接続。<a href="#glossary-内発的動機づけ">内発的動機</a>の設計がカギ。<br/><br/>
<b>KGI:</b> エンゲージメントスコア、離職率の改善<br/>
<b>KPI:</b> 1on1実施率、自己評価満足度、キャリア面談数<br/>
<b>施策:</b> キャリア支援制度、定期1on1、社内発信文化の育成<br/>
<b>注意点:</b> 表面的な制度より“意味のある対話”が幸福度を上げる。<br/>
（例：<a href="#glossary-キャリア安全性">キャリア安全性</a> の保障など）
`
    },
    {
        id: 8,
        label: '社員の定着率',
        top: 60,
        left: 60,
        description: `
安心して挑戦できる“居場所感”の設計。<br/><br/>
<b>KGI:</b> 離職率の改善、定着年数の中央値向上<br/>
<b>KPI:</b> オンボーディング満足度、サーベイ実施率<br/>
<b>施策:</b> オンボーディングキット、<a href="#glossary-心理的安全性">心理的安全性</a>を高めるチーム運営<br/>
<b>注意点:</b> 早期離職の防止は、最初の3ヶ月の“ケアと期待値”で決まる。<br/>
→ <a href="#glossary-帰属意識">帰属意識</a>の醸成が鍵。
`
    },
    {
        id: 9,
        label: '社員のスキル',
        top: 70,
        left: 60,
        description: `
        “成長実感”があるスキル獲得支援と評価設計。<br/><br/>
        <b>KGI:</b> スキルランク分布の上昇、プロジェクトマッチ率<br/>
        <b>KPI:</b> スキルマップの記入率、育成計画の完遂率<br/>
        <b>施策:</b> スキルマップ、育成ロードマップ、OJT、1on1 + OKR連動<br/>
        <b>注意点:</b> 評価や報酬と連動させ、努力が報われる実感を作ることで、<a href="#glossary-内的動機づけ">内的動機づけ</a>へとシフトさせることが大事。
        `
    },
    {
        id: 10,
        label: '社内資産',
        top: 65,
        left: 80,
        description: `
技術・文化・言語化された知恵を“社内資産”として蓄積。<br/><br/>
<b>KGI:</b> 社内資産の活用件数、他部署展開率<br/>
<b>KPI:</b> ブログ投稿数、再利用テンプレ数<br/>
<b>施策:</b> 社内ドキュメントの標準化、ナレッジシェア会、表彰制度による文化醸成<br/>
<b>注意点:</b> “投稿者だけが得をする”ではなく、他の社員が<a href="#glossary-内的動機づけ">自分でもやれそう感</a>を感じる雰囲気を醸成する設計が重要。
`
    }
];

const arrows: [number, number, string?][] = [
    [1, 2], [2, 3], [3, 4], [4, 5],
    [6, 7], [7, 8], [7, 9], [8, 10], [9, 10],
    [10, 1], [5, 6],
    [3, 5], [3, 1, 'loop'],
    [10, 6, 'loop']
];

export default function ProcessFlowChart() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [positions, setPositions] = useState<Record<number, { x: number; y: number }>>({});
    const [hoveredNodeId, setHoveredNodeId] = useState<number | null>(null);
    const [hoverZone, setHoverZone] = useState<"internal" | "external" | "circular" | null>(null);
    const [isHoveringZone, setIsHoveringZone] = useState(false);
    const [isHoveringNode, setIsHoveringNode] = useState(false);
    const leaveTimer = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (zone: typeof hoverZone) => {
        if (hoverZone !== zone) {
            setHoveredNodeId(null); // ゾーンが切り替わったらノード選択リセット
        }
        setHoverZone(zone);
        setIsHoveringZone(true);
    };

    const handleMouseLeave = () => {
        setIsHoveringZone(false);
        // ノード・ゾーンともに維持
    };

    const handleNodeEnter = (nodeId: number) => {
        if (hoveredNodeId !== nodeId) {
            setHoveredNodeId(nodeId);
        }
    };

    const handleNodeLeave = () => {
        // ホバー解除してもすぐには消さない方針なら処理を入れる
    };

    const isNodeInActiveZone = (node: NodeData, zone: typeof hoverZone | null) => {
        if (!zone) return false;
        if (zone === "external") return node.id >= 1 && node.id <= 5;
        if (zone === "internal") return node.id >= 6 && node.id <= 10;
        if (zone === "circular") return [10, 1, 5, 6].includes(node.id);
        return false;
    };

    useEffect(() => {
        const updatePositions = () => {
            if (!containerRef.current) return;
            const newPositions: Record<number, { x: number; y: number }> = {};
            nodes.forEach((node) => {
                const el = document.getElementById(`node-${node.id}`);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const containerRect = containerRef.current!.getBoundingClientRect();
                    newPositions[node.id] = {
                        x: rect.left - containerRect.left + rect.width / 2,
                        y: rect.top - containerRect.top + rect.height / 2
                    };
                }
            });
            setPositions(newPositions);
        };

        updatePositions();
        window.addEventListener('resize', updatePositions);
        return () => window.removeEventListener('resize', updatePositions);
    }, []);

    const getStrokeColor = (fromId: number, toId: number) => {
        // 赤にする特定のペア
        if (
            (fromId === 10 && toId === 1) ||
            (fromId === 4 && toId === 5) ||
            (fromId === 5 && toId === 6)
        ) {
            return '#ef4444'; // red-500
        }
        return fromId <= 5 ? '#3b82f6' : '#22c55e'; // 外部=青, 内部=緑
    };

    return (
        <div
            ref={containerRef}
            onMouseLeave={() => {
                setHoverZone(null);
            }}
            className="relative bg-white border rounded-xl p-6 max-w-6xl h-[600px] mx-auto"
        >
            {/* 矢印 */}
            <svg className="absolute top-3 left-0 w-full h-full pointer-events-none z-0">
                <defs>
                    <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"
                            fill="#a3a3a3">
                        <polygon points="0 0, 6 3, 0 6"/>
                    </marker>
                    <style>
                        {`
        .flow-line {
          stroke: #a3a3a3; /* gray-400 に近い */
          stroke-width: 4;
          stroke-dasharray: 6;
          stroke-dashoffset: 0;
          animation: dash 2s linear infinite;
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -12;
          }
        }
      `}
                    </style>
                </defs>

                {/* 線 */}
                {arrows.map((arrow, idx) => {
                    const [fromId, toId, type] = arrow;
                    const from = positions[fromId];
                    const to = positions[toId];
                    if (!from || !to) return null;

                    const strokeColor = getStrokeColor(fromId, toId);

                    if (type === 'loop') {
                        const controlY = Math.max(from.y, to.y) + 100;
                        return (
                            <g key={idx}>
                                <path
                                    id={`path-${idx}`}
                                    fill="none"
                                    d={`M ${from.x} ${from.y} C ${from.x} ${controlY}, ${to.x} ${controlY}, ${to.x} ${to.y}`}
                                    stroke={strokeColor}
                                    strokeWidth={4}
                                    strokeDasharray="6"
                                    strokeDashoffset="0"
                                    style={{animation: 'dash 2s linear infinite'}}
                                />
                                <circle r="8" fill="white" stroke={strokeColor}>
                                    <animateMotion dur="5s" repeatCount="indefinite">
                                        <mpath xlinkHref={`#path-${idx}`}/>
                                    </animateMotion>
                                </circle>
                            </g>
                        );
                    }

                    return (
                        <line
                            id={`path-${idx}`}
                            fill="none"
                            key={idx}
                            x1={from.x}
                            y1={from.y}
                            x2={to.x}
                            y2={to.y}
                            stroke={strokeColor}
                            strokeWidth={4}
                            strokeDasharray="6"
                            strokeDashoffset="0"
                            style={{animation: 'dash 2s linear infinite'}}
                        />
                    );
                })}
            </svg>

            {/* エリアごとのホバー検出レイヤー（検出のみに使う） */}
            <div
                className="absolute top-0 left-0 w-full h-[30%] z-10 pointer-events-auto"
                onMouseEnter={() => handleMouseEnter("external")}
                onMouseLeave={handleMouseLeave}
            />
            <div
                className="absolute top-[60%] left-0 w-full h-[40%] z-10 pointer-events-auto"
                onMouseEnter={() => handleMouseEnter("internal")}
                onMouseLeave={handleMouseLeave}
            />

            {/* 全面オーバーレイ（背景だけクリック不可） */}
            {hoverZone && (
                <div className="absolute inset-0 bg-black bg-opacity-60 z-40 pointer-events-none" />
            )}

            {/* 説明ボックス本体（クリック可能にする） */}
            {hoverZone && (
                <>
                    <div
                        className={`
        absolute
        ${hoverZone === "external" ? "top-[45%]" : "top-[35%]"}
        left-1/2 transform -translate-x-1/2 -translate-y-1/2
        z-50
        // pointer-events-none は削除
      `}
                    >
                        <div className={`
        bg-slate-800/90 border
        ${hoverZone === "external" ? "border-blue-500" : "border-emerald-500"}
        rounded-lg shadow-md
        px-6 py-4 w-[900px] h-[220px]
        relative
        pointer-events-auto // 必要に応じて追加
      `}>
                            {/* タイトル */}
                            <div className="absolute top-4 left-4 text-white text-lg font-semibold">
                                {hoveredNodeId
                                    ? nodes.find(n => n.id === hoveredNodeId)?.label
                                    : "項目を選択してください"}
                            </div>

                            {/* 本文（最大幅制限を外す） */}
                            <div className="mt-8 text-white text-left text-sm sm:text-base font-normal leading-relaxed overflow-auto">
                                {hoveredNodeId ? (
                                    <div
                                        className="text-left leading-relaxed text-white text-sm sm:text-base font-normal description-box"
                                        dangerouslySetInnerHTML={{
                                            __html: nodes.find(n => n.id === hoveredNodeId)?.description || ""
                                        }}
                                    />
                                ) : (
                                    <p className="opacity-50">ホバーして詳細を表示</p>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* ノード表示 */}
            {nodes.map((node) => {
                const isActive = isNodeInActiveZone(node, hoverZone);
                const isHovered = hoveredNodeId === node.id;
                const color = node.id <= 5 ? 'bg-blue-500' : 'bg-green-500';

                return (
                    <div
                        key={node.id}
                        id={`node-${node.id}`}
                        className={`absolute ${isActive ? 'z-50' : 'z-30'}`}
                        style={{
                            top: `${node.top}%`,
                            left: `${node.left}%`,
                            transform: 'translate(-50%, -50%)',
                        }}
                        onMouseEnter={() => handleNodeEnter(node.id)}
                        onMouseLeave={handleNodeLeave}
                    >
                        <div
                            className="text-sm mt-1 text-center text-gray-700 whitespace-nowrap z-10 font-semibold bg-white px-2 py-1 rounded">
                            {node.label}
                        </div>

                        <div
                            className={`w-3 h-3 rounded-full mx-auto mb-1 transition-all duration-200 ${color} ${isHovered ? 'scale-150 ring-4 ring-white' : ''}`}
                            style={{zIndex: 100}}
                        />
                    </div>
                );
            })}
        </div>
    );
}
