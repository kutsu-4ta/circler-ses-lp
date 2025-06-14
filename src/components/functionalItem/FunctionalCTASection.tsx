import { Link } from 'react-router-dom';

const FunctionalCTASection: React.FC = () => (
    <section className="py-20 px-4 bg-indigo-50">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                道具は揃っている。<br/>
                あとは、運用を始めるだけ。
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
                理念も、設計も、道具も、ここにあります。<br />
                この戦略は「再現性」と「実行性」を両立するために、ツールまで含めて設計されています。<br />
                あとは、それを運用に乗せ、組織文化として回していくだけです。<br />
                現場が動き、成果が積み上がり、ブランディングが始まります。
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                    to="/consultation"
                    className="bg-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition"
                >
                    ツール活用の相談をする
                </Link>
                <Link
                    to="/toolkits"
                    className="border-2 border-indigo-600 text-indigo-700 text-lg font-semibold px-6 py-3 rounded-full hover:bg-white transition"
                >
                    活用ガイドを読む
                </Link>
            </div>
        </div>
    </section>
);

export default FunctionalCTASection;
