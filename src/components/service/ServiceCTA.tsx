import { Link } from 'react-router-dom';

const ServiceCTA: React.FC = () => (
    <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                人的資本を“構造”で活かす会社へ。
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
                このモデルは、単なる人材育成ではありません。<br />
                自律的な社員の行動を評価し、文化として定着させ、営業や採用力にも繋げる。<br />
                それが「人が育つ会社」として選ばれる理由になります。<br />
                いま、その循環を始めてみませんか？
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

export default ServiceCTA;
