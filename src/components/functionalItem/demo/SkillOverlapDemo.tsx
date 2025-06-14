import { useState } from 'react';
import VennDiagram from "./VenDiagram";

type Skill = {
    value: string;
    type: 'hard' | 'soft';
};

const SkillInput = ({
                        label,
                        skill,
                        setSkill,
                    }: {
    label: string;
    skill: Skill;
    setSkill: React.Dispatch<React.SetStateAction<Skill>>;
}) => {
    return (
        <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    placeholder="スキルを入力"
                    value={skill.value}
                    onChange={(e) => setSkill({ ...skill, value: e.target.value })}
                />
                <select
                    value={skill.type}
                    onChange={(e) => setSkill({ ...skill, type: e.target.value as 'hard' | 'soft' })}
                    className="p-2 border border-gray-300 rounded text-sm"
                >
                    <option value="hard">ハード</option>
                    <option value="soft">ソフト</option>
                </select>
            </div>
        </div>
    );
};

const SkillOverlapDemo: React.FC = () => {
    const [will, setWill] = useState<Skill>({ value: '', type: 'hard' });
    const [can, setCan] = useState<Skill>({ value: '', type: 'hard' });
    const [must, setMust] = useState<Skill>({ value: '', type: 'hard' });

    // 初期値はすべて最大距離（＝重なりなし）
    const [overlap, setOverlap] = useState({ wc: 200, wm: 200, cm: 200 });

    const calculateOverlap = () => {
        const equal = (a: Skill, b: Skill) =>
            a.value.trim() !== '' &&
            b.value.trim() !== '' &&
            a.value.toLowerCase() === b.value.toLowerCase() &&
            a.type === b.type;

        const wc = equal(will, can) ? 30 : 100;
        const wm = equal(will, must) ? 30 : 100;
        const cm = equal(can, must) ? 30 : 100;

        setOverlap({ wc, wm, cm });
    };

    return (
        <div className="max-w-xl mx-auto px-6 py-12">
            <SkillInput label="Will（志向）" skill={will} setSkill={setWill} />
            <SkillInput label="Can（強み）" skill={can} setSkill={setCan} />
            <SkillInput label="Must（現場ニーズ）" skill={must} setSkill={setMust} />

            <button
                onClick={calculateOverlap}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm"
            >
                更新
            </button>

            <VennDiagram overlap={overlap} />
        </div>
    );
};

export default SkillOverlapDemo;
