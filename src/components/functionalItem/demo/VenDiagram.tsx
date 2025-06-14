interface VennDiagramProps {
    overlap: {
        wc: number;
        wm: number;
        cm: number;
    };
}

const VennDiagram: React.FC<VennDiagramProps> = ({ overlap }) => {
    const { wc, wm, cm } = overlap;

    const centerX = 180;
    const centerY = 130;
    const radius = 80;

    // 各円の位置調整（中心基準 + 半径分左に補正）
    const willX = centerX - wc / 2 - radius;
    const willY = centerY;

    const canX = centerX + wc / 2 - radius;
    const canY = centerY;

    const mustX = centerX + (cm - wm) / 4 - radius;
    const mustY = centerY - 60 + (300 - (wm + cm)) / 4;

    return (
        <div className="flex flex-col items-center py-10">
            <div className="relative w-[360px] h-[300px]">
                {/* Will */}
                <div
                    className="absolute w-40 h-40 bg-indigo-400 rounded-full opacity-60 flex justify-center items-center text-black text-sm font-semibold"
                    style={{ top: willY, left: willX }}
                >
                    Will（やりたいこと）
                </div>

                {/* Can */}
                <div
                    className="absolute w-40 h-40 bg-green-400 rounded-full opacity-60 flex justify-center items-center text-black text-sm font-semibold"
                    style={{ top: canY, left: canX }}
                >
                    Can（できること）
                </div>

                {/* Must */}
                <div
                    className="absolute w-40 h-40 bg-yellow-400 rounded-full opacity-60 flex justify-center items-center text-black text-sm font-semibold"
                    style={{ top: mustY, left: mustX }}
                >
                    Must（やらないといけないこと）
                </div>
            </div>
        </div>
    );
};

export default VennDiagram;
