import { Link } from "react-router-dom";
const IntroSection: React.FC = () => (
    <div className=" py-24 px-6 sm:px-12 text-gray-900">
        <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-indigo-800 mb-6 leading-tight">
                「人が育つ構造」こそが、<br/>
                SESを超えるブランディング戦略。
            </h1>
            <p className="text-xl sm:text-2xl mb-6 leading-relaxed text-gray-700">
                離職率の増加、モチベーションの停滞、<br className="sm:hidden"/>SEの成果と評価の分断。<br/>
                こうした問題は、多くのSES企業が「育成」ではなく<br/>
                <br className="sm:hidden"/>「消費」の構造を続けてきたことに起因しています。
            </p>

            <p className="text-lg sm:text-xl mb-10 leading-relaxed text-gray-700">
                今、必要なのは「人を育てる仕組み」そのものを再設計すること。<br />
                社員が自走し、社外からも評価される“ブランド構造”へと転換することです。<br />
                私たちは、その基盤として「サーキュラーSES」という人財循環モデルを提案します。
            </p>

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

            <p className="text-lg text-gray-700 leading-relaxed mt-10">
                ブランディングとは、“発信”ではなく“構造”です。<br />
                SESという成長の現場で得た強みや学びを、社内外に還元する。<br />
                それが、組織の価値を高め、ソリューション企業へと進化するための第一歩になります。
            </p>

        </div>
    </div>
);

export default IntroSection;
