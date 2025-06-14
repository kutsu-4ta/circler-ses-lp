import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const MvvSection: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section className="bg-gradient-to-br from-indigo-50 to-white py-24 px-6">
            <div className="max-w-6xl mx-auto text-gray-800 space-y-20">
                {/* タイトル */}
                <div className="text-center" data-aos="fade-up">
                    <h2 className="text-5xl font-extrabold text-indigo-800 mb-4">TUNE</h2>
                    <p className="text-lg text-gray-600">私たちが目指す未来と、そのための指針</p>
                </div>

                {/* Mission */}
                <div className="space-y-6" data-aos="fade-up">
                    <h3 className="text-3xl font-bold text-indigo-700">Mission</h3>
                    <p className="text-xl leading-relaxed">
                        <strong className="text-indigo-800">人がよりよく“ハッピー”を目指せるようにする。</strong><br />
                        一人ひとりが自分の幸せを設計できる社会の実現を支援します。
                    </p>
                </div>

                {/* Vision */}
                <div className="space-y-6" data-aos="fade-up">
                    <h3 className="text-3xl font-bold text-indigo-700">Vision</h3>
                    <p className="text-xl font-medium text-gray-800">
                        100人いれば100通りの“ハッピーのロジック”を組める組織
                    </p>
                    <p className="text-base leading-loose text-gray-700">
                        私たちは、目に見えない価値こそが、組織の未来を形づくると考えています。<br />
                        「暗黙知」や「非言語の感情」は、軽視されがちですが、文化を支える本質です。<br /><br />
                        一人の笑顔が連鎖し、文化となり、戦略を生む。そしてまた人を笑顔にする。<br />
                        この<span className="font-semibold text-indigo-600">“ハッピーの循環”</span>を絶やさず、未来へ進化し続けます。
                    </p>
                </div>

                {/* Value */}
                <div className="space-y-8" data-aos="fade-up">
                    <h3 className="text-3xl font-bold text-indigo-700">Value</h3>

                    <div className="space-y-6 text-base leading-relaxed text-gray-700">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900">① バイアスを使いこなす</h4>
                            <p>
                                人間の思考は、「具体と抽象」が基礎体力となり「バイアス」が技となる。<br />
                                バイアスに踊らされず、無意識の偏りを意図的に操ることでひらめきを生む。<br />
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900">② オセロの角をとる</h4>
                            <p>
                                問題を要素に分解し、クリティカルな一手を見つける。<br />
                                複雑な課題でも、思考力と調査力で突破口をつくる。<br />
                                クリティカルな一手は様々な複合的な問題を副次的に解決する。
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900">③ 変化を大前提にもつ</h4>
                            <p>
                                希望的観測を前提にしない。<br />
                                抽象度を上げて戦略を構築し、変化に応じた複数のシナリオを持つ。
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900">④ パトス・ロゴス・エトスを込める</h4>
                            <p>
                                あらゆる提案に「情熱・論理・信頼」を宿らせ、共感と納得を生み出す。<br />
                                情熱と論理は信頼によって統合され、人を動かす力になる。<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MvvSection;
