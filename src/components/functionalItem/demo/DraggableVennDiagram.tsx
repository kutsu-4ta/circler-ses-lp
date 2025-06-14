import { useRef, useState } from "react";

interface Position {
    x: number;
    y: number;
}

const initialPositions: Record<string, Position> = {
    will: { x: 200, y: 190 },
    can: { x: 300, y: 180 },
    must: { x: 260, y: 60 },
};

const DraggableVennDiagram: React.FC = () => {
    const [positions, setPositions] = useState(initialPositions);
    const dragging = useRef<{ key: string | null; offsetX: number; offsetY: number }>({
        key: null,
        offsetX: 0,
        offsetY: 0,
    });

    const handleMouseDown = (key: string, e: React.MouseEvent<HTMLDivElement>) => {
        dragging.current.key = key;
        dragging.current.offsetX = e.clientX - positions[key].x;
        dragging.current.offsetY = e.clientY - positions[key].y;

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
        const key = dragging.current.key;
        if (!key) return;

        const newX = e.clientX - dragging.current.offsetX;
        const newY = e.clientY - dragging.current.offsetY;

        setPositions((prev) => ({
            ...prev,
            [key]: { x: newX, y: newY },
        }));
    };

    const handleMouseUp = () => {
        dragging.current.key = null;
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
    };

    const renderCircle = (key: string, color: string, label: string) => (
        <div
            key={key}
            onMouseDown={(e) => handleMouseDown(key, e)}
            className={`absolute w-40 h-40 rounded-full opacity-60 flex items-center justify-center cursor-move text-sm font-semibold text-black`}
            style={{
                backgroundColor: color,
                top: positions[key].y,
                left: positions[key].x,
            }}
        >
            {label}
        </div>
    );

    return (
        <div className="flex flex-col items-center py-10 select-none">
            <div className="relative w-[700px] h-[420px] border rounded">
                {renderCircle("will", "rgb(129,140,248)", "Will（やりたいこと）")}
                {renderCircle("can", "rgb(74,222,128)", "Can（できること）")}
                {renderCircle("must", "rgb(253,224,71)", "Must（やらないといけないこと）")}
            </div>
        </div>
    );
};

export default DraggableVennDiagram;
