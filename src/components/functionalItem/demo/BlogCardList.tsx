import { useState } from 'react';
import BlogCard from './BlogCard';
import BlogModal from './BlogModal';

const blogData = [
    {
        category: 'キャリア・成長',
        title: '「1on1って結局なんなん？」を超えていくシートを作った話',
        excerpt: '「どうせ言っても無駄」「上司に何も期待していない」……。そんな声が聞こえる職場で、どう1on1を再設計するか。',
        author: '佐藤 拓也',
        role: 'Webエンジニア',
        tags: ['1on1', 'キャリア支援', '自己効力感'],
        date: '2025-06-10',
        likes: 12,
    },
    {
        category: 'キャリア・成長',
        title: 'Will・Can・Mustを“配置”するUXとは何か？',
        excerpt: '言葉にしきれない感覚を、ベン図にドラッグすることで浮かび上がる。新しいUIの可能性を、プロトタイプで検証。',
        author: '佐藤 拓也',
        role: 'Webエンジニア',
        tags: ['UX', '社内ツール', 'キャリア設計'],
        date: '2025-06-01',
        likes: 8,
    },
    {
        category: '組織文化・共有',
        title: '社内ブログ、やらされ感から文化へ',
        excerpt: '“成功体験の言語化”は自分のためであり、次の誰かの土壌になる。社内ブログが「育つ文化」の起点になった話。',
        author: '佐藤 拓也',
        role: 'Webエンジニア',
        tags: ['ナレッジ共有', '組織文化', 'サーキュラーSES'],
        date: '2025-05-29',
        likes: 15,
    },
    {
        category: '趣味・雑記',
        title: '最近ハマってるキーボードとデスク環境の話',
        excerpt: 'HHKBに戻ってきた話と、デスクの快適化がもたらす集中力についての雑記。',
        author: '佐藤 拓也',
        role: 'Webエンジニア',
        tags: ['雑記', '趣味', 'ガジェット'],
        date: '2025-06-11',
        likes: 4,
    },
    {
        category: '技術・Tips',
        title: 'Tailwindで始めるデザインの基礎',
        excerpt: 'Tailwindのユーティリティを使った「見た目のバランス」のとり方を紹介。',
        author: '佐藤 拓也',
        role: 'Webエンジニア',
        tags: ['Tailwind', 'デザイン', 'フロントエンド'],
        date: '2025-06-08',
        likes: 9,
    },
    {
        category: 'キャリア・成長',
        title: '育成における「タイミング」の話',
        excerpt: '人の成長には波がある。焦らず、でも逃さず。その「間」をどう作るかをリーダーとして考えた。',
        author: '中村 沙織',
        role: '開発リーダー',
        tags: ['育成', 'マネジメント', 'キャリア'],
        date: '2025-06-03',
        likes: 10,
    },
    {
        category: '組織文化・共有',
        title: '「報告・連絡・相談」は古い？',
        excerpt: 'ホウレンソウをアップデートして、対話を中心とした情報共有文化を作るには。',
        author: '鈴木 健一',
        role: 'バックエンドエンジニア',
        tags: ['組織論', '文化', 'チーム開発'],
        date: '2025-06-07',
        likes: 7,
    },
    {
        category: '技術・Tips',
        title: 'PostgreSQLで爆速全文検索を実装する',
        excerpt: 'Elasticsearchは重すぎる？PostgreSQLだけで実現する検索体験の工夫。',
        author: '鈴木 健一',
        role: 'バックエンドエンジニア',
        tags: ['PostgreSQL', '全文検索', 'Tips'],
        date: '2025-06-02',
        likes: 13,
    },
    {
        category: '趣味・雑記',
        title: '仕事の合間のリセット飯：即席うどん編',
        excerpt: 'エンジニアの小腹満たしに最適な「混ぜるだけレシピ」。脳がクリアになる！',
        author: '山田 花子',
        role: 'QAエンジニア',
        tags: ['料理', '雑記', 'ライフハック'],
        date: '2025-06-09',
        likes: 6,
    },
    {
        category: '技術・Tips',
        title: 'PlaywrightでUIテストのストレスを減らす方法',
        excerpt: 'E2Eテストを安定させたいなら、まずはここから。私が実践した3つのポイント。',
        author: '山田 花子',
        role: 'QAエンジニア',
        tags: ['Playwright', 'E2Eテスト', 'QA'],
        date: '2025-06-06',
        likes: 11,
    },
    {
        category: '趣味・雑記',
        title: 'React × D3で詰まったとこまとめ',
        excerpt: 'ライブラリ同士の干渉でアニメーションが崩れた件、Stack Overflowにもなかった解決法を自力で見つけた話。',
        author: '田中 太郎',
        role: 'フロントエンドエンジニア',
        tags: ['React', 'D3.js', '趣味開発'],
        date: '2025-06-12',
        likes: 5,
    },
    {
        category: '趣味・雑記',
        title: '夜泣き、タスク、デプロイ。限界育児エンジニアの日常',
        excerpt: '0歳児とSprintの両立、思ったよりハードモードだった。Slackと泣き声に挟まれて気づいた「働き方」のヒント。',
        author: '高橋 真由美',
        role: 'Webエンジニア（育休復帰）',
        tags: ['子育て', '働き方', '雑記'],
        date: '2025-06-10',
        likes: 18,
    },
    {
        category: '組織文化・共有',
        title: '「乾杯」の裏には30のタスクがある：懇親会運営ログ',
        excerpt: '気軽なイベントの裏で、予算交渉・仕入れ調整・進行台本まで。エンジニアがイベントを回すとこうなる。',
        author: '小林 涼',
        role: 'インフラエンジニア',
        tags: ['社内イベント', '組織運営', '裏側ログ'],
        date: '2025-06-13',
        likes: 14,
    }
];

// カテゴリごとにグループ化
const groupByCategory = blogData.reduce((acc, blog) => {
    acc[blog.category] = acc[blog.category] || [];
    acc[blog.category].push(blog);
    return acc;
}, {} as Record<string, typeof blogData>);

const BlogCardList: React.FC = () => {
    const [filterTag, setFilterTag] = useState<string | null>(null);
    const [selectedBlog, setSelectedBlog] = useState<typeof blogData[0] | null>(null);

    const handleCardClick = (blog: typeof blogData[0]) => setSelectedBlog(blog);
    const handleCloseModal = () => setSelectedBlog(null);

    const uniqueTags = Array.from(new Set(blogData.flatMap((b) => b.tags)));

    return (
        <div className="space-y-12">
            {/* タグフィルター */}
            <div className="mb-8">
                <h4 className="font-bold text-md mb-2">✏️ タグで絞り込み</h4>
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setFilterTag(null)}
                        className={`px-3 py-1 rounded-full border ${
                            !filterTag ? 'bg-indigo-600 text-white' : 'bg-white'
                        }`}
                    >
                        全て
                    </button>
                    {uniqueTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setFilterTag(tag)}
                            className={`px-3 py-1 rounded-full border ${
                                filterTag === tag ? 'bg-indigo-600 text-white' : 'bg-white'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* カテゴリ別表示（横スクロール対応） */}
            {Object.entries(groupByCategory).map(([category, blogs]) => {
                const filtered = blogs.filter((blog) => !filterTag || blog.tags.includes(filterTag));
                if (filtered.length === 0) return null;

                return (
                    <section key={category}>
                        <h3 className="text-xl font-bold text-indigo-700 mb-4">{category}</h3>
                        <div className="overflow-x-auto">
                            <div className="flex gap-4 pb-2 w-full">
                                {filtered.map((blog, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleCardClick(blog)}
                                        className="cursor-pointer min-w-[280px] max-w-[300px] flex-shrink-0"
                                    >
                                        <BlogCard {...blog} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* モーダル */}
            {selectedBlog && <BlogModal blog={selectedBlog} onClose={handleCloseModal} />}
        </div>
    );
};


export default BlogCardList;
