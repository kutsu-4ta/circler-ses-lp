import { Link } from "react-router-dom";
import ColumnCTA from "../components/column/ColumnCTA";
import {columnArticles} from "../components/column/ColumnArticles";

const ColumnPage: React.FC = () => {
    return (
        <div className="font-sans text-gray-800 bg-gradient-to-br from-white to-indigo-50 min-h-screen py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-indigo-800 mb-12">
                    戦略の根拠となる、知識と理論のアーカイブ
                </h1>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {columnArticles.map((article) => (
                        <Link
                            to={`/column/${article.id}`}
                            key={article.id}
                            className="bg-white rounded-xl shadow-md p-6 border border-indigo-100 hover:shadow-lg transition"
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

            <div className="mt-24">
                <ColumnCTA />
            </div>
        </div>
    );
};

export default ColumnPage;