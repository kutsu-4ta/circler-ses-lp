import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const items = [
    {
        title: '“単価＝価値”からの脱却',
        text: `人材の価値が「いくらで売れたか」で決まる。<br/>
そんなSES特有の構造に対し、本戦略では<b>自社が価値を定義し、再定義する</b>という営みを組み込んでいます。<br/>
現場成果を「価値」として言語化・蓄積し、報酬や評価基準と接続させることで、<br/>
単価に依存しない人的資本経営の基盤を構築します。`,
        img: '/images/value-definition.png',
        reverse: false
    },
    {
        title: '“あの先輩が自社の人だったら”をなくす',
        text: `SESでは現場にしか目標とする先輩がいない、という状況が生まれやすく、<br/>
高い成長意欲を持つSEほど、キャリアの展望が自社に描けず孤立していきます。<br/>
本戦略は、<b>SEが現場で得た学びを社内に還元できる仕組み</b>を整備し、<br/>
成長と帰属の断絶を埋めていきます。`,
        img: '/images/coworker.png',
        reverse: true
    },
    {
        title: '“経験則だけ”の営業から構造へ',
        text: `営業の提案が感覚と経験に頼り切っている状態では、組織的な成長は望めません。<br/>
本戦略では、<b>SEの内省と主任との1on1を通じて価値を可視化</b>し、<br/>
営業がそれを顧客に適切に翻訳・提案するという役割分担により、<br/>
属人化を防ぎながら個別対応の質を維持しています。`,
        img: '/images/sales-power.png',
        reverse: false
    }
];

const LogicSection: React.FC = () => (
    <section className="py-24 px-6 bg-indigo-50">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-indigo-800 text-center mb-20 leading-snug">
                “育成”と“ビジネス”をつなげる。<br />
                SEの価値を循環させる、誠実な戦略モデル。
            </h2>

            {items.map((item, index) => (
                <motion.div
                    key={index}
                    className={`mb-24 flex flex-col md:flex-row items-center ${item.reverse ? 'md:flex-row-reverse' : ''}`}
                    initial={{ opacity: 0, x: item.reverse ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="w-full md:w-2/3 p-16">
                        <img src={item.img} alt="image" className="w-full h-auto" />
                    </div>
                    <div className="w-full md:w-1/2 p-6">
                        <h3 className="text-2xl font-semibold text-indigo-700 mb-4">{item.title}</h3>
                        <p
                            className="text-lg text-gray-700 leading-relaxed mb-6"
                            dangerouslySetInnerHTML={{ __html: item.text }}
                        />
                        <Link to="/services">
                            <button className="px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-700 transition">
                                モデルの詳細を見る
                            </button>
                        </Link>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
);

export default LogicSection;
