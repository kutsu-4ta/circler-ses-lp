// Tactics.tsx
export default function Tactics() {
    return (
        <section className="bg-white py-16 ">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-blue-700 mb-6">戦術：内製による育成の仕組み</h2>
                <p className="text-gray-800 mb-4">
                    私たちは、育成サイクルを<strong>「GROWモデル」</strong>に基づいて設計し、行動変容を伴う人財育成を目指しています。
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>G：Goal（目標設定）</li>
                    <li>R：Reality（現状の理解）</li>
                    <li>O：Options（選択肢の発見）</li>
                    <li>W：Will（意志と実行）</li>
                </ul>
                <p className="text-gray-800 mb-4">
                    また、これを支えるために次のような内製コンテンツを準備しています：
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>行動ベースで定義された5つのスキルカテゴリ</li>
                    <li>講義＋実践がセットになった自社オリジナル教材</li>
                    <li>育成の過程を可視化し、フィードバックする評価ツール</li>
                </ul>
                <p className="text-gray-800">
                    社員一人ひとりが、自分の育成目標と向き合いながら、継続的な成長を実現できる仕組みを整備していきます。
                </p>
            </div>
        </section>
    );
}
