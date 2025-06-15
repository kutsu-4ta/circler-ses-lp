import {useEffect, useRef, useState} from 'react';

type NodeData = {
    id: number;
    label: string;
    top: number;
    left: number;
    description: string;
};

const nodes: NodeData[] = [
    {
        id: 1,
        label: '顧客へのサービス品質',
        top: 10,
        left: 80,
        description: '顧客接点での品質管理と<br/>フィードバックループの整備'
    },
    {
        id: 2,
        label: '顧客満足度向上',
        top: 10,
        left: 60,
        description: 'NPSやCSATの<br/>測定・改善施策の実行'
    },
    {
        id: 3,
        label: '顧客ロイヤルティ',
        top: 10,
        left: 40,
        description: '再購入率や紹介率向上に向けた<br/>施策設計'
    },
    {
        id: 4,
        label: '企業の成長',
        top: 5,
        left: 20,
        description: 'KPI・OKRベースの<br/>成長指標の明確化'
    },
    {
        id: 5,
        label: '収益の向上',
        top: 15,
        left: 20,
        description: 'LTV向上と<br/>CAC削減のバランス最適化'
    },
    {
        id: 6,
        label: '自社内のサービス品質',
        top: 65,
        left: 20,
        description: 'プロセス標準化と<br/>ナレッジ共有による品質底上げ'
    },
    {
        id: 7,
        label: '社員満足度向上',
        top: 65,
        left: 40,
        description: '1on1の仕組みや<br/>キャリア支援制度の整備'
    },
    {
        id: 8,
        label: '社員の定着率',
        top: 60,
        left: 60,
        description: 'オンボーディングと<br/>心理的安全性の向上'
    },
    {
        id: 9,
        label: '社員のスキル',
        top: 70,
        left: 60,
        description: 'スキルマップと<br/>育成ロードマップの導入'
    },
    {
        id: 10,
        label: '社内資産',
        top: 65,
        left: 80,
        description: '技術・文化・ドキュメントの<br/>資産化と活用'
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

    const circleHoverEnter = (nodeId: number) => {
        if (hoveredNodeId !== nodeId) {
            setHoveredNodeId(nodeId);
        }
        setIsHoveringNode(true);
    };

    const circleHoverLeave = () => {
        setIsHoveringNode(false);
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

            {/* 全面オーバーレイ */}
            {hoverZone && (
                <div className="absolute inset-0 bg-black bg-opacity-60 z-40 pointer-events-none" />
            )}

            {hoverZone && (
                <>
                    {/* ゾーン名ラベル（左上／色分け） */}
                    <div className={`
            absolute
            ${hoverZone === "external" ? "top-[22%] text-blue-400" : ""}
            ${hoverZone === "internal" ? "top-[13%] text-emerald-400" : ""}
            left-1/3 transform -translate-x-1/2
            z-50 pointer-events-none
            text-xl font-semibold tracking-tight
        `}>
                        {hoverZone === "external" && "顧客体験に直結する社外循環"}
                        {hoverZone === "internal" && "社員の満足・定着・成長による人的資本循環"}
                    </div>

                    {/* 説明ボックス（中央） */}
                    {(hoverZone === "external" || hoverZone === "internal") && (
                        <div
                            className={`
                    absolute
                    ${hoverZone === "external" ? "top-[45%]" : ""}
                    ${hoverZone === "internal" ? "top-[35%]" : ""}
                    left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    z-50 pointer-events-none
                `}
                        >
                            <div className={`
                    bg-slate-800/90 border
                    ${hoverZone === "external" ? "border-blue-500" : "border-emerald-500"}
                    rounded-lg shadow-md
                    px-6 py-4 max-w-3xl w-[700px] h-[180px] relative
                `}>
                                {/* タイトル：ノード名 */}
                                <div className={`absolute top-4 left-4 text-white text-lg font-semibold`}>
                                    {hoveredNodeId
                                        ? nodes.find(n => n.id === hoveredNodeId)?.label
                                        : "項目を選択してください"}
                                </div>

                                {/* 本文 */}
                                <div className="mt-12 text-white text-left text-sm sm:text-base font-normal leading-relaxed overflow-auto">
                                    {hoveredNodeId ? (
                                        <div
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
                    )}
                </>
            )}

            {/* ノード（点とラベル） */}
            {nodes.map((node) => (
                <div
                    key={node.id}
                    id={`node-${node.id}`}
                    className={`absolute ${isNodeInActiveZone(node, hoverZone) ? 'z-50' : 'z-30'}`}
                    style={{
                        top: `${node.top}%`,
                        left: `${node.left}%`,
                        transform: 'translate(-50%, -50%)',
                    }}
                    onMouseEnter={() => circleHoverEnter(node.id)}
                    onMouseLeave={circleHoverLeave}
                >
                    {/* ラベル（上または下に切り替え） */}
                    <div
                        className="text-sm mt-1 text-center text-gray-700 whitespace-nowrap z-10 font-semibold"
                        style={{
                            backgroundColor: 'white',
                            padding: '2px 4px',
                            borderRadius: '4px',
                            display: 'inline-block'
                        }}
                    >
                        {node.label}
                    </div>

                    {/* 点 */}
                    <div
                        className={`w-3 h-3 rounded-full mx-auto mb-1 transition-all duration-200 ${node.id <= 5 ? 'bg-blue-500' : 'bg-green-500'} ${hoveredNodeId === node.id ? 'scale-150 ring-4 ring-white' : ''}`}
                        style={{zIndex: 100}}
                    />
                </div>
            ))}
        </div>
    );
}
