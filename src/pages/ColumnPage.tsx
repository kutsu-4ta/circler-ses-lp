import { Link } from "react-router-dom";
import ColumnCTA from "../components/column/ColumnCTA";
import { columnArticles } from "../components/column/ColumnArticles";
import { useState } from "react";

const ColumnPage: React.FC = () => {
    const [filterTag, setFilterTag] = useState<string | null>(null);

    // タグ一覧の生成
    const uniqueTags = Array.from(new Set(columnArticles.flatMap((a) => a.tags)));

    // カテゴリごとのグループ化
    const groupedByCategory = columnArticles.reduce((acc, article) => {
        acc[article.category] = acc[article.category] || [];
        acc[article.category].push(article);
        return acc;
    }, {} as Record<string, typeof columnArticles>);

    return (
        <div className="font-sans text-gray-800 bg-gradient-to-br from-white to-indigo-50 min-h-screen py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-indigo-800 mb-12">
                    戦略の根拠となる、知識と理論のアーカイブ
                </h1>

                {/* タグフィルター */}
                <div className="mb-12 text-center">
                    <h4 className="font-bold text-md mb-4">タグで絞り込み</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                        <button
                            onClick={() => setFilterTag(null)}
                            className={`px-3 py-1 rounded-full border font-medium transition ${
                                !filterTag ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800'
                            }`}
                        >
                            全て
                        </button>
                        {uniqueTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setFilterTag(tag)}
                                className={`px-3 py-1 rounded-full border font-medium transition ${
                                    filterTag === tag ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800'
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 横スクロール：タグ選択時 全体 */}
                {filterTag && (
                    <div className="overflow-x-auto">
                        <div className="flex gap-4 pb-2 w-full">
                            {columnArticles
                                .filter((a) => a.tags.includes(filterTag))
                                .map((article) => (
                                    <Link
                                        to={`/column/${article.id}`}
                                        key={article.id}
                                        className="min-w-[280px] max-w-[300px] flex-shrink-0 bg-white rounded-xl shadow-md p-6 border border-indigo-100 hover:shadow-lg transition"
                                    >
                                        <h2 className="text-xl font-semibold text-indigo-700 mb-2">{article.title}</h2>
                                        <div className="text-sm text-gray-500 mb-1">{article.category}</div>
                                        <p className="text-gray-700 text-sm mb-2">{article.description}</p>
                                        <div className="flex flex-wrap gap-1">
                                            {article.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                )}

                {/* 横スクロール：タグ未選択時 カテゴリ別 */}
                {!filterTag && (
                    <>
                        {Object.entries(groupedByCategory).map(([category, articles]) => (
                            <section key={category} className="mb-12">
                                <h3 className="text-xl font-bold text-indigo-700 mb-4">{category}</h3>
                                <div className="overflow-x-auto">
                                    <div className="flex gap-4 pb-2 w-full">
                                        {articles.map((article) => (
                                            <Link
                                                to={`/column/${article.id}`}
                                                key={article.id}
                                                className="min-w-[280px] max-w-[300px] flex-shrink-0 bg-white rounded-xl shadow-md p-6 border border-indigo-100 hover:shadow-lg transition"
                                            >
                                                <h2 className="text-xl font-semibold text-indigo-700 mb-2">{article.title}</h2>
                                                <div className="text-sm text-gray-500 mb-1">{article.category}</div>
                                                <p className="text-gray-700 text-sm mb-2">{article.description}</p>
                                                <div className="flex flex-wrap gap-1">
                                                    {article.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        ))}
                    </>
                )}
            </div>

            <div className="mt-24">
                <ColumnCTA />
            </div>
        </div>
    );
};

export default ColumnPage;