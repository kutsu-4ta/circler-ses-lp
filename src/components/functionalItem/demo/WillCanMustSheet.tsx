import DraggableVennDiagram from "./DraggableVennDiagram";

const WillCanMustActionSheet: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow border space-y-10">
            {/* プロフィール */}
            <div className="grid sm:grid-cols-2 gap-6 bg-white border-t px-6 py-4">
                {/* プロフィール */}
                <div className="py-4 space-y-2">
                    <div className="flex items-center space-x-4 mb-2">
                        <div className="w-20 h-20 rounded-full overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-500 text-2xl font-bold">
                            YM
                        </div>
                        <p className="text-base font-semibold text-gray-900">佐藤 拓也</p>
                    </div>
                    <p className="text-sm text-gray-600">Webエンジニア / フロントエンド中心</p>
                    <p className="text-sm text-gray-500">志向：技術追求型・チーム貢献志向</p>
                </div>
                {/* 解説 */}
                <div className="py-4 text-left">
                    <p>🧠 <strong>言語化できなくてもOK！</strong><br/>「この辺かな？」と感覚で動かしてみよう。</p>
                    <p>🗣️ <strong>1on1の対話材料に！</strong><br/>置いた位置に理由があるかも？ 主任と話してみよう。</p>
                    <p>🎮 <strong>楽しく・気軽に！</strong><br/>まずは動かして、感覚で自分を捉えてみる体験を！</p>
                </div>
            </div>

            {/* ドラッグ&ドロップでのベン図 */}
            <div>
                <p className="text-sm text-gray-600">できること（Can）・やりたいこと（Will）・やらないといけないこと（Must）の3つを整理し、<br/>自己納得と提案材料を両立するためのフレームワークです。</p>
                <h3 className="font-semibold text-indigo-700 mb-2">🖱️ ドラッグで配置してみよう</h3>
                <DraggableVennDiagram/>
            </div>

            {/* メモ・フィードバック */}
            <div className="grid sm:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-semibold text-indigo-700 mb-2">📝 本人メモ</h3>
                    <textarea
                        className="w-full h-64 border rounded p-2 text-sm"
                        defaultValue={'現場ではNext.jsやTailwindでの実装に手応えを感じてきた。\n' +
                            'UIの設計とか、もう少し上流から関わる仕事もやってみたい。\n' +
                            '給料がちょっと物足りなくて、このままでいいのか少し迷いもある。'
                        }
                    />
                </div>
                <div>
                    <h3 className="font-semibold text-indigo-700 mb-2">💬 現場・営業・自社からフィードバック</h3>
                    <textarea
                        className="w-full h-64 border rounded p-2 text-sm"
                        defaultValue={'現場リーダー：\n' + '「ペアプロの進行やタスク整理がすごく助かっている。チームに良い影響を与えている。」\n' +
                            '営業担当：\n' + '「今のスキル感なら、提案先の幅が広がる。もう少しUI設計寄りの案件も視野に入れて良さそう。」\n' +
                            '自社主任：\n' + '「技術だけじゃなく、提案資料づくりや巻き込み力にも挑戦してほしい。昇給交渉の材料にもなる。」'}
                    />
                </div>
            </div>
        </div>
    );
};

export default WillCanMustActionSheet;
