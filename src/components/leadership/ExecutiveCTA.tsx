import { Link } from 'react-router-dom';

const ExecutiveCTA: React.FC = () => (
    <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                人的資本経営の本質は、<br />
                「人が育つ構造」が語るブランドにある。
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
                育成と事業が分断されたSESから、価値が循環するブランド構造へ。<br />
                社内外に“人の成長”を伝え、評価される仕組みを整えること。<br />
                それが、未来の採用・営業・信頼を支える企業ブランドをつくります。<br />
                あなたの組織でも、その最初の循環を始めてみませんか？
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
