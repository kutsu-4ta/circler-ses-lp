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
        description: `対応の品質は、表層的なスキルだけではなく、<br/>
“自分ごと”として業務に取り組む姿勢によって支えられます。<br/><br/>
越境学習をベースに、自社で設定した成長シナリオに沿って実践に臨むことで、<br/>
フィードバックが蓄積され、現場での学びが社内資産へと還元される。<br/>
この構造が、一貫性ある品質を再現可能にします。`
    },
    {
        id: 2,
        label: '顧客満足度向上',
        top: 10,
        left: 60,
        description: `成長戦略に沿った実務を“キャリアの一部”として捉える文化により、<br/>
社員は誠実で継続的な姿勢で業務に臨みます。<br/><br/>
この姿勢は、サービス品質の向上だけでなく、<br/>
顧客への信頼の裏付けにもなり、満足度を支える土台となります。`
    },
    {
        id: 3,
        label: '顧客ロイヤルティ',
        top: 10,
        left: 40,
        description: `価値ある体験があってはじめて、「また頼みたい」と思われる関係が生まれます。<br/>
SE自身の成長と成果を語る文化が、顧客との共創と信頼を育てます。<br/>
        優良顧客は、自社に対して建設的なフィードバックを提供する存在にもなります。<br/>
        その声をマーケティング施策や育成戦略に反映することで、<br/>自社SEの増員や成長にもつながり、<b>顧客と企業が共に成長する共創関係</b>が実現します。`
    },
    {
        id: 4,
        label: '企業の成長',
        top: 5,
        left: 20,
        description: `事業の成長とは、個人の“実感ある成長”の連続体。<br/>
自社がSEの価値を定義し、提案・評価・報酬のループを回すことで、<br/>
育成と営業が連動したブランディングが実現します。<br/><br/>
これはSESだけでなく、ソリューション企業としての可能性を広げる基盤にもなります。`
    },
    {
        id: 5,
        label: '収益の向上',
        top: 15,
        left: 20,
        description: `SEが自らの価値を発信することで、営業提案時に定量的な根拠と説得力が生まれ、<br/>
単価向上と受注率改善の両方に寄与します。<br/><br/>
属人営業から、再現性のある提案構造へ。`
    },
    {
        id: 6,
        label: '自社内のサービス品質',
        top: 65,
        left: 20,
        description: `営業提案が“経験則”から脱却するには、<br/>
SEの知見を構造として蓄積・活用できる仕組みが必要です。<br/><br/>
育成戦略とマーケティングが連携し、<br/>
提案にも活用できるナレッジが組織的に整備されていくことが、<br/>
品質の一貫性と再現性を生み出します。`
    },
    {
        id: 7,
        label: '社員満足度向上',
        top: 65,
        left: 40,
        description: `SEが現場での気づきや成長を“自ら言語化”し、<br/>
社内での評価・報酬に直結する構造を作ることで、<br/>
“自己効力感”と“内発的動機”が育まれます。<br/><br/>
納得感のある評価が、「やってよかった」を日常にします。`
    },
    {
        id: 8,
        label: '社員の定着率',
        top: 60,
        left: 60,
        description: `“あの先輩が自社の人だったらよかったのに”をなくす。<br/>
他現場での成功体験や姿勢が、社内に届き、見える化される文化。<br/><br/>
高い成長意欲を持つSEにとって、<br/>
「ここでも成長できる」と感じられる仕組みが定着を支えます。`
    },
    {
        id: 9,
        label: '社員のスキル',
        top: 70,
        left: 60,
        description: `SE自身が現場経験を内省し、社内に発信。<br/>
それに対して同僚や上司がコメントを返すことで、<br/>
“自助”と“共助”のループが回り、スキルが深く定着します。<br/><br/>
実践知がリアルタイムに育つ、共創型の学習文化です。`
    },
    {
        id: 10,
        label: '社内資産',
        top: 65,
        left: 80,
        description: `個人の発信が、他者の問いを呼び、ナレッジとして蓄積される。<br/>
属人知が“共有資産”へと昇華する循環構造を整備しています。<br/><br/>
これは単なる知見の集積ではなく、<br/>
“誰かの成長が、誰かの助けになる”という信頼のインフラです。`
    },
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
