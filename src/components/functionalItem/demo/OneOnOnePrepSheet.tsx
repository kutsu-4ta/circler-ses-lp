// components/OneOnOnePrepSheet.tsx

import { useEffect, useState } from "react";

const OneOnOnePrepSheet: React.FC = () => {
    const [role, setRole] = useState<'member' | 'leader'>('member');
    const [topics, setTopics] = useState([]);
    const [memo, setMemo] = useState('');

    const memberProfile = {
        name: '佐藤 拓也',
        role: 'Webエンジニア / フロントエンド中心',
        mindset: '志向：技術追求型・チーム貢献志向',
        topics: [
            { purpose: '伝える', title: '給料についての不安', detail: '現状のスキルと業務内容に対して、給料が見合っていないと感じる場面がある' },
            { purpose: '聞き出す', title: 'UI設計案件の可能性', detail: 'Next.jsでの実装経験を活かして、よりUI設計に近い仕事ができる案件があるか' },
            { purpose: '合意をとる', title: '成長方針の明文化', detail: 'セルフマネジメントと提案力の育成を目指す方向で、上長と共通認識を取りたい' },
        ],
        memo: '1on1のあと、提案資料の作り方を教えてもらいたい'
    };

    const leaderProfile = {
        name: '中村 沙織',
        role: '開発リーダー / フロントエンド全般',
        mindset: '志向：育成と仕組み化志向',
        topics: [
            { purpose: '聞き出す', title: '本人の報酬に関する温度感', detail: '昇給希望の背景にある不満の種類（待遇／業務内容／成長）を確認したい' },
            { purpose: '伝える', title: '評価の視点共有', detail: '「巻き込み力」「提案資料」なども今後の評価軸になってくる点を伝えたい' },
            { purpose: '合意をとる', title: '成長支援の方向性', detail: '中長期的にUI設計や技術提案ができるような方向で、成長計画を立てていく' },
        ],
        memo: '本人が給与に関して明言する前に、話しやすい空気を作りたい'
    };

    // 切り替え時の初期化
    useEffect(() => {
        if (role === 'member') {
            setTopics(memberProfile.topics);
            setMemo(memberProfile.memo);
        } else {
            setTopics(leaderProfile.topics);
            setMemo(leaderProfile.memo);
        }
    }, [role]);

    const handleTopicChange = (index, key, value) => {
        const newTopics = [...topics];
        newTopics[index][key] = value;
        setTopics(newTopics);
    };

    const addTopic = () => {
        setTopics([...topics, { purpose: '', title: '', detail: '' }]);
    };

    const profile = role === 'member' ? memberProfile : leaderProfile;

    return (
        <div className="p-6 space-y-6 bg-white">
            {/* トグル切替 */}
            <div className="flex space-x-4">
                <button onClick={() => setRole('member')} className={role === 'member' ? 'font-bold' : ''}>メンバー用</button>
                <button onClick={() => setRole('leader')} className={role === 'leader' ? 'font-bold' : ''}>主任用(閲覧制限あり)</button>
            </div>

            {/* プロフィール */}
            <div className="grid sm:grid-cols-2 gap-6 bg-white border-t px-6 py-4">
                <div className="py-4 space-y-2">
                    <div className="flex items-center space-x-4 mb-2">
                        <div className="w-20 h-20 rounded-full overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-500 text-2xl font-bold">
                            User
                        </div>
                        <p className="text-base font-semibold text-gray-900">{profile.name}</p>
                    </div>
                    <p className="text-sm text-gray-600">{profile.role}</p>
                    <p className="text-sm text-gray-500">{profile.mindset}</p>
                </div>
                <div className="py-4 text-left">
                    <p>🧠 <strong>目的と話題を事前に整理！</strong><br />考えをまとめて1on1に臨むことで、話したいことが話せる。</p>
                    <p>🗣️ <strong>効率よく対話を深める！</strong><br />目的と論点を定めておくことで、要点を押さえた対話ができる。</p>
                    <p>🎮 <strong>雑談やキャリアの話もスムーズに！</strong><br />議題が終わってからの時間を有意義に使える。</p>
                </div>
            </div>

            {/* 議題リスト */}
            <div>
                <h3 className="font-semibold mb-2">📝 議題一覧</h3>
                {topics.map((topic, index) => (
                    <div key={index} className="mb-4 border p-3 rounded">
                        <select
                            value={topic.purpose}
                            onChange={(e) => handleTopicChange(index, 'purpose', e.target.value)}
                            className="mb-2"
                        >
                            <option value="">目的を選択</option>
                            <option value="伝える">伝える</option>
                            <option value="聞き出す">聞き出す</option>
                            <option value="合意をとる">合意をとる</option>
                        </select>
                        <input
                            type="text"
                            placeholder="タイトル"
                            value={topic.title}
                            onChange={(e) => handleTopicChange(index, 'title', e.target.value)}
                            className="block w-full mb-2 border rounded p-1"
                        />
                        <textarea
                            placeholder="詳細"
                            value={topic.detail}
                            onChange={(e) => handleTopicChange(index, 'detail', e.target.value)}
                            className="w-full border rounded p-1"
                        />
                    </div>
                ))}
                <button onClick={addTopic} className="text-indigo-600 text-sm">＋ 議題を追加</button>
            </div>

            {/* メモ */}
            <div>
                <h3 className="font-semibold mb-2">🗒️ 自由メモ</h3>
                <textarea
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                    className="w-full border rounded p-2"
                    placeholder="雑談ネタや伝え忘れ防止メモなどを自由に記入"
                />
            </div>
        </div>
    );
};

export default OneOnOnePrepSheet;
