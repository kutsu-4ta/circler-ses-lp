import { Link } from 'react-router-dom';

const ExecutiveCTA: React.FC = () => (
    <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                人的資本経営の第一歩は、“提案できるSE”から。
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
                ミッションに共鳴し、組織に貢献し、顧客に価値を届ける——。
                <br />
                そんな人財が、評価され、報われ、循環する仕組みがあれば、SESの常識は変えられる。
                <br />
                あなたの会社でも、“提案できるSE”という新しいスタンダードを育ててみませんか？
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                    to="/consultation"
                    className="bg-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition"
                >
                    モデル導入について相談する
                </Link>
                <Link
                    to="/case-studies"
                    className="border-2 border-indigo-600 text-indigo-700 text-lg font-semibold px-6 py-3 rounded-full hover:bg-indigo-50 transition"
                >
                    導入事例を読む
                </Link>
            </div>
        </div>
    </section>
);

export default ExecutiveCTA;
