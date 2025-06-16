import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const visionData = [
    {
        image: '/images/future-employee.png',
        title: '社員にとっての未来',
        content:
            '努力の理由が「昇進のため」から「自分のロジックを磨くため」に変わる。やりたいことに熱中できる設計図が、ここにある。',
    },
    {
        image: '/images/future-company.png',
        title: '会社にとっての未来',
        content:
            '誰かの気づきがナレッジになり、文化となる。組織全体が“変化を大前提にした”進化型の構造を持つようになる。',
    },
    {
        image: '/images/future-client.png',
        title: '顧客にとっての未来',
        content:
            '一人のSEの視点が、組織や事業を変える。信頼と共感の連鎖で、顧客との関係が単なる“提供”から“共創”へと進化する。',
    },
];

const FutureVisionSection: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-gradient-to-b from-indigo-50 to-white">
            <div className="max-w-6xl mx-auto text-center">

                {/* タイトル */}
                <motion.h2
                    className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    ハッピーの“ロジック”が、組織の未来をつくる。
                </motion.h2>

                {/* サブコピー */}
                <motion.p
                    className="text-lg text-gray-700 leading-relaxed mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    人が思考し、感情をもち、信頼し合える限り──<br />
                    幸せは“制度”ではなく、“自分で組めるロジック”になる。<br />
                    私たちはその設計を、制度と文化の両輪で支えます。
                </motion.p>

                {/* 横並び：画像中心ビジョンブロック */}
                <div className="grid sm:grid-cols-3 gap-12 text-center">
                    {visionData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-36 h-36 sm:w-44 sm:h-44 object-contain mb-6"
                            />
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{item.title}</h3>
                            <p className="text-gray-700 leading-relaxed">{item.content}</p>
                        </motion.div>
                    ))}
                </div>

                {/* クライマックスメッセージ */}
                <motion.div
                    className="mt-24 mb-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-2xl text-indigo-900 font-bold leading-relaxed">
                        誰かの“バイアス”が、<br className="sm:hidden" />
                        誰かの“ロジック”を刺激する。
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                        人の無意識の感情や気づきが、<br className="sm:hidden" />
                        組織の文化と戦略を形づくる。<br />
                        私たちは、それを信じています。
                    </p>
                </motion.div>

                {/* CTAボタン */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link to="/column/tactics">
                        <button className="px-8 py-3 bg-indigo-600 text-white rounded-full text-lg hover:bg-indigo-700 transition">
                            実行プランを見る
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FutureVisionSection;
