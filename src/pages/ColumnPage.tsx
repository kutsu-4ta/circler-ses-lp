import { Link } from 'react-router-dom';
import ColumnCTA from '../components/column/ColumnCTA';

const columnArticles = [
    {
        id: 'external-factors',
        title: '社会の変化と人的資本経営',
        description: '少子高齢化・ジョブ型移行・人的資本開示など、なぜ今、人財戦略が必要とされるのかを解説します。',
    },
    {
        id: 'motivation-theory',
        title: 'モチベーション理論の活用',
        description: 'SDT理論、二要因論、エンゲージメント構造論など、行動経済と動機付けに基づく組織設計を紹介します。',
    },
    {
        id: 'belonging-theory',
        title: '帰属意識と納得感の構造',
        description: 'MVV・評価・1on1・社内発信などを通じて、組織に「居場所」と「自分ごと感」を持たせる手法を解説します。',
    },
    {
        id: 'internal-vision',
        title: '自社ブランディングと人財育成',
        description: '「提案できるSE」を育てることが、なぜそのまま採用力・信頼力・発信力につながるのかを示します。',
    },
    {
        id: 'recruitment-value',
        title: 'カルチャーフィット採用の設計',
        description: 'コンピテンシーと社員カルテに基づき、文化に共鳴する人を採用・定着・活躍へ導く戦略を説明します。',
    },
    {
        id: 'self-efficacy',
        title: '組織効力感という“空気”を育てるには',
        description: '組織に漂う「できそう」「信頼できる」という空気感を、どうやって戦略的に育てていくかを解説します。',
    },
    {
        id: 'self-mutual-public-aid',
        title: '自助・共助・公助で組織は循環する',
        description: '1on1・評価制度・ツール活用を通じて、支援構造がどのように循環を生むかを整理します。',
    },
    {
        id: 'internal-branding',
        title: '社内ブランディングは“文化資本”から始まる',
        description: '文化としてのMVVを社内に根付かせるために、日常的な言語化と共有がどれほど重要かを語ります。',
    },
    {
        id: 'will-can-must',
        title: 'Will・Can・Mustを使った目標設計論',
        description: '社員と会社の意志・能力・期待の重なりから目標をつくるフレームワークの実践例を紹介します。',
    },
];

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
                            <p className="text-gray-700 text-sm">{article.description}</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* CTA はページ下部に配置 */}
            <div className="mt-24">
                <ColumnCTA />
            </div>
        </div>
    );
};

export default ColumnPage;
