const EmployeeProfileCard: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-indigo-100">
                {/* プロフィール + 帰属意識：横並び */}
                <div className="grid sm:grid-cols-2 gap-6 bg-white border-t px-6 py-4">
                    {/* プロフィール */}
                    <div className="py-4 space-y-2">
                        {/* アイコン＋名前だけ横並び */}
                        <div className="flex items-center space-x-4 mb-2">
                            <div className="w-20 h-20 rounded-full overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-500 text-2xl font-bold">
                                User
                            </div>
                            <p className="text-base font-semibold text-gray-900">佐藤 拓也</p>
                        </div>
                        <p className="text-sm text-gray-600">Webエンジニア / フロントエンド中心</p>
                        <p className="text-sm text-gray-500">志向：技術追求型・チーム貢献志向</p>
                    </div>

                    {/* 帰属意識分析 */}
                    <div className="py-4">
                        <h3 className="text-md font-semibold text-indigo-700 mb-2">🔍 帰属意識分析</h3>
                        <ul className="text-sm text-gray-800 space-y-1">
                            <li>1. 組織の目標の魅力：<span className="font-bold text-indigo-600">2</span></li>
                            <li>2. 活動の魅力：<span className="font-bold text-indigo-600">3</span></li>
                            <li>3. 構成員の魅力：<span className="font-bold text-indigo-600">3</span></li>
                            <li>4. 待遇の魅力：<span className="font-bold text-red-500">1</span></li>
                        </ul>
                    </div>
                </div>

                {/* スキル比較 */}
                <div className="grid sm:grid-cols-2 gap-6 bg-indigo-50 border-t px-6 py-4">
                    <div>
                        <h3 className="text-md font-semibold text-indigo-700 mb-2 text-left">👣 現場で身についてきたこと</h3>
                        <div className="text-sm text-gray-800 space-y-1 text-left">
                            <p><strong>🧰 ハードスキル：</strong>Next.js / Tailwind / Figma</p>
                            <p><strong>💡 ソフトスキル：</strong>仕様整理力 / タスク分解 / ペアプロでのナレッジ共有</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-md  font-semibold text-indigo-700 mb-2 text-left">🎯 目標に書いた成長イメージ</h3>
                        <div className="text-sm text-gray-800 space-y-1 text-left">
                            <p><strong>🧰 ハードスキル：</strong>UI設計力 / サーバー設計（API設計）</p>
                            <p><strong>💡 ソフトスキル：</strong>提案資料づくり / チームの巻き込み / セルフマネジメント</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeProfileCard;
