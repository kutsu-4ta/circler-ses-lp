import { Link } from "react-router-dom";

const BrandingVisionSection: React.FC = () => (
    <section className="py-24 px-4 bg-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                「人が育つ構造」が、ブランドを育てる。
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
                ブランディングとは、“発信”ではなく“構造”です。<br />
                SESという成長の現場で得た強みや学びを、社内外に還元する。<br />
                それが、組織の価値を高め、ソリューション企業へと進化するための第一歩になります。
            </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
                to="/request-materials"
                className="bg-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition"
            >
                モデル導入について相談する
            </Link>
            <Link
                to="/consultation"
                className="border-2 border-indigo-600 text-indigo-700 text-lg font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition"
            >
                自社ブランディング事例を見る
            </Link>
        </div>
    </section>
);

export default BrandingVisionSection;