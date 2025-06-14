import { Link } from 'react-router-dom';

const ColumnCTA: React.FC = () => (
    <section className="py-24 px-4 bg-indigo-50">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                “知識”は“実践知”にしなければ意味がない。
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
                モチベーション理論も、人的資本経営も、評価設計も——<br />
                知識として蓄えるだけでは、組織は1ミリも変わりません。<br />
                <br />
                私たちは、「実行の構造」までセットでデザインします。<br />
                行動が変わり、文化が生まれる。その一歩をご一緒しませんか？
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                    to="/consultation"
                    className="bg-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition"
                >
                    戦略導入について相談する
                </Link>
                <Link
                    to="/case-studies"
                    className="border-2 border-indigo-600 text-indigo-700 text-lg font-semibold px-6 py-3 rounded-full hover:bg-indigo-100 transition"
                >
                    導入事例を読む
                </Link>
            </div>
        </div>
    </section>
);

export default ColumnCTA;
